<template>
    <div style="padding: 2em 5em">
        <h3>Welcome to Testing Environment</h3>
    </div>

    <div style="padding: 2em 5em">
        <p class="dev-text">The developer is : <span style="font-weight:600;">{{name}}</span></p>
        <input type="text" name="name" id="text-name" v-model="name">
    </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref();

</script>

<style scoped>
.dev-text{
    font-size: 20px;
}

#text-name{
    margin: .5em 0;
    border: 1px solid slategray;
    border-radius: 3px;
    padding: .5em 1em;
}

</style>