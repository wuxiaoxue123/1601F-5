<template>
	<div class="content">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="src in imgs">
				<img :src="src" alt="">
			</swiper-slide>
			<!-- Optional controls -->
			<!-- <div class="swiper-pagination"  slot="pagination"></div> -->
			<!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
			<!-- <div class="swiper-button-next" slot="button-next"></div> -->
			<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
		</swiper>
		<ul class="list">
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东超市</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>全球购</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东服饰</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东生鲜</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东到家</span></li>
		</ul>
		<ul class="list">
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东超市</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>全球购</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东服饰</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东生鲜</span></li>
			<li><p><i class="iconfont">&#xe648;</i></p><span>京东到家</span></li>
		</ul>
	</div>
</template>
<script>
import {swiper,swiperSlide} from "vue-awesome-swiper"
export default{
	name:"contents",
	data(){
		return {
			imgs:[],
			swiperOption: {
		       // notNextTick: true,
		       // swiper configs 所有的配置同swiper官方api配置
		       // loop:true,
		       autoplayDisableOnInteraction:false,
		       autoplay: true,
		       // direction : 'vertical',//垂直滚动
		       effect:"coverflow",//样式
		       // grabCursor : true,
		       // setWrapperSize :true,
		       // autoHeight: true,
		       // paginationType:"bullets",
		       // pagination : '.swiper-pagination',
		       // paginationClickable :true,
		       // prevButton:'.swiper-button-prev',
		       // nextButton:'.swiper-button-next',
		       // scrollbar:'.swiper-scrollbar',
		       // mousewheelControl : true,
		       // observeParents:true,
     		}
		}
	},
	components:{
		swiper,
 		swiperSlide	
	},
	beforeCreate(){
		this.$ajax({
			url:"/api/picture",
			type:"get"
		}).then((picture)=>{
			console.log(picture)
			this.imgs = picture
		})
	},
	computed:{
		swiper() {
		    return this.$refs.mySwiper.swiper
		}
	},
	mounted(){
		// console.log(this.$refs.mySwiper)
		// console.log("22222")
	}
}
</script>
<style scoped>
.content .list {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		text-align: center;
		background: #fff; }
		.content .list li {
			flex: 1; }
			.content .list li p {
				width: 40px;
				height: 40px;
				background: blue;
				border-radius: 30px;
				margin: 10px auto;
				line-height: 40px; }
				.content .list li p .iconfont {
					color: #fff;
					font-size: 1.5rem; }
					.content .list li span {
						font-size: .3rem; }
</style>