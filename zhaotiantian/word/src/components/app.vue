<template>
    <div>
      <Form/>
    </div>
</template>

<script>
import Form from './Form'
  export default {
    name:"app",
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
        //this.$ajax({
        //  url:"/api",
        //  type:"get"
        //}).then((data)=>{
          //this.data=data.one
        //})
    },
    components:{
      Form
    }

  }
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
</style>