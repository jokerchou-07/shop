<template>
  <div class="swiperbox">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{ clickable: true}"
      :autoplay="{ delay: 3500, disableOnInteraction: false}"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide><img src="/car1.png" alt="" /></swiper-slide>
      <swiper-slide><img src="/car2.png" alt="" /></swiper-slide>
      <swiper-slide><img src="/car3.png" alt="" /></swiper-slide>
      <swiper-slide><img src="/car4.png" alt="" /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
// import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination, Navigation, A11y]
</script>

<style scoped>
.swiperbox{
    left: 75px;
    width: 1000px;
    height: 100px;
    margin-top: 80px;
}
.swiperbox img{
    left: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    width: 600px;

}
</style>
