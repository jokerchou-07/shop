<template>
  <div class="search">
    <Header></Header>
    <section class="search-content">
      <div class='history'>
        <h2>歷史搜索</h2>
        <ul>
          <li>車123132</li>
          <li>車132526</li>
          <li>車15962</li>
          <li>車2652622</li>
          <li>車26</li>
          <li>車2646</li>
          <li>車1897</li>
          <li>車9462</li>
        </ul>
      </div>
      <div class='hot'>
        <h2>熱門搜索</h2>
        <ul>
          <li>車123132</li>
          <li>車132526</li>
          <li>車15962</li>
          <li>車2652622</li>
          <li>車26</li>
          <li>車2646</li>
          <li>車1897</li>
          <li>車9462</li>
        </ul>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar.vue'
import Header from '../components/search/Header3.vue'

export default {
  components: {
    Tabbar,
    Header
  }
}
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  width:1200px;
  height: 100vh;
  overflow: hidden;
}

.search-content {
  display: flex;
  width:1100px;
  margin-left:100px;
  flex-direction: row;
  flex: 1; 

}

.history, .hot {
  flex: 1; /* 兩個部分平均佔滿水平空間 */
  padding: 12px;
  margin-top: 70px;
  margin-left: auto; /* 從左邊緣靠右 */
  margin-right: auto; /* 從右邊緣靠左 */
  max-width: 50%;
}

.history h2, .hot h2 {
  padding-right:2px;
  font-weight: 200;
  font-size: 18px;
}

.history ul, .hot ul {
    display:flex;
    flex-wrap:wrap;
    padding:0 5px;
    list-style: none;
}

.history ul li,.hot ul li {
  border: 1px solid #ccc;
  margin: 5px;
  padding: 3px 5px;
  font-size: 16px;
}
</style>
