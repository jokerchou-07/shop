<template>
  <div>
    <Header></Header>
    <div class='item'>
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
          <swiper-slide v-for="(imgUrl, index) in product.imgUrls" :key="index">
            <img :src="imgUrl" alt="" />
          </swiper-slide>
        </swiper>
      </div>

      <div class='detail'>
        <ul>
          <li>
            <h3>{{ product.name }}</h3>
            <div class='price'>
              <span>$</span>
              <b>{{ product.price }}</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <span class='addCart' @click="addToCart">加入購物車</span>
      <div class="successMessage" v-if="showMessage">
        成功加入購物車
      </div>
      <span>立即購買</span>
    </footer>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue'; // 導入 ref
import Header from '../components/Header.vue';
import Tabbar from '../components/tabbar.vue';

const router = useRouter();
const route = useRoute();

const modules = [Autoplay, Pagination, Navigation, A11y];

const imgUrls = route.query.imgUrls ? route.query.imgUrls.split(',') : [];

const product = ref({
  id: route.query.id,
  name: route.query.name,
  price: route.query.price,
  imgUrls: imgUrls // 使用数组而不是单个 URL
});

const showMessage = ref(false);

const addToCart = () => {
  showMessage.value = true; 
  setTimeout(() => showMessage.value = false, 1500); 
};
</script>

<style scoped lang="scss">
.successMessage {
  position: fixed;
  z-index:1000;
  top: 100px;
  width:160px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba( 243, 243, 243, 0.3);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color:black;
}
.item {
  z-index:1;
  display:flex;
  width:1300px;
  justify-content:center;
  align-items:center;
}

.swiperbox{
  position:fixed;
  z-index:0;
  left: 150px;
  width: 700px;
  height: 200px;
  top: 150px;
}

.swiperbox img {
  z-index:1;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  width: 550px;
  height:100%;
}

.detail {
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding:6px;
  }

  ul li {
    position:fixed;
    left:900px;
    top:150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%; /* Adjust the width as needed */
  }

  h3 {
    font-size: 35px;
  }

  .price {
    font-size: 28px;
    color: #b0352f;
  }

  .price span {

  }

}

footer {
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  height:50px;
  width:400px;
  left:900px;
  top:470px;
  border-top:1px solid #cccccc;
  background-color:#fff;

  span {
    width:50%;
    line-height:50px;
    text-align:center;
    font-size:20px;
    color:#fff;
    background-color:#b0352f;

    &.addCart {
      background-color:orange;
    }

  }
   
   div{
    width:50%;
    line-height:50px;
    text-align:center;
    font-size:20px;
    color:#fff;
    background-color:#b0352f;

    &.addCart {
      background-color:orange;
    }

  }
}
</style>
