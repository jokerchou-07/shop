<template>
    <div class='list'>
        <Header></Header>
        <fun-tabs v-model="value">
            <fun-tab-item name="1" title="Toyota" />
            <fun-tab-item name="2" title="Honda" />
            <fun-tab-item name="3" title="BMW" />
            <fun-tab-item name="4" title="Ford" />
            <fun-tab-item name="5" title="Lexus" />
            <fun-tab-item name="6" title="Peugeot" />
        </fun-tabs>
        <section>
            <div class='list-l'>
                <ul class='l-item'>
                    <li class='active'>推薦</li>
                    <li>推薦</li>
                    <li>推薦</li>
                    <li>推薦</li>
                    <li>推薦</li>
                </ul>
            </div>

            <div class='list-r'>
                <ul>
                    <li class='shop-list'>
                        <ul  class='r-item'>
                            <li>
                                <img src="/recommend1.png" alt="">
                                <span>Ford Focus 5D</span>
                            </li>
                            <li>
                                <img src="/recommend2.png" alt="">
                                <span>Ford Focus 5D</span>
                            </li>
                            <li>
                                <img src="/recommend1.png" alt="">
                                <span>Ford Focus 5D</span>
                            </li>
                            <li>
                                <img src="/recommend2.png" alt="">
                                <span>Ford Focus 5D</span>
                            </li>
                            <li>
                                <img src="/recommend1.png" alt="">
                                <span>Ford Focus 5D</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name: "list",
    components:{
        Header
    },
    methods: {
    searchList(){
        this.$router.push('/searchList')
    }
  }
}
</script>

<style scoped lang="scss">
.fun-tabs{
    display: flex;
    flex-direction: row;
    position: fixed;
    top:60px;
    left:0;
    padding:10px;
    font-size:20px;
    background-color: #f0f0f0;
    height: 220px;
    margin-top: 10px;
    z-index: 1;
}
.fun-tab {
    display: flex;
    padding: 10px;
    border: 1px solid #ccc;
}
section{
    display:flex;
    flex:1;
    overflow:auto;
    position:fixed;
    left:20px;
    top:70px;
}
.list-l{
    width:80px;
    .l-item{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        li{
            width:100%;
            line-height:1.6rem;
            text-align:center;
            font-size:16px;
            padding:5px;
        }
    }
}
.active{
    border-left:3px solid #b0352f;
}

.list-r{

    margin-left:80px;
    width:1200px;
    padding:3px;
    .shop-list{

            text-align:center;
            padding:3px;
            .r-item{

                padding:3px;
                display:flex;
                flex-wrap:wrap;
                li{
                    border-radius:4px;
                    margin: 2px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    padding:10px;
                    width:19%;
                    img{
                        width:100px;
                        height:100px;
                    }
                }
            }
        }
    
}
</style>