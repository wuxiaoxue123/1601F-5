import Vue from "vue"
import App from "./components/app"
import VueAwesomeSwiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'
import "./static/css/reset.css"
import "./static/css/style.css"
import "./static/icon/iconfont.css"

Vue.use(VueAwesomeSwiper)
// import "./components/register"
import $ajax from "./tool/ajax"
// 所有的方法都挂在在vm实例化对象上
Vue.prototype.$ajax = $ajax;
var vm = new Vue({
	el:"#app",
	template:`
	<div id="app">
		<App/>
	</div>`,
	components:{
		App:App
	}
})