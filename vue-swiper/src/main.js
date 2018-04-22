import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  template:'</App>',
  component:{App},
  render: h => h(App)
})
