<template>
    <div class="app">
        <Headers></Headers>
        <Sect></Sect>
        <Footers></Footers>
    </div>
</template>

<script>
import './static/css/style.css'
import Headers from './components/Header'
import Footers from './components/Footer'
import Sect  from './components/Sect'
  export default {
    name:"app",
    components:{
        Headers,
        Sect,
        Footers
    }


  }
</script>
<style>

</style>
