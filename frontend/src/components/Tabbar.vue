<template>
    <div class='tabber'>
        <ul>
            <li
                v-for='(item,index) in routerList'
                :key='index'
                @click='switchTab(item.path)'
            >
                <img src="$route.path.includes(item.path) ? item.selected : item.active" alt="">
                <span>{{item.title}}</span> //class='$route.path.includes(item.path) ? "active" : "" '
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    date(){
        return{
            routerList:[
                {
                    title:'首頁',
                    path:'/home',
                    active:'../桌面/test/home.png',
                    selected:'../桌面/test/home-select.png'
                },
                {
                    title:'分類',
                    path:'/list',
                    active:'../桌面/test/list.png',
                    selected:'../桌面/test/list-select.png'
                },
                {
                    title:'購物車',
                    path:'/cart',
                    active:'../桌面/test/cart.png',
                    selected:'../桌面/test/cart-select.png'
                },
                {
                    title:'我的',
                    path:'/my',
                    active:'../桌面/test/my.png',
                    selected:'../桌面/test/my-select.png'
                }
            ]
        }
    },
    methods:{
        switchTab(path){
            if(this.$route.path == path) return;
            this.$router.replace(path);
        }
    }
}
</script>

<style scoped>
.tabbar{
    position:fixed;
    left:0;
    bottom:0;
    z-index:999;
    width:100%
    height: 47px;
    background-color:blue;

.tabbar ul{
    display:flex;
    jusstify-content: space-around;
    align-items: center;
    width: 100%;
    heigh:100%;
}
.tabbar ul li{
    display:flex;
    flex-direction:column;
}
.tabbar ul li img{
    width: 31px;
    heigh: 31px;
}
.tabbar ul li span{
    font-sizee:16px;
}
</style>