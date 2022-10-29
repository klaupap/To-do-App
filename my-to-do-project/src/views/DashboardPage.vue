<template>
  <section class="bg d-flex">
    <div class="container d-flex justify-content-center">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col">
          <form @submit.prevent="addNewTodo">
            <h1
              class="my-5 display-5 fw-bold ls-tight animate__animated animate__bounce"
              style="color: hsl(218, 81%, 75%)"
            >
              What's on your todo list?
            </h1>
            <div class="row">
              <div class="col input-group mb-3">
                <input
                  class="form-control"
                  placeholder="Buy some ice-cream"
                  type="text"
                  id="inputText"
                  v-model="newTodo"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </form>

          <div
            class="row justify-content-center align-items-center text-center"
          ></div>

          <div class="">
            <ul style="list-style: none" class="list-group list-group-flush">
              <li
                v-for="(todo, index) in tasklist"
                :key="todo.id"
                :index="index"
                :task="task"
                class="list-group-item"
              >
                <h4 :class="{ done: todo.done }">
                  {{ todo.content }}
                  <div
                    class="list-buttons d-flex align-items-center flex-row-reverse"
                  >
                    <button
                      class="btn mb-4 tick p-2"
                      @click="completed(task.id, task.is_complete)"
                    >
                      <i class="bi bi-check-circle-fill"></i>
                    </button>
                    <button class="btn mb-4 trash p-2" @click="remove(task.id)">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import { ref, reactive } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task.js";
import { computed } from "vue";

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);
let todo = reactive(tasks);


onMounted(async () => {
  try {
    await taskStore.fetchTasks();
  } catch (e) {
    console.log(e);
  }
});


</script>
<style scoped>
html {
  height: 100%;
  margin: 0%;
  padding: 0%;
}
.btn {
  border: none;
}
.container {
  margin: 0%;
  padding: 0%;
}
.bg {
  background-color: rgba(245, 202, 195, 0.347);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.done {
  text-decoration: line-through;
  color: grey;
}
.pencil:hover {
  color: green;
  transform: scale(1.1);
}

.pencil {
  color: grey;
  font-size: 20px;
}

.trash {
  color: grey;
  font-size: 20px;
}

.tick {
  color: grey;
  font-size: 20px;
}
.trash:hover {
  color: red;
  transform: scale(1.1);
}

.tick:hover {
  color: greenyellow;
  transform: scale(1.1);
}

.btn-primary {
  background-color: #82c0cc;
  border: none;
}

h4 {
  color: 514D67;
}

.btn-block {
  text-align: center;
  align-items: center;
}
</style>
