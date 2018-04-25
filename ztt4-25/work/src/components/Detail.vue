<template>
    <div>
        {{detail.name}}---{{detail.tit}}
    </div>
</template>
<script>
    export default{
        data(){
            return{
                detail:[]
            }
        },
        beforeCreate(){
            let that=this;
            this.bus.$on('getIdEvent',function(id){
                console.log(id,'1')
                that.$http('/api/detail?id='+id).then((res)=>{
                    that.detail=res.data[0]
                })
            })
        }
    }
</script>