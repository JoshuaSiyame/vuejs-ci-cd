import { describe, test, expect } from "vitest"
import { mount } from "@vue/test-utils";

import Todo from "@/components/todos/Todo.vue";

describe("Testing Todo component", ()=>{
    test("Renders Todo component", ()=>{
        const wrapper = mount(Todo);
        expect(wrapper.find("h3").text()).toBe("Todo Items")
    });

    test("Renders a todo", ()=>{
        const wrapper = mount(Todo);

        const todo = wrapper.get("[data-test='todo']");
        expect(todo.text()).toBe('Vue components');
    });

    test("creates a new todo", async ()=>{
        const wrapper = mount(Todo);

        // expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

        await wrapper.get('[data-test="new-todo"]').setValue('New todo')
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
    });

    test("completes, a todo", async ()=>{
        const wrapper = mount(Todo);

        await wrapper.get('[data-test="todo-checkbox"').setValue(true);
        expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
    });
});
