import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    errors: null,
  }),
  actions: {
    // FetchTasks
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

    //CreateTask
    async createTask(title, complete, user_id) {
      const { error } = await supabase
        .from("tasks")
        .insert({ title: title, is_complete: complete, user_id: user_id });
    },
    //Edit Task

    async editTask(id, title) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: title })
          .eq("id", id);
        this.errors = null;
        if (error) throw error;
      } catch (error) {
        this.errors = "Oops! Something went wrong, please try again. ";
      }
    },
    // toogleCompleted: changes task state (completed or not)

    async toogleCompleted(id, isComplete) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ is_complete: isComplete })
          .eq("id", id);
        this.errors = null;
        if (error) throw error;
      } catch (error) {
        this.errors = "Error completing task, please try again. ";
      }
    },

    // Remove Task removeTodo

    async removeTask(taskId) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: taskId });
    },
});
