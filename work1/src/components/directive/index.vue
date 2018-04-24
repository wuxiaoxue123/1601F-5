<template>
	<div>
		<!-- <p v-test.stop>但是感觉很好凤凰股份</p> -->
		<ul>
			<li>
				<label for="name">姓名:</label>
				<input type="text" id="name" v-test:name="rules" v-model="fromData.name">
			</li>
			<li>
				<label for="password">密码:</label>
				<input type="text" id="password" v-test:password="rules" v-model="fromData.password">
			</li>
			<li>
				<label for="age">年龄:</label>
				<input type="text" id="age" v-test:age="rules" v-model="fromData.age">
			</li>
			<li>
				<label for="email">邮箱:</label>
				<input type="text" id="email" v-test:email="rules" v-model="fromData.email">
			</li>
			<li>
				<button @click="fn"> 点击</button>
			</li>
		</ul>
	</div>
</template>
<script>	
// import bb from "./child"
export default {
	name:"index",
	data(){
		return {
			fromData:{
				name:"",
				password:"",
				age:"",
				email:""
			},
			rules:{
				name:{
					reg:/[u4e00-u9fa5]/,
					msg:"请输入正确的名字"
				},
				password:{
					reg:/^[A-Za-z0-9]{6,12}$/,
					msg:"请输入正确的密码"
				},
				age:{
					reg:/^[0-9]*$/,
					msg:"请输入正确的年龄"
				},
				email:{
					reg:/^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
					msg:"请输入正确的邮箱"
				}
			}
		}
	},
	methods:{
		fn(){
			let {name,password,age,email} = this.fromData;
			if(name&&password&&age&&email){
				console.log(this.fromData)
			}else{
				alert("请填写")
			}
		}
	},
	directives:{
		test:{
			bind(el,binding){
				// 清chu节点内容
				let clearDom = ()=>{
					let bb = el.parentNode.getElementsByTagName("b")[0]
					if(bb){
						el.parentNode.removeChild(bb)
					}
				}
				// 创建DOM节点
				let createDom=(msg,status)=>{
					clearDom()
					let newDom = document.createElement("b");
					newDom.innerHTML = msg;
					if(status){
						newDom.style.color="green"
					}else{
						newDom.style.color="red"
					}
					// console.log(el.parentNode)
					el.parentNode.appendChild(newDom)
				}

				
				el.onchange=()=>{
					 console.log(binding)
					// let reg = /[u4e00-u9fa5]/
					let rulesArg = binding.value[binding.arg]
					if(rulesArg.reg.test(el.value)){
						// console.log("error")
						
						createDom(rulesArg.msg,false)
					}else{
						// console.log("ok")
						createDom("ok",true)
					}
				}
			}
		}
	}
}
</script>
<style>
	ul{
		list-style: none;
	}
</style>