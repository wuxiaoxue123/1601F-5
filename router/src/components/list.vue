<template>
  <ul>
      列表页
      <li v-for = "i in data" :key="i.id">
        <router-link :to="{path:'detail',query:{id:i.id}}">
            {{i.id}} = {{i.subtitle}}
        </router-link>
        <!-- <router-link :to="{name:'detail',params:{id:i.id}}">
				{{i.id}} = {{i.subtitle}}
			</router-link> -->
			<!-- <router-link :to="{path:'detail/'+i.id}">
				{{i.id}} = {{i.subtitle}}
			</router-link> -->
      </li>
      
  </ul>
</template>
<script>
export default {
  data(){
      return{
          data:[]
      }
  },
  beforeCreate(){
    this.axios.get("/list").then((data)=>{
        console.log(data.data)
        this.data = data.data
    })
  },
  //  本地存储
  methods:{
    cb:function(val){
        //console.log(window.localStorage)
        localStorage.setItem("keyid",val);
        //localStorage.getItem("keyid")
    }
 }

}
</script>

