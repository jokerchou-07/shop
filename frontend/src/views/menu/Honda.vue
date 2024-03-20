<template>
  <div class="product-list">
    <span class="title">HONDA</span>
    <ul class="product-grid">
      <li v-for='(item,index) in products' :key='index'  @click='() => goDetail(item)'
      @mouseenter="startCarousel(index)" @mouseleave="stopCarousel(index)">
        <h2><img :src="item.imgUrls[currentImageIndex[index]]" alt=""></h2>
        <div class="price">
          <h3>{{ item.name }}</h3>
          <p>價格: {{ item.price }} 元</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      currentImageIndex: {},
      carouselInterval: {},
      products: [
        {
          id: 1,
          name: "HRV",
          price: 100,
          imgUrls: ["/Honda1.png"]
        },
        {
          id: 2,
          name: "CRV",
          price: 150,
          imgUrls: ["/Honda2.png"]
        },
        {
          id: 3,
          name: "Odyssey",
          price: 150,
          imgUrls: ["/Honda3.png"]
        },
        {
          id: 4,
          name: "CIVIC",
          price: 130,
          imgUrls: ["/Honda4.png"]
        },
        {
          id: 5,
          name: "FIT",
          price: 70,
          imgUrls: ["Honda5.png"]
        },
      ]
    };
  },
  created() {
    this.products.forEach((_, index) => {
      this.currentImageIndex[index] = 0; 
    });
  },
  methods: {
    startCarousel(productIndex) {
      this.stopCarousel(productIndex); 
      this.currentImageIndex[productIndex] = 0; 
      this.carouselInterval[productIndex] = setInterval(() => {
        const imgsLength = this.products[productIndex].imgUrls.length;
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
.product-list {
  margin-top: 50px;
  text-align: center;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
}

.product-grid ul {
  display: flex;
  flex-wrap: wrap;
}
.product-grid li {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  width: 33.33%;
  list-style: none;
  padding: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius:15px;
}

.product-grid li:hover {
  background-color: #ccc;
  transform: scale(1.1); 
  border-radius:15px;
  font-weight: bold;
}

.product-grid img {
  width: 100%;
  max-height: 130px; /* 添加最大高度設置 */
  width: auto;
  transition: transform 0.3s ease;
}

.product-grid li:hover img {
  transform: scale(1.1);
}

.product-grid h3 {
  font-size: 20px;
  transition: transform 0.3s ease;
  color:black;
}

.product-grid li:hover h3 {
  transform: scale(1.1); 
}

.price span {
  font-size: 16px;
}
.title{
  font-size:25px;
}
.title::after{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius:50%;
    display: block;
    background: #b0352f;
    top: 50%;
    margin-top: -4px;
    right: -1rem;
}
.title::before{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius:50%;
    display: block;
    background: #b0352f;
    top: 50%;
    margin-top: -4px;
    left:-1rem;
}
</style>

