<template>
    <div class="list">
        <h3></h3>
        <div class="nav-list">
            <div v-for="(item, index) in node" :key="index">
               
                <dl>
                    <dt><img :src="item.img" alt=""></dt>
                    <dd>
                        <h4>{{item.tag}}</h4>
                        <div class="num">
                            <span>{{item.num}}浏览</span>
                            <span>{{item.test}} </span>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import './listBar.css'
export default {
    name:'listBar',
    props:['node']
}
</script>

<style>

</style>
