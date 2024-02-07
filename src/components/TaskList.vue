<template>
<ul>
    <li v-for="task in tasks" :key="task._id">
        <h2>{{ task.title }}</h2>
        <p>{{ task.description }}</p>
    </li>
</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '@/interface/Task';
import { getTasks } from '@/api/task';

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
methods: {
    async loadTaks() {
        const res = await getTasks();
        this.tasks = res.data;
    }
},
mounted() {
    this.loadTaks();
}

});
</script>
