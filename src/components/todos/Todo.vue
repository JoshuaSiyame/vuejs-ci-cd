<template>
    <div id="todos" style="padding: 2em 5em">
        <h3>Todo Items</h3>
        <div>
            <h3>Create new Todo</h3>
            <form data-test="form" @submit.prevent="createTodo">
                <input style="padding: .5em; margin: 1em 0; border-radius: 3px;" data-test="new-todo" v-model="newTodo" />
            </form>
        </div>
        <div style="display: flex; column-gap: 1em;" v-for="todo in todos" :key="todo.index" data-test="todo" :class="[todo.completed ? 'completed' : '']">
            <p>{{ todo["text"] }}</p>
            <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([
    {
        id: 1,
        text: 'Vue components',
        completed: false
    }
]);

const createTodo = () => {
    todos.value.push({
        id: todos.value.length + 1,
        text: newTodo.value,
        completed: false
    });
    newTodo.value = ''; // Clear the input after adding a new todo
};
</script>

<style></style>
