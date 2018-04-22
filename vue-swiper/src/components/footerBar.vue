<template>
    <footer class="footer">
        <router-link tag="span" :to="{path:'/home'}" active-class="active">
            <i class="iconfont">&#xe612;</i><a>首页</a>
        </router-link>
        <router-link tag="span" :to="{path:'/idear'}" active-class="active">
            <i class="iconfont">&#xe68d;</i><a>分类</a>
        </router-link>
        <router-link tag="span" :to="{path:'/mark'}" active-class="active">
            <i class="iconfont">&#xe612;</i><a>购物车</a>
        </router-link>
        <router-link tag="span" :to="{path:'/message'}" active-class="active">
            <i class="iconfont">&#xe612;</i><a>我的</a>
        </router-link>
    </footer>
</template>
<script>  
export default {
    name:'footerBar'
}
</script>
<style>
.footer{
    width: 100%;
    height: .88rem;
    background: #ccc;
    display: flex;
    align-items: center;
}
span{
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
}
i {
    font-size: .34rem;
    color: #999;
}
a {
    color: #999;
    font-size: .24rem;
}
a.active{
    a,i{
        color:#7f4395;
    }
}
</style>
