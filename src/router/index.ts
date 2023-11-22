import {createRouter, createWebHistory} from 'vue-router';

import HeadPhones from '@/components/Headphones/HeadPhones.vue';
import Home from '@/components/Home/HomeComponent.vue';
import ProductPage from '@/components/View/ProductPage.vue';

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
    {
        path: '/headphones/:id',
        name: 'Product',
        component: ProductPage,
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
