<script>
import axios from 'axios';
import { store } from '../store';
import AppLoader from './AppLoader.vue';
export default {
    name: 'ContactForm',
    component: {
        AppLoader,
    },
    data() {
        return {
            store,
            loading: false,
            name: '',
            email: '',
            message: '',
            content: '',
            success: false,
            errors: {},
        }
    },
    methods: {
        sendForm() {
            console.log("sendForm method is called.");
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                content: this.message,
            }

            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                }
                else {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false;
            })
        }
    },
}
</script>


<template >
    <div>
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Contattaci</h2>
                    </div>
                    <div v-if="success" class="col-12">
                        <div>Messaggio inviato</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="sendForm()">
                            <div>
                                <label class="control-label">Nome</label>
                                <input type="text" name="name" id="name" v-model="name" placeholder="name"
                                    class="form-control" :class="{ 'is-invalid': errors.name }">
                                <p v-for="(error, index) in errors" :key="index">
                                    {{ errors }}
                                </p>
                            </div>
                            <div>
                                <label class="control-label">Email</label>
                                <input type="mail" name="email" id="email" v-model="email" placeholder="email"
                                    class="form-control" :class="{ 'is-invalid': errors.email }">
                                <p v-for="(error, index) in errors" :key="index">
                                    {{ errors }}
                                </p>
                            </div>
                            <div>
                                <label class="control-label">Contenuto</label>
                                <textarea type="content" name="content" id="content" v-model="message"
                                    placeholder="contenuto" class="form-control" :class="{ 'is-invalid': errors.content }">
                                <p v-for="(error, index) in errors" :key="index" >
                                   {{ errors }}
                                </p>
                                </textarea>
                            </div>
                            <div>
                                <button type="submit" :disabled="loading">invia</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="">
    
</style>