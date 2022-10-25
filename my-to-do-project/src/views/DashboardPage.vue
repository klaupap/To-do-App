<template>
  <section
  class="container"
    style="height: auto"
  >
    <form @submit.prevent="addNewTodo">
      <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 75%)" >What's on your todo list?</h1>
      <div class="row">
        <div class="col-8">
          <input
            class="py-3 form-control shadow"
            placeholder="Buy some ice-cream"
            type="text"
            id="inputText"
            v-model="newTodo"
          />
        </div>
        <div class="col-2">
          <!-- <i onclick="addList()" class=" btn btn-dark rounded-pill fas fa-4x fa-plus-circle "></i> -->
          <button class="btn btn-primary btn-block mb-4" id="add-btn" type="submit" value="Add to do" >
            <i class="bi bi-plus-circle-fill"></i>
          </button>
        </div>
      </div>
      <div>
        <div class="col-12">
          <ul class="list-group" id="list"></ul>
        </div>
      </div>
    </form>
    <button class="btn btn-primary btn-block mb-4" @click="removeAllTodos">Remove all</button>
    <button class="btn btn-primary btn-block mb-4" @click="markAllDone">Mark all done</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">
          {{ todo.content }}

        </h3>

        <button class="btn mb-4" @click="removeTodo(index)"><i class="bi bi-trash3"></i>
</button>
        <button class="btn mb-4" @click="editTodo()"><i class="bi bi-pencil"></i>
</button>
        <hr />
      </li>
    </ul>
  </section>
</template>



<script>

// FALTA L'EDIT TASK I QUE EL TASK COMPLETED SIGUI UN INPUT CHECK


import { ref, reactive } from "vue";

export default {
  setup() {
    const newTodo = ref("");
    const todos = ref([]);
    let initialValue = ''

    function addNewTodo() {
      todos.value.push({
        id: Date.now(),
        done: false,
        content: newTodo.value,
      });
      newTodo.value = "";
    }

    function toggleDone(todo) {
      todo.done = !todo.done;
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }
    function markAllDone() {
      todos.value.forEach((todo) => (todo.done = true));
    }

    function removeAllTodos(){
      todos.value = [];
    }




    return {
      todos,
      newTodo,
      addNewTodo,
      toggleDone,
      removeTodo,
      markAllDone,
      removeAllTodos,
        };
  },
};

/*
let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let minimalValue = 3;
        let listNum = 0;
addList=()=>{
    // get
    let inputText = filterList(input.value);
    // set 
   if (inputText) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                <div class="row">
                <div class="col-1">
                <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                </div>
                <div class="col-6">
                    <span class=" h4" id="text${listNum}"> ${inputText} </span>
                </div>
                <div class="col-4">
                     <button class=" btn btn-dark" onclick="deleteList(${listNum})">Delete</button>
                     <button class=" btn btn-dark" onclick="editList(${listNum})">Edit</button>
                </div>                  
                 </div>    
                </li> `;
        input.value=" ";
        listNum++;

   }
}

done=(listId)=>{ 
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }else{
        current.classList.add("text-decoration-line-through");
    }
    
}

filterList=(x)=>{
       if (x) {
            if (x.length >= minimalValue) {
                return x;
            }
            else{
                alert("Please enter more than 3 words")
            }
       }
       else{
            return false;
       }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Wanna Change list?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
       let deleteComfirm = confirm(`Are you sure to delete ${current}`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
    else{
        console.log("deleted");
    }
};  

*/
</script>
<style scoped>


.done {
  text-decoration: line-through;
}

</style>
