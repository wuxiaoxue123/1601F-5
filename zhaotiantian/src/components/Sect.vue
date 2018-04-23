<template>
    <div class="main">
        <swiper :options="swiperOption"  ref="mySwiper" id="swiper">  
            <swiper-slide class="swiper-slide"  v-for="lb in lbt">  
                <img :src="lb.imgs" alt="">
            </swiper-slide>  
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>  
        
        <div class="list">
            <dl v-for="list in data">
                <dt><img :src="list.image" alt=""></dt>
                <dd>{{list.title}}</dd>
            </dl>
        </div>
        <div class="mi">
            <img src="../static/img/img.jpg" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
export default {
    name:"app",
    data(){
        return {
            data:[],
            lbt: [  
                {  
                'imgs': '../static/img/1.jpg'  
                }, {  
                'imgs': '../static/img/2.jpg'  
                }, {  
                'imgs': '../static/img/3.jpg'  
                }  
            ],
            swiperOption: {  
                notNextTick: true,  
                pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                onSlideChangeEnd: swiper => {  
                    this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;  
                }  
            }  
        }
    },
    computed: {  
        swiper() {  
            return this.$refs.mySwiper.swiper;  
        }  
    },  
    mounted(){
        this.getData()
        this.swiper.slideTo(0, 0, false);  
    },
    methods:{
          
        getData:function(){
            axios.get('/list').then((res)=>{
                this.data = res.data
                
            })
        }
    }
}
</script>
<style>
    .main{
        flex:1;
        overflow-y: scroll;
    }
    .list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .list dl{
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
    .list dl dt{
        text-align: center;
    }
    .list dl dt img{
        width: 80%;
    }
    .list dl dd{
        font-size: 12px;
    }
    
    #swiper{
        display: flex;
        width: 100%;
    }
    .swiper-slide img{
        width: 100%;
    }
    .mi{
        width: 100%;
        margin-top: 10px;
    }
    .mi img{
        width: 100%;
    }
</style>
