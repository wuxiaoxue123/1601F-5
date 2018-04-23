<template>
	<div class="wrap">
		<AHeader></AHeader>
		<AContent></AContent>
		<AFooter></AFooter>
	</div>
</template>
<script>
import AHeader from './header/header'
import AContent from './content/content'
import AFooter from './footer/footer'
export default{
	name:"app",
	data(){
		return {
			namee:"zhangsan"
		}
	},
	components:{
		AHeader,
		AContent,
		AFooter
	}
}
</script>
<style>

</style>