<template>
    <header>
        <h1 @click="goToHomePage">
            <img src="/logo.jpg" alt=""> 
        </h1>
        <div class='search' @click='goSearch'>
            <i class='iconfont icon-fangdajing'></i>
            <span>搜尋</span>
        </div>

        <ul class="rules">
            <li v-for='(item,index) in routerList' :key='index'>
                <i 
                    :class="{
                        'iconfont': true,
                        [item.active]: true,
                        [item.selected]: $route.path === item.path,
                        'hoverable': true
                    }" 
                    @click="switchTab(item.path)"
                    alt=""
                ></i>
            </li>
        </ul>

    </header>
</template>

<script>
export default {
    data(){
        return{
            routerList:[
                {
                    title:'購物車',
                    path:'/cart',
                    active:'iconfont icon-gouwuche',
                    selected:'iconfont icon-gouwuche-yellow'
                },
                {
                    title:'我的',
                    path:'/my',
                    active:'iconfont icon-wode',
                    selected:'iconfont icon-wode-yellow'
                }
            ]
        }
    },
    methods:{
        goSearch(){
            this.$router.push('/search')
        },
        switchTab(path){
            if(this.$route.path === path) return;
            this.$router.push(path);
        },
        goToHomePage() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
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
}
header h1{
    width: 85px;
    height: 55px;
}
header h1 img{
    max-width: 100%;
    max-height: 100%;
    
}

.search{
    position: relative;
    display: flex;
    align-items:center;
    width: 300px;
    height: 30px;
    background-color: white;
    border-radius: 12px;
}
.search i{
    padding:16px;
    color: #ccc;
}
.search span{
    font-size:18px;
    color: #ccc;
}
.rules{
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.rules li i {
    margin: 10px;  
    padding:10px;
    width: 50px;
    height: 50px;
    font-size: 24px;
}
.rules li i.icon-gouwuche,
.rules li i.icon-wode{
    color: white; 
}
.rules li i.icon-gouwuche-yellow,
.rules li i.icon-wode-yellow {
    color: #b0352f; 
    border-radius:50px;
    background-color:white;
}

.hoverable:hover {
  border-radius:50px;
  background-color:white;
  color:black !important;
  padding:10px;
}
</style>
