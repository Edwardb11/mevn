<template>
    <form @submit.prevent="handleUpdate()">
        <input type="text" placeholder="Write a title" v-model="currentTask.title">
        <textarea placeholder="Write a description" v-model="currentTask.description"></textarea>
        <button>Update task</button>
    </form>
    <button @click="handleDelete()">Delet task</button>
</template>

<script lang="ts">
import { deleteTask, getTask, updateTask } from '@/api/task';
import { Task } from '@/interface/Task';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id: string) {
            const res = await getTask(id);
            this.currentTask = res.data;
        },

        async handleUpdate() {
            if (typeof this.$route.params.id === "string") {
              await updateTask(this.$route.params.id, this.currentTask);
                this.$router.push({ name: 'task' });
            }
        },
        async handleDelete() {
            if (typeof this.$route.params.id === "string") {
              await deleteTask(this.$route.params.id);
                this.$router.push({ name: 'task' });
            }
        }
    },
    mounted() {
        if (typeof this.$route.params.id === "string") {
            this.loadTask(this.$route.params.id);
        }
    },

});
</script>
