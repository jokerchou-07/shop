<template>
  <div class='like'>
    <Card1></Card1>
    <ul>
      <li v-for='(item,index) in likeList' :key='index' @click='() => goDetail(item)'
        @mouseenter="startCarousel(index)" @mouseleave="stopCarousel(index)">
        <h2><img :src="item.imgUrls[currentImageIndex[index]]" alt=""></h2>
        <h3>{{item.name}}</h3>
        <div class='price'>
          <span>$</span>
          <b>{{item.price}}</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card1 from '../components/Card1.vue'

export default {
  data() {
    return {
      currentImageIndex: {},
      carouselInterval: {},
      likeList: [
        {
          id: 1,
          name: 'Toyota Corolla Altis',
          price: 299,
          imgUrls: ["/like1.png","/like1-1.png","/like1-2.png"],
        },
        {
          id: 2,
          name: 'Lexus LBX',
          price: 299,
          imgUrls: ["/like2.png","/like2-1.png","/like2-2.png"],
        },
        {
          id: 3,
          name: 'Honda CRV',
          price: 299,
          imgUrls: ["/like3.png","/like3-1.png","/like3-2.png"],
        }
      ]
    }
  },
  components: {
    Card1
  },
  created() {
    if (this.likeList) { // 确保 likeList 已定义
      this.likeList.forEach((_, index) => {
        this.currentImageIndex[index] = 0; 
      });
    }
  },
  methods: {
    startCarousel(productIndex) {
      this.stopCarousel(productIndex); 
      this.currentImageIndex[productIndex] = 0; 
      this.carouselInterval[productIndex] = setInterval(() => {
        const imgsLength = this.likeList[productIndex].imgUrls.length;
        this.currentImageIndex[productIndex] = (this.currentImageIndex[productIndex] + 1) % imgsLength;
      }, 950); 
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
.like ul {
  display: flex;
  flex-wrap: wrap;
}
.like ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  list-style: none;
  padding: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius:15px;
}

.like ul li:hover {
  background-color: #ccc;
  transform: scale(1.1);
  border-radius:15px;
}

.like img {
  height: 120px;
  transition: transform 0.3s ease;
  border-radius:5px;
}

.like ul li:hover img {
  transform: scale(1.1);
}

.like h3 {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.like ul li:hover h3 {
  transform: scale(1.1);
}

.price {
  color: #b0352f;
}

.price span {
  font-size: 16px;
}
</style>
