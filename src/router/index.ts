import {createRouter, createWebHistory} from 'vue-router';

import HeadPhones from '@/components/Headphones/HeadPhones.vue';
import Home from '@/components/Home/HomeComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/headphones',
        name: 'HeadPhones',
        component: HeadPhones,
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
    linkActiveClass: 'active-link',
});

export default router;
