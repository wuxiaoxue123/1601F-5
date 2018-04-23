<template>
    <div class="foot">
      <span><a href="javascript:;">1</a></span>
      <span><a href="javascript:;">2</a></span>
      <span><a href="javascript:;">3</a> </span>
      <span><a href="javascript:;">4</a></span>
      <span><a href="javascript:;">5</a> </span>
    </div>
</template>

<script>

  export default {
    name:"app",
    components:{
        
    }


  }
</script>
<style>
  .foot{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-top: 1px solid #ccc;
  }
  .foot span{
    flex:1;
    text-align: center;
  }
</style>
