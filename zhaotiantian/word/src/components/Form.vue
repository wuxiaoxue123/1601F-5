<template>
    <div>
        <ul>
            <li>
                <label for="name">昵称</label>：
                <input type="text" id="name" v-test:name="rules" v-model="formData.name"/>
            </li>
            <li>
                <label for="password">密码</label>：
                <input type="text" id="password"  v-test:password="rules" v-model="formData.password"/>
            </li>
            <li>
                <label for="age">年龄</label>：
                <input type="text" id="age" v-test:age="rules" v-model="formData.age"/>
            </li>
            <li>
                <label for="email">邮箱</label>：
                <input type="text" id="email" v-test:email="rules" v-model="formData.email"/>
            </li>
            <li @click="submit"><button>登录</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            formData:{
                name:"",
                password:"",
                age:"",
                email:""
            },
            rules:{
              name:{
                reg:/[\u4e00-\u9fa5]/,
                msg:"请输入纯汉字"
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
        submit(){
            let {name,password,age,email}=this.formData
            if(name && password && age && email){
                console.log(this.formData)
            }else{
                alert("请填写")
            }
        }
    },
    directives:{
        test:{
            componentUpdated(el,binding){
                let clearDom = function(){
                    let $el = el.parentNode.getElementsByTagName("b")[0]
                    if($el){
                        el.parentNode.removeChild($el)
                    }
                }
                let creatDom = function(msg,state){
                clearDom()
                let $el = document.createElement("b")
                $el.innerHTML = msg
                if(state){
                    $el.style.color="green"
                }else{
                  $el.style.color="red"
                }
                    el.parentNode.appendChild($el)
                }
                el.onchange = () => {
                    let rulesArg = binding.value[binding.arg]
                    if(rulesArg.reg.test(el.value)){
                        creatDom("ok",true)
                    }else{
                        creatDom(rulesArg.msg,false)
                    }
                }
            }
        }
    }
}
</script>