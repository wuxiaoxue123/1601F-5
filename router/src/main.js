import Vue from "vue"
import App from "./components_router/app"
import router from "./router/index"
import axios from "axios"
import VueAxios from "vue-axios" 
// import App from "./components/app"
// import mains from "./main.vue"

// 全局指令
// import "./directives/index"

// import $ajax from "./tool/ajax"
// 所有的方法都挂在在vm实例化对象上
// Vue.prototype.$ajax = $ajax;
Vue.use(VueAxios,axios)

var vm = new Vue({
	el:"#app",
	template:`<App/>`,
	components:{
		// mains:mains
		App:App,
	},
	router
})