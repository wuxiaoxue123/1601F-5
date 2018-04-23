<template>
	<div class="footer">
		<ul class="uls">
			<li><i class="iconfont">&#xe648;</i><span>首页</span></li>
			<li><i class="iconfont">&#xe6a4;</i><span>分类</span></li>
			<li><i class="iconfont">&#xe638;</i><span>发现</span></li>
			<li><i class="iconfont">&#xe647;</i><span>购物车</span></li>
			<li><i class="iconfont">&#xe647;</i><span>我的</span></li>
		</ul>
	</div>
</template>
<script>
export default{
	name:"footers",
	data(){
		return {
			names:"footer"
		}
	}
}
</script>
<style scoped>
		.footer ul {
			width: 100%;
			height: 100%; 
			display: flex;
  			flex-direction: row; 
		}
	.footer ul li {
		flex:1;
		display: inline-block;
		float: left;
		text-align: center;
		padding-top: 10px; }
		.footer ul span {
			display: block; }
</style>