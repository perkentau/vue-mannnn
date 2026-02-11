import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Student from '../view/Student.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/student',
        name: 'Student',
        component: Student,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;