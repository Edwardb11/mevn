<template>
    <form>
      <input type="text" placeholder="Write a title" v-model="currentTask.title">
      <textarea placeholder="Write a description" v-model="currentTask.description"></textarea>
    </form>
</template>

<script lang="ts">
import { getTask } from '@/api/task';
import { Task } from '@/interface/Task';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            currentTask: {} as Task
        }
    },
    methods: {
     async   loadTask(id: string) {
        const res =   await getTask(id);
this.currentTask = res.data;
        }
    },
    mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
  
});
</script>
