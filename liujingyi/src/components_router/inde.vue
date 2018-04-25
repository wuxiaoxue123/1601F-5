<template>
        <div>
            <router-link :to="{path:'list'}">点击</router-link>
        </div>
    </template>
<script>
    import Vue from "vue";
    import axios from "axios";
    import vas from "vue-axios";
    Vue.use(vas, axios)
    export default {
        data() {
            return {
            }
        }
    }
</script>
<style>
</style>