<template>
	<div>
		<ind></ind>
		{{name}}
	</div>
</template>
<script>
import ind from "./components/directive/index"
export default{
	name:"mains",
	data(){
		return {
			name:"mainvue"
		}
	},
	components:{
		ind
	}
}
</script>
<style>

</style>