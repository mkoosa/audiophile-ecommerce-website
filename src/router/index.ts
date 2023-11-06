import {createRouter, createWebHistory} from 'vue-router';

import Home from '@/components/Main/Categories/MainCategories.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth',
        };
    },
});

export default router;
