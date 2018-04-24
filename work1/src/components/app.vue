<template>
	<div id="wrap">
		<dl v-for="list in data">

			<dt><img :src="list.img"></dt>
			<dd>
				<h5>{{list.title}}</h5>
				<p class="text">${{list.price}}</p>
				<p class="content"><span>{{list.text}}</span> <span>{{list.pay}}</span> <span>{{list.city}}</span></p>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default {
		name:"app",
		data(){
			return {
				arr:["aa","bb","cc","dd"],
				data:[]
			}
		},
		beforeCreate(){
			// 写ajax请求
			this.$ajax({
				url:"/api",
				type:"get"
			}).then((data)=>{
				console.log(data.list)
				this.data = data.list;
			})
		}
	}
</script>
<style>
	body, ul, li, h1, h2, h3, h4, h5, h6, p, form, dl, dt, dd { margin: 0px; padding: 0px;  }
	ul { list-style: none; }
	img { border-style: none; }
	#wrap{
		width: 100%;
		height:100%;
	}
	dl{
		width:100%;
		height:100px;
		display:flex;
		flex-direction: row;
		border-bottom:1px solid #ccc;
	}
	dt{
		width:30%;
		height:100%;
	}
	dt img{
		width: 100%;
		height:100%;
	}
	dd{
		width:70%;
	}
	dd h5{
		line-height: 40px;
	}
	dd .text{
		color:red;
	}
	dd .content{
		display:flex;
		flex-direction: row;
	}
	.content span{
		line-height: 40px;
		color:#ccc;
		flex:1;
	}
</style>