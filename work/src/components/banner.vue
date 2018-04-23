<template>
    <main class="main">
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in imgs">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination page"  slot="pagination"></div>
		        </swiper>
        </div>
    </main>
</template>
<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper";
    export default {
        name:"",
        data(){
            return {
                imgs:[
                    "../static/img/1.png",
                    "../static/img/1.png",
                    "../static/img/1.png",
                    "../static/img/1.png",
                    "../static/img/1.png",
                    "../static/img/1.png"    
                ],
			    swiperOption: {
                    autoplayDisableOnInteraction:false,
                    autoplay: true,
                    effect:"coverflow",
                    paginationType:"bullets",
		                pagination : '.swiper-pagination',
		                paginationClickable :true,
     		    }
		    }
        },
        componetns:{
            swiper,
            swiperSlide
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>
<style scoped>
    .banner{
        width:100%;
        height:160px;
    }
    .swiper-container{
         width:100%;
        height:100%;
    }
    .banner img{
        display:block;
        width:100%;
        height:100%;
    }
    
</style>