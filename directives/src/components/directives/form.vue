<template>
  <ul>
     <li>
         <label for="name">姓名：</label>
         <input type="text" id="name" v-bb:name="rules" v-model="formData.name"/>
     </li>
     <li>
         <label for="password">密码：</label>
         <input type="text" id="password" v-bb:password="rules" v-model="formData.password"/>
     </li>
     <li>
         <label for="age">年龄：</label>
         <input type="type" id="age" v-bb:age="rules" v-model="formData.age"/>
     </li>
     <li>
         <label for="email">邮箱：</label>
         <input type="text" id="email" v-bb:email="rules" v-model="formData.email"/>
     </li>
     <li>
         <button @click="onClick">提交</button>
     </li>
  </ul>
</template>
<script>
export default {
  data(){
      return{
         formData:{
             name:"",
             password:"",
             age:"",
             email:""
         },
        rules:{
            name:{
                reg:/[\u4e00-\u9fa5]/,
                msg:"请正确输入您的姓名"
            },
            password:{
                reg:/^[A-Za-z0-9]{6,12}$/,
                msg:"请正确输入您的密码"
            },
            age:{
                reg:/^[0-9]*$/,
                msg:"请正确输入您的年龄"
            },
            email:{
                reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
                msg:"请正确输入您的邮箱"
            }
        }
      }
  },
  methods:{
      // 点击提交
      onClick(){
           let {name,password,age,email}=this.formData
            if(name&&password&&age&&email){
                console.log(this.formData)
            }else{
                alert("请输入完整")
            }
            // 遍历所有的b标签是否都为okokok
            let ob=document.getElementsByTagName("b")
            for(var i=0;i<ob.length-1;i++){
                if(ob[i].innerHTML=="okokok"){
                    alert('成功')
                }else{
                    alert('失败')
                }
            }
      }
  },
  //指令
  directives:{
    bb:{
        bind(el,binding){
            // console.log(1212)
            // 文本框触发的时候
            el.onchange = ()=>{
             
                // let reg =/[\u4e00-\u9fa5]/;
                let rulesArg=binding.value[binding.arg]
                if( rulesArg.reg.test(el.value)){
                    //console.log("okokok")
                    createDom("okok",true)
                }else{
                    //console.log("nonono")
                    createDom(rulesArg.msg,false)
                }
            }
            // 创建节点
            let createDom = (msg,state) =>{
                clearDom()
                let $el = document.createElement('b');
                $el.innerHTML = msg;
                if(state){
                    $el.style.color = "green"
                }else{
                    $el.style.color = "red"
                }
                el.parentNode.appendChild($el)
            }
            // 清除
            let clearDom=function(){

                let $el=el.parentNode.getElementsByTagName("b")[0]
                if($el){
                el.parentNode.removeChild($el)
                }
                
            }
            
        }
    }
  }
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
</style>

