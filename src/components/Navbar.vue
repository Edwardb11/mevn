
<template>
<nav></nav>
    <ul>
        <li><router-link to="/">task</router-link></li>
        <li><router-link to="/task/new">create tasks</router-link></li>

    </ul>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Nav-bar'
});

</script>