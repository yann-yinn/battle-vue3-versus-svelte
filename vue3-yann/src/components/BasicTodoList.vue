<script lang="ts" setup>
import type { Todo } from "@/types";

let newTodo = $ref("");
let todos = $ref<Todo[]>([]);

function addTodo() {
  if (newTodo.trim().length > 0) {
    todos.push({
      done: false,
      name: newTodo,
    });
    newTodo = "";
  }
}

function removeTodo(i: number) {
  todos.splice(i, 1);
}
</script>

<template>
  <div>
    <input
      class="todo_new"
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Nouvelle tâche"
    />
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <input type="checkbox" v-model="todo.done" />
        <input type="text" v-model="todo.name" />
        <button @click="removeTodo(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>
``

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
}
</style>
