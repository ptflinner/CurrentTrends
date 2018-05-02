<template>
<div class="columns">
  <div class="column is-four-fifths">
    <div v-if="todo.edit">
      <input autofocus class="input" v-bind:value="todo.description" type="text" @blur="todo.edit=false" @keyup.enter="editTodo($event,todo)">
    </div>
    <div v-else>
      <label class="checkbox">
        <input type="checkbox" v-model="todo.done"> <span :class="{done: todo.done}">{{todo.description}}</span>
      </label>
    </div>
  </div>
  <div class="column has-text-right">
    <!-- Edit and Delete icons/link go here -->
    <button id="delete-button" @click="deleteTodo(course.id,todo)">
      <span class="icon">
        <i class="fa fa-trash has-text-danger"></i>
      </span>
   </button>
   <button id="edit-button" @click="todo.edit=true">
      <span class="icon">
        <i class="fa fa-edit has-text-info"></i>
      </span>
   </button>
  </div>
</div>
</template>


<script>
  import { store } from '../store.js';
  export default {
      name: 'CourseTodo',
      edit: false,
      entry: '',
      data () {
          return {
          }
      },
      props: ['todo', 'course'],
      methods: {
        toggleTodo (courseId, description) {
          store.toggleTodo(courseId, description )  
        },
        deleteTodo(id,todo){
          console.log(todo)
          store.deleteTodo(id,todo)
        },
        editTodo(e,todo){
          this.todo.edit=false
          console.log(e.target.value)
          store.editTodo(e.target.value,todo)
        }
      }
  }
</script>

<style>
.fa-trash {
    color: red;
}
.done {
  text-decoration: line-through;
}
</style>