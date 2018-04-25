import Vue from "vue"
import app from "./main.vue"
import router from './router/index'
import axios from "axios";
import vas from "vue-axios";
Vue.use(vas, axios)

new Vue({
    el:"#app",
    render:h=>h(app),
    router
})