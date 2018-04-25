<template>
    <ul>
        <li v-for="item in list" :key="item.id"  @click="getId(item.id)">
            <!-- <router-link :to="{path:'detail/'+item.id}">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <span>{{item.addr}}</span>
            </router-link> -->
            <!-- <router-link :to="{path:'detail',params:{id:item.id}}">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <span>{{item.addr}}</span>
            </router-link> -->
            <router-link :to="{path:'detail',query:{id:item.id}}">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <span>{{item.addr}}</span>
            </router-link>
        </li>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getId(id){
                console.log(id,'2')
                this.bus.$emit('getIdEvent',id)
            }
        },
        beforeCreate(){
            this.$http('/api/list').then((res)=>{
                this.list=res.data.list
            })
        }
    }
</script>
<style>
    li{
        width:100%;
        height: 50px;
        line-height: 50px;
    }
</style>
