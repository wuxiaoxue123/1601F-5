<template>
  <div id="app">
    <header-bar></header-bar>
    <banner-bar :node="node"></banner-bar>
    <section-bar></section-bar>
    <list-bar :node="node"></list-bar>
    <!-- <footer-bar></footer-bar> -->
  </div>
</template>

<script>
import axios from 'axios'
import HeaderBar from './components/headerBar/headerBar.vue'
import bannerBar from './components/bannerBar/bannerBar.vue'
import sectionBar from './components/sectionBar/sectionBar.vue'
import listBar from './components/ListBar/listBar.vue'
//import footerBar from './components/footerBar.vue'
export default {
  name: 'app',
  data () {
    return {
        node:null  
    }
  },
  components: {
    HeaderBar,
    bannerBar,
    sectionBar,
    listBar ,
    //footerBar
  },
  mounted () {
    axios.get('/home').then(data => {
      this.node = data.data.data.list;
      console.log(this.node)
    })
  }
}
</script>

<style>
@import '../static/css/style.css';
@import '../static/fonts/iconfont.css';
</style>
