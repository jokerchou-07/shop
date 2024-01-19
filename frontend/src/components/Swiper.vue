<template>
  <div class="container" >
    <div class="page" v-for="(img,index) of images" :key="index">
      <img :src="img.src" alt="">
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // 引入 Swiper 样式

export default {
  data(){
    return{
      parallaxSwiperWidth:0,
      images: [
        {src: '../shop/shop_new-master/frontend/public/car1.jpg'},
        {src: '../shop/shop_new-master/frontend/public/car2.jpg'},
        {src: '../shop/shop_new-master/frontend/public/car3.jpg'},
        {src: '../shop/shop_new-master/frontend/public/car4.jpg'},
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  }
};
</script>


