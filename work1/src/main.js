import Vue from "vue"
import App from "./components/app"
import mains from "./main.vue"

// 全局指令
// import "./directives/index"

import $ajax from "./tool/ajax"
// 所有的方法都挂在在vm实例化对象上
Vue.prototype.$ajax = $ajax;
var vm = new Vue({
	el:"#app",
	template:`<div><mains/></div>`,
	components:{
		mains:mains
		// App:App
	}
})