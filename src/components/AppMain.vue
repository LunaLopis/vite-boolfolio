<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            posts: [],
            loading: true,
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`).then((response) => {
                console.log(response);
                if (response.data.success) {

                    this.posts = response.data.results;
                    this.loading = false;
                } else {

                }
            })
        }
    },
}
</script>



<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">
                ciao
            </div>

        </div>

    </div>
</template>




<style ></style>