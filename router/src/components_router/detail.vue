<template>
	<div>{{data}}</div>
</template>
<script>	
// import axios from "axios"
export default {
	data(){
		return {
			data:null
		}
	},
	beforeCreate(){
		// 第一种
		 // console.log(this.$route.query)// 这是一个对象
		 // this.axios.get("/api/detail?id="+this.$route.query.id).then((data)=>{
		 // 	// console.log(data)
		 // 	this.data = data.data[0].content
		 // })
		 //第二种  刷新一次就没有数据了
		 // console.log(this.$route.params.id)// 这是一个对象
		 // this.axios.get("/api/detail?id="+this.$route.params.id).then((data)=>{
		 // 	// console.log(data)
		 // 	this.data = data.data[0].content
		 // })
		 // 第三种
		 // 	console.log(this.$route.params.ids)
			// this.axios.get("/api/detail?id="+this.$route.params.ids).then((data)=>{
			// 	console.log(data)
			// 	this.data = data.data[0].content
			// })
		// 第四种 console.log(localStorage.getItem("newData"))
		this.axios.get("/api/detail?id="+localStorage.getItem("newData")).then((data)=>{
		 	this.data = data.data[0].content
		})
	}
}
</script>
<style>

</style>