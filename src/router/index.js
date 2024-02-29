import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'home',
            component: () => import("../components/home/Home.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../components/about/About.vue")
        },
        {
            path: "/todos",
            name: "todos",
            component: () => import("../components/todos/Todo.vue")
        }
    ]
});

export default router;