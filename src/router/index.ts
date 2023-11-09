import {createRouter, createWebHistory} from 'vue-router';

// import Home from '@/components/Main/Categories/Categories.vue';
import Home from '@/components/Home/HomeComponent.vue';

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
