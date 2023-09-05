<script>
import axios from 'axios';
import { store } from '../store.js';
import AppLoader from '../components/AppLoader.vue';
export default {
    name: 'SinglePost',
    components: {
        AppLoader,
    },
    data() {
        return {
            store,
            loading: true,
            post: null,
        }
    },
    created() {
        this.getSinglePost();

    },
    methods: {
        getSinglePost() {
            this.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.post = response.data.results;
                    this.loading = false;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    },
}
</script>



<template lang="">
    <div v-if='loading'>
        <AppLoader />
    </div>
    <div>
        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <img :src="`${store.baseUrl}/storage/${post.cover_image}`" alt="">
            <h3>{{post.content}}</h3>
            <h2 v-if="post.type" class="card-text"> {{ post.type.name }}</h2>
            <h3 v-if="post.tecnologies.length > 0" class="card-header">Technologie:</h3>
                <ul v-if="post.tecnologies.length > 0">
                    <li v-for="tecnology in post.tecnologies" :key="tecnology.id">
                        {{ tecnology.name }}
                    </li>
                </ul>
        </div>
    
    <div v-else>
      
    </div>
    </div>
</template>



<style lang="">
    
</style>