<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Like></Like>
    <Recommend></Recommend>
    <div class="menu-container">
        <div ref="toyota">
            <Toyota></Toyota>
        </div>
        <div ref="honda">
            <Honda></Honda>
        </div>
        <div ref="bmw">
            <Bmw></Bmw>
        </div>
        <div ref="ford">
            <Ford></Ford>
        </div>
    </div>
    <div class="fun-tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :class="{ 'fun-tab': true, 'active': index === activeIndex }"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <section>
      <div v-for="tab in tabs" :key="tab.ref" :ref="tab.ref">
        <img :src="`/${tab.ref}.png`" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Icons from "../components/Icons.vue";
import Like from "../components/Like.vue";
import Recommend from "../components/Recommend.vue";
import Swiper from "../components/Swiper.vue";
import Honda from "../views/menu/Honda.vue";
import Toyota from "../views/menu/Toyota.vue";
import Bmw from "../views/menu/Bmw.vue";
import Ford from "../views/menu/Ford.vue";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Honda,
    Toyota,
    Bmw,
    Ford
  },
  data() {
    return {
      tabs: [
        { name: "toyota", title: "Toyota" },
        { name: "honda", title: "Honda" },
        { name: "bmw", title: "Bmw" },
        { name: "ford", title: "Ford" },
      ],
      activeIndex: null,
    };
  },
  methods: {
    selectTab(index) {
      this.activeIndex = index;
      const refName = this.tabs[index].name;
      this.scrollToSection(refName);
      // Set a timeout to reset the activeIndex after 0.5 seconds
      setTimeout(() => {
        this.activeIndex = null;
      }, 500);
    },
    scrollToSection(refName) {
      const element = this.$refs[refName];
      if (element) {
        window.scrollTo({
          top: element.offsetTop + 1200 , // Subtract 10 pixels
          behavior: "smooth"
        });
      }
    },
  },
};
</script>

<style scoped>
.fun-tabs {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  padding: 10px;
  font-size: 20px;
  background-color: #f0f0f0;
  margin-top: 10px;
  width: 110px;
  z-index: 1;
}

.fun-tab {
  padding: 5px;
  cursor: pointer;
  transition: color 0.5s ease, font-weight 0.5s ease; /* Add transition effect for color and font-weight */
}

.active {
  color: blue; /* Change color to blue when active */
  font-weight: bold; /* Make font bold when active */
}

.menu-container {
  display: flex;
  flex-direction: column;
}

</style>
