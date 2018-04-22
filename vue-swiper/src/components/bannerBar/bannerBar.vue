<template>
    <div class="banner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(items, index) in node" :key="index">
                <img :src="items.imgs" alt="">
                <!-- <img src="../../../static/img/ban4.jpg" alt=""> -->
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

export default {
    name:'bannerBar',
    props: ['node'],
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                speed: 400,
                autoplay: true,
            }
        }
    }
}
</script>

<style>
.banner{
	width: 100%;
    height: 100%;
    margin-top: .88rem;
}
.swiper-container{
	width: 100%;
	overflow: hidden;
}
.swiper-wrapper{
	display: flex;
	width: 500%;
}
.swiper-slide{
	flex:1;	
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
</style>
