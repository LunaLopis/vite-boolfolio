import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/Homepage.vue';
import PostList from './pages/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostList
        }
    ]
});

export { router } 