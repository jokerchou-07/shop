<template>
  <div class='recommend'>
    <Card></Card>
    <ul>
      <li
        v-for='(item,index) in recommendList'
        :key='index'
        @click='() => goDetail(item)'
        @mouseenter="startCarousel(index)" @mouseleave="stopCarousel(index)">
        <h2><img :src="item.imgUrls[currentImageIndex[index]]" alt=""></h2>
        <div>
          <h3>{{item.name}}</h3>
          <p>{{item.content}}</p>
          <div class='price'>
            <span>$</span>
            <b>{{item.price}}</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  data() {
    return {
      currentImageIndex: {},
      carouselInterval: {},
      recommendList:[
        {
          id:1,
          name: 'Ford Focus 5D',
          content:'中型掀背車 紅色車款',
          price:95,
          imgUrls: ["/recommend1.png","/recommend1-1.png","/recommend1-2.png","/recommend1-3.png",]
        },
        {
          id:2,
          name: 'Peugeot 3008',
          content:'中型SUV休旅 藍色車款',
          price:148,
          imgUrls: ["/recommend2.png","/recommend2-1.png","/recommend2-2.png","/recommend2-3.png"]                    
        }
      ]
    }
  },
  components: {
    Card
  },
  created() {
    this.recommendList.forEach((_, index) => {
      this.currentImageIndex[index] = 0; 
    });
  },
  methods: {
    startCarousel(productIndex) {
      this.stopCarousel(productIndex); 
      this.currentImageIndex[productIndex] = 0; 
      this.carouselInterval[productIndex] = setInterval(() => {
        const imgsLength = this.recommendList[productIndex].imgUrls.length;
        this.currentImageIndex[productIndex] = (this.currentImageIndex[productIndex] + 1) % imgsLength;
      }, 800); 
    },
    stopCarousel(productIndex) {
      if (this.carouselInterval[productIndex]) {
        clearInterval(this.carouselInterval[productIndex]);
        this.carouselInterval[productIndex] = null;
        this.currentImageIndex[productIndex] = 0;
      }
    },
    goDetail(item) {
      this.$router.push({
        path: '/detail/' + item.id,
        query: {
          name: item.name,
          price: item.price,
          imgUrls: item.imgUrls.join(',')
        }
      })
    },
    beforeUnmount() {
      Object.values(this.carouselInterval).forEach(clearInterval);
    }
  }
};
</script>

<style scoped>
.recommend li:hover {
  background-color: #ccc;
  transform: scale(1.1); 
  border-radius:15px;
}
.recommend ul li {
  position: relative;
  list-style: none;
}
.recommend ul li h2 {
  text-align: center;
  padding:5px;
}
.recommend ul li img {
  border-radius: 12px;
  margin-left: -280px;
  height:150px;
  border-radius:5px;
}
.recommend ul li > div {
  position: absolute;
  left: 700px;
  top: 15px;
  display: flex;
  margin-left: -100px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}
.recommend ul li > div h3 {
  font-size:12px;
}
.recommend ul li > div p {
  font-size:12px;
}
.price{
  color: #b0352f;
  margin-top: 20px;
}
.price span {
  font-size:16px;
}
</style>

/*
.recommend ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0; /* 移除默认的padding */
  margin: 0; /* 根据需要调整外边距 */
}

.recommend ul li {
  width: calc(50% - 10px); /* 假设想要在项目之间留有20px的间隙，每个项目减去10px */
  margin: 5px; /* 为每个项目增加5px的边距，以创建间隙效果 */
  box-sizing: border-box; /* 确保宽度包括了padding和border */
  position: relative;
  list-style: none;
  display: flex; /* 使图片和内容水平排列 */
  justify-content: center; /* 居中显示子元素 */
  flex-direction: column; /* 将方向改为列，使内容垂直堆叠 */
  align-items: center; /* 在交叉轴上居中对齐子元素 */
}

.recommend ul li h2,
.recommend ul li > div {
  text-align: center; /* 居中对齐文字和图片 */
}

.recommend ul li img {
  width: 100%; /* 使图片宽度自适应 */
  max-width: 220px; /* 设置图片最大宽度，保持图片不会过大 */
  border-radius: 12px;
  margin: 0 auto; /* 图片居中显示 */
}

.recommend ul li > div {
  padding: 10px; /* 调整内边距 */
  width: 100%; /* 容器宽度设置为100% */
}

/* 以下样式保持不变 */
.recommend li:hover {
  background-color: #ccc;
  transform: scale(1.1); /* 将图片和文字放大 1.1 倍 */
  border-radius:15px;
}

.price {
  color: #b0352f;
  margin-top: 20px;
}

.price span {
  font-size:16px;
}

*/