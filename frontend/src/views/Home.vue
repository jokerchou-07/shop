<template>
    <div class="home">
        <Header> </Header>
        <fun-tabs v-model="value">
            <fun-tab-item name="1" title="选项卡1" />
            <fun-tab-item name="2" title="选项卡2" />
            activeColor: red
        </fun-tabs>
        <Tabbar> </Tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('1')
</script>

<script>
import Header from '@/componments/home/Header.vue'
import Tabbar from '@/componments/tabbar.vue'
export default{
    name:"Home",
    componments:{
        Tabbar,
        Header
    }
};
</script>

<style scope>
{
    position: fixed;
    top:64px;

}
</style>