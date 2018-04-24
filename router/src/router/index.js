import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);


import Index from "../components_router/index"
import List from "../components_router/list"
import detail from "../components_router/detail"
//抛出vueRouter
export default new VueRouter({
	routes:[
		{
			name:"index",
			path:"/",
			component:Index
		},
		{
			name:"List",
			path:"/list",
			component:List
		},
		{
			name:"detail",
			path:"/detail",
			component:detail
		},
		// {
		// 	name:"detail",
		// 	path:"/detail/:ids",
		// 	component:detail
		// }
	]
})