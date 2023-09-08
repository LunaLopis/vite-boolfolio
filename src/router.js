import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/Homepage.vue';
import PostList from './pages/ProjectList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';
import ContactUs from './pages/ContactUs.vue';

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
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs,
        },


    ]
});

export { router } 