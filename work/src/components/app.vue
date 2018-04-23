<template>
    <div>
        <div>
          <header>
            <p></p>
            <p><input type="text"></p>
            <p>登录</p>
          </header>
          <section>
              <p>
                <span>京东超市</span>
                <span>全球购</span>
                <span>京东服饰</span>
                <span>京东生鲜</span>
                <span>京东到家</span>
                <span>京东超市</span>
                <span>全球购</span>
                <span>京东服饰</span>
                <span>京东生鲜</span>
                <span>京东到家</span>
              </p>
          </section>
          <footer>
            <p>
              <span>首页</span>
              <span>分类</span>
              <span>发现</span>
              <span>购物车</span>
              <span>我的</span>
            </p>
          </footer>
          <!-- {{i.id}}---{{i.name}}----{{i.addr}} -->
        </div>
    </div>
</template>

<script>
  export default {
    name:"app",
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
        
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          console.log(data.list)
          this.data=data.list
        })
    }

  }
</script>
<style>
   *{
     margin: 0;
     padding: 0;
     list-style: none;
   }
   header{
     width: 100%;
     height: 40px;
     border-bottom: 1px solid #000;
     display: flex;
   }
   header p{
     justify-content: center;
     align-items: middle;
     text-align: center;
   }
   header p:nth-child(1){
     flex:1;
   }
   header p:nth-child(2){
     flex:4;
   }
   header p:nth-child(3){
     flex:1;
   }
   header p:nth-child(2) input{
     width: 100%;
     height: 60%;
     margin-top: 2.5%;
     border:0;
     border-radius: 15px;
   }
</style>
