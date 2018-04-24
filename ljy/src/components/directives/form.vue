<template>
    <div class="forms">
            <p>
              <span for="name">姓名</span>
              <input type="text" id="name" v-test:name="rules" v-model="forms.name" placeholder="请输入姓名">
            </p>
            <p>
              <span for="password">密码</span>
              <input type="text" id="password"  v-test:password="rules" v-model="forms.password" placeholder="请输入密码">
            </p>
            <p>
              <span for="age">年龄</span>
              <input type="text" id="age" v-test:age="rules" v-model="forms.age" placeholder="请输入年龄">
            </p>
            <p>
              <span for="email">邮箱</span>
              <input type="text" id="email" v-test:email="rules" v-model="forms.email" placeholder="请输入邮箱">
            </p>
            
            <button @click="btn">点击</button>

    </div>

</template>

<script>
export default {
    data() {
      return {
        forms:{
          name:"",
          password:"",
          age:"",
          email:""
        },
        rules:{
          name:{
            reg:/[\u4e00-\u9fa5]/,
            msg:"输入错误"
          },
          password:{
            reg:/^[A-Za-z0-9]{6,12}$/,
            msg:"输入错误"
          },
          age:{
            reg:/^[0-9]{1,3}$/,
            msg:"输入错误"
          },
          email:{
            reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
            msg:"输入错误"
          }
        }
      }
    },
    methods: {
      btn(){
        let {name,password,age,email}=this.forms
        if(name&&password&&age&&email){
          console.log(this.forms)
        }else{
          alert("请输入正确内容")
        }
       
      }
    },
    directives: {
      test:{
        inserted(el,binding){
        
          let del=function(){

            let $el=el.parentNode.getElementsByTagName("b")[0]
            if($el){
              el.parentNode.removeChild($el)
            }
            
          }
          let creatDom=function(msg,state){
            del()
            let $el=document.createElement("b")
            $el.innerHTML=msg
            if(state){
                $el.style.color="green"
            }else{
              $el.style.color="red"
            }
            el.parentNode.appendChild($el)
          }
          el.onchange=()=>{
           
            let rulesArg=binding.value[binding.arg]
            console.log(rulesArg)
            if(rulesArg.reg.test(el.value)){
              creatDom("输入正确",true)
            }else{
              creatDom(rulesArg.msg,false)
            }
            
          }
        }
      }
    }
  }

</script>