<script>
import { store } from '../store.js';
export default {
    props: {
        post: Object
    },

    data() {
        return {
            store,
        }
    },
}
</script>


<template lang="">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h2 class="card-header"> -{{ post.id }} {{ post.title }} </h2>


                        <div class="card-image-top">
                            <img v-if="post.cover_image" :src="`${store.baseUrl}/storage/${post.cover_image}`" class="img-fluid"
                                alt="">
                        </div>
                        <h2 v-if="post.type" class="card-text"> {{ post.type.name }}</h2>

                        <!-- <h5 class="card-text">{{post.content}}</h5> -->
                        <div class="card-footer">
                            <h3 v-if="post.tecnologies.length > 0" class="card-header">
                                Technologies:
                            </h3>
                            <ul v-if="post.tecnologies.length > 0">
                                <li v-for="tecnology in post.tecnologies" :key="tecnology.id">
                                    {{ tecnology.name }}
                                </li>
                            </ul>
                            <router-link class="btn btn-primary" :to="{name: 'single-post', params: {slug: post.slug}  }">vedi dettagli</router-link>
                            
                        </div>
                    </div>
                </div>
</template>




<style lang="scss"></style>