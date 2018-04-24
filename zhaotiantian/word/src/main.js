import Vue from "vue"
import app  from "./components/app"
import ajax from "./tool/ajax"
Vue.prototype.$ajax=ajax
var vm=new Vue({
  el:"#app",
  template:"<div><App /></div>",
  components:{
    App:app
  }
})