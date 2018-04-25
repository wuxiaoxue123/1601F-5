import Vue from "vue";
import Router from "vue-router";
import index from "../components/index.vue";
import list from "../components/list.vue";
import detail from "../components/detail.vue"

Vue.use(Router);


const router = new Router({
    routes:[
        {
            name:'index',
            path:'/',
            component:index
        },
        {
            name:"list",
            path:'/list',
            component:list
        },
        {
            name:"detail",
            path:'/detail',
            component:detail
        }
    ]
})
export default router