<template>
    <div class="banner">
        <ul>
            <li v-for="i in list" :key="i.id" @click="cb(i.id)">
                
  
            <router-link to='/detail'>
                <b>{{i.id}}</b>
                <b>{{i.name}}</b>
                <span>{{i.addr}}</span>
            </router-link>


                <!-- <router-link :to="{name:'detail',params:{id:i.id}}">
                    <b>{{i.id}}</b>
                    <b>{{i.name}}</b>
                    <span>{{i.addr}}</span>
                </router-link> -->
                
            <!-- <router-link :to="{path:'detail',query:{id:i.id}}">
                <b>{{i.id}}</b>
                <b>{{i.name}}</b>
                <span>{{i.addr}}</span>
            </router-link> -->

            </li>
        </ul>
    </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import vas from "vue-axios";
Vue.use(vas, axios)
export default {
    data() {
        return {
            list: []
        }
    },
    beforeCreate() {
        axios.get("/api/list").then((resolve) => {
            this.list = resolve.data.list;
        })
    },
    methods:{
        cb:function(val){
            //console.log(window.localStorage)
            localStorage.setItem("keyid",val);
            //localStorage.getItem("keyid")
        }
    }
}
</script>