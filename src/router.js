import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/Homepage.vue';
import PostList from './pages/ProjectList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';

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
        },
        {
            path: '/posts/:slug',
            name: 'single-post',
            component: SinglePost,
        },

        {
            path: '/*',
            name: 'not-found',
            component: NotFound,
        },


    ]
});

export { router } 