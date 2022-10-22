/*Here is a basic task store. We’ve only given you one action: fetchTasks. 
You’ll need to create your own store actions to update, create and delete the tasks.*/

// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

// FetchTasks
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

    //
    async createTask(id, task, name) {
      const { error } = await supabase.from("tasks").insert([
        {
          user_id: id,
          tasksName: task,
          newTasks: name,
        },
      ]);
      if (error) throw error;
    },
  },
});
