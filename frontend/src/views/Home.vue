<template>
    <div class="home">
        <Header></Header>
        <fun-tabs v-model="value">
            <fun-tab-item name="1" title="短袖" />
            <fun-tab-item name="2" title="長袖" />
            <fun-tab-item name="3" title="短褲" />
            <fun-tab-item name="4" title="長褲" />
        </fun-tabs>
        <section>
            <Icons></Icons>
            <Swiper></Swiper>
        </section>
        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Tabbar from '../components/tabbar.vue'
import Icons from '../components/Icons.vue'
import Swiper from '../components/Swiper.vue'
export default {
    name: "Home",
    components:{
        Tabbar,
        Header,
        Icons,
        Swiper
    }
}
</script>

<style scoped>
.fun-tabs{
    display: flex;
    flex-direction: row;
    position: fixed;
    top:60px;
    left:0;
    font-size:20px;
}

</style>