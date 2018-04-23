<template>
    <div class="head">
      <p><a href="javascript:;">≡</a></p> 
      <p class="ss"><a href="javascript:;">JD</a> <input type="text" placeholder="PLUS会员精选爆款"></p>
      <p><a href="javascript:;">登陆</a></p>
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
    .head{
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      background: rgb(54, 53, 51);
    }
    .head p:nth-child(1){
      flex:1;
      text-align:center
    }
    .head p:nth-child(1) a{
      color:#fff
    }
    .head p:nth-child(2){
      flex:8;
      text-align:center;
      display: flex;
      background: #fff;
      padding:3px;
      border-radius: 30px
    }
    .head p:nth-child(2) input{
      border:0;
      padding-left:5px;
      outline: none;
      font-size: 10px;
    }
    .head p:nth-child(2) a{
      color:red;
      padding:0 5px;
      border-right: 1px solid #ccc;
      
    }
    .head p:nth-child(3){
      flex:1;
      text-align:center;
    }
    .head p:nth-child(3) a{
      color:#fff;
      font-size: 12px;
    }
    
</style>
