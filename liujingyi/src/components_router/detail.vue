<template>
    <div>
        <p v-for="item in list">{{item.content}}</p>
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
            list: null
        }
    },
    beforeCreate() {
        console.log(localStorage.getItem('keyid'))
        console.log(this.$route.query.id)
        // this.axios.get("/api/detail?id=" + this.$route.query.id).then((rosolve) => {
        //     this.list = rosolve.data;
        //     console.log(rosolve.data)
        // }),
        this.axios.get("/api/detail?id=" + localStorage.getItem('keyid')).then((rosolve) => {
            this.list = rosolve.data;
            console.log(rosolve.data)
        })
    }
}
</script>
<style>

</style>