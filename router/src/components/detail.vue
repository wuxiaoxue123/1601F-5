<template>
    <div>
        详情页
        
    </div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  beforeCreate(){
      console.log(this.$route.query.id)
    this.axios.get("/detail?id="+localStorage.getItem("newData")).then((data)=>{
		 	this.data = data.data[0].name
    })
    //  刷新一次就没有数据了
        // console.log(this.$route.params.id)// 
        // this.axios.get("/api/detail?id="+this.$route.params.id).then((data)=>{
        // 	// console.log(data)
        // 	this.data = data.data[0].name
        // })
    // 
    // this.axios.get("/detail?id=" + localStorage.getItem('keyid')).then((ros) => {
    //     this.list = ros.data;
    //     console.log(ros.data)
    // })

  }
}
</script>

