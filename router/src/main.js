import Vue from "vue";

import router from './router';
import Main from './components/main.vue';
import axios from "axios";
import VueAxios from "vue-axios"

Vue.use(VueAxios,axios)

new Vue ({
    el:'#app',
    router,
    render:h=>h(Main),
    template:'<Main/>'
})