<script>
import AppLoader from '../components/AppLoader.vue';
import axios from 'axios';
import PostCard from '../components/PostCard.vue';
import { store } from '../store.js';
export default {

    components: {
        AppLoader,
        PostCard,
    },
    data() {
        return {
            store,
            posts: [],
            loading: true,
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getPosts(1);
    },
    // methods: {
    //     getPosts() {
    //         this.loading = true;
    //         axios.get(`${this.baseUrl}/api/posts`).then((response) => {
    //             console.log(response);
    //             if (response.data.success) {
    //                 // this.posts = response.data.results; -> senza paginazione
    //                 this.loading = false;
    //             } else {
    //             }
    //         })
    //     }
    // },
    methods: {
        getPosts(num_page) {
            this.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts`, { params: { page: num_page } }).then((response) => {
                if (response.data.success) {
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                } else {
                    // altro
                }
            });
        }
    }

}
</script>



<template >
    <div v-if='loading'>
        <AppLoader />
    </div>
    <div v-else class="container">
        <div class="row">
            <div class="text-center">
                <h1>i miei progetti</h1>
            </div>
            <div class="col-12 col-md-4" v-for="post in posts" :key="post.id">
                <PostCard :post="post" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-center">
                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <ul class="navbar-nav">
                                <li class="nav-item" :class="currentPage === 1 ? 'disabled' : ''">
                                    <button class="page-link" @click="getPosts(currentPage - 1)">Precedente</button>
                                </li>
                                <li class="nav-item" :class="currentPage === lastPage ? 'disabled' : ''">
                                    <button class="page-link" @click="getPosts(currentPage + 1)">Successivo</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>




<style lang="scss">
* {
    background-color: black;
    color: white;
}
</style>