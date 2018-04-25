import Vue from "vue";
import VueRouter from "vue-router";
import list from "../components_router/list.vue";
import inde from "../components_router/inde.vue";
import detail from "../components_router/detail.vue";
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        path: "/list",
        name: "list",
        component: list
    }, {
        path: "/",
        name: "inde",
        component: inde
    }, {
        path: "/detail",
        name: "detail",
        component: detail
    }]
})
