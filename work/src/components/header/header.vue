<template>
	<div class="header">
			<p>
				<b>JD</b>
				<i class="iconfont">&#xe729;</i>
				<input type="text" placeholder="请输入药名 品牌或症状">
			</p>
			<span><i class="iconfont">&#xe661;</i></span>
	</div>
</template>
<script>
export default{
	name:"headers",
	data(){
		return {
			namee:"headers"
		}
	}
}
</script>
<style scoped>
	.header p {
		width:85%;
		background: #fff;
		height: 2rem;
		line-height: 2rem;
		margin-top:1.6%;
		margin-left:5%;
		text-indent: 10px;
		border-radius: 30px; 
		display: flex;
		flex-direction: row; 
	}
	.header p .iconfont {
		color:#000;
	}
	.header b{
		color:red;
		font-size:20px;
	}
	.header p input {
		width:300px;
		border: 0;
		background: none;
		text-indent: 10px; }
		.header span {
			line-height: 3rem;
			flex: 2;
			text-align: center;
			color: #fff; }
			.header span .iconfont {
				font-size: .6rem; 
			}	
</style>