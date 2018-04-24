<template>
	<ul>
		<li v-for="list in data" :key="list.id" @click="fn(list.id)"> 
			<router-link :to="{path:'detail',query:{id:list.id}}">
				{{list.id}}-----{{list.city}}-------{{list.text}}
			</router-link>
			<!-- <router-link :to="{name:'detail',params:{id:list.id}}">
				{{list.id}}-----{{list.city}}-------{{list.text}}
			</router-link> -->
			<!-- <router-link :to="{path:'detail/'+list.id}">
				{{list.id}}-----{{list.city}}-------{{list.text}}
			</router-link> -->
		</li>
	</ul>
</template>
<script>	
// import axios from "axios"
export default {
	data(){
		return {
			data:[]
		}
	},
	beforeCreate(){
		this.axios.get("/api/list").then((data)=>{
			this.data = data.data.list
			
			// localStorage.setItem("newData",JSON.stringify(data.data.list));
			// console.log(window.localStorage)
			// console.log(localStorage.getItem("newData"))
		})
	},
	methods:{
		fn(ind){
			localStorage.setItem("newData",ind);
			// console.log(window.localStorage);
		}
	}
}
</script>
<style>

</style>