<template>
  <div class='cart container'>
    <header>
      <Header></Header>
      <i></i>
      <span>購物車</span>
      <span class="edit-text">  </span>
    </header>
    <section>
      <div class='good'>
        <van-checkbox v-model="checked"></van-checkbox>
        <span>商品</span>
      </div>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          <div>
            <van-checkbox v-model="checked"></van-checkbox>
          </div>
          <h2>
            <img :src="item.imgUrl" alt="">
          </h2>
          <div class='good-name'>
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }}</p>
          </div>
          <div class='lajitong'>
            <van-stepper v-model="value" integer />
            <i class='iconfont icon-lajitong'></i>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <div class='radio'>
        <van-checkbox v-model="checked"></van-checkbox>
      </div>
      <div class='total'>
        <div>
          共有
          <span class='total-active'>{{ cartItems.length }}</span>
          件商品
        </div>
        <div>
          <span>總計:</span>
          <span class='total-active'>{{ total }}</span>
        </div>
      </div>
      <div class='pay'>去結帳</div>
    </footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import { ref } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue';

const cartItems = ref([]); // 使用 ref 創建可響應的數組
let total = 0;

// 添加一個事件監聽器，監聽來自 detail.vue 的 addToCart 事件
const addToCartListener = (event) => {
  // 從事件對象中獲取傳遞的商品詳細信息
  const eventData = event.detail;
  // 將商品添加到購物車數組中
  cartItems.value.push(eventData);
  // 更新總計
  total += eventData.price;
};

// 監聽 addToCart 事件
onMounted(() => {
  window.addEventListener('addToCart', addToCartListener);
});

// 在組件被卸載前移除事件監聽器，防止內存洩漏
onBeforeUnmount(() => {
  window.removeEventListener('addToCart', addToCartListener);
});
</script>


<style scoped lang="scss">
header{
    display:flex;
    justify-content: space-around;
    position: fixed;
    align-items:center;
    top:0;
    left:0;
    width: 100%;
    height: 55px;
    background-color: #b0352f;
    z-index: 2;
    color: #fff;
    i{

        font-size:24px;
        padding:0 0.4rem;
    }
    span{
        font-size:25px;
        text-align: center;
        padding:0 0.4rem;
    }
    .edit-text {
        font-size: 18px; 
    }
}
section{
    top: -180px;
    width:1150px;
    background-color: gray;
    .good{
        display:flex;
        padding:10px;
    span{
        padding: 0 20px;
        font-weight: 500;
        font-size:15px;
        color:#fff;
    }
    }
    ul{
        display: flex;
        flex-direction: column;
        li{
            padding: 10 10px;
            background-color:#fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .good-name{
                font-size:16px;
                font-weight:300;
                p{
                    font-weight:400;
                    color: #b0352f;
                }
            }
            img{
                width: 250px;
                padding:5px;
            }
        }
    }
}
footer{
    top:200px;
    left:850px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:50px;
    border-top:3px solid #ccc;
    width:300px;
    .radio{
        padding:3px;
    }
    .total{
        font-size:16px;
        .total-active{
            color: #b0352f;
        }
    }
    .pay{
        padding:3px;
        background-color: #b0352f;
        color: #fff;
    }
}
.lajitong i{
    font-size:25px;
    color: red;
    padding:6px;
    top:4px;
}
.rules{
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.rules li{
    display:flex;
    flex-direction:column;
    align-items: center;
}
.rules li img{
    margin: 3px;
    width: 31px;
    height: 31px;
}
.rules ul li span{
    display:flex;
    font-size:16px;
    text-align: center;
    color:#fff;
}
</style>
