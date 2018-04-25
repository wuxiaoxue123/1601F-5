<template>
    <div>
        <h5>这是Home页面</h5>
        <ul>
            <li>
                <!-- 三种跳转方式 记住 -->
                <router-link :to="{path:'list'}">列表页</router-link>
                <!-- <router-link :to="{name:'list'}">列表页</router-link> -->
                <!-- <router-link to="/list">列表页</router-link> -->
            </li>
        </ul>
    </div>
</template>
