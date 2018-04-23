import Vue from "vue"
import App  from "./main"
import './mock/mock'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
new Vue({
  el:"#app",
  template:"<App/>",
  components:{ App }
})