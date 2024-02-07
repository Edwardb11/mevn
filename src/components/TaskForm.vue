<template>
    <form @submit.prevent="saveTask()">
      <input type="text" placeholder="Write a title" v-model="task.title">
      <textarea placeholder="Write a description" v-model="task.description"></textarea>
      <button type="submit">Create task</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Task } from '@/interface/Task';
  
  export default defineComponent({
    data() {
      return {
        task: {} as Task
      }
    },
    methods: {
      saveTask() {
        console.log(this.task);
      }
    },
  });
  </script>
  