<template>
    <header>
        <div class='search-return'>
            <h1>
                <img src="/logo.jpg" alt=""> 
            </h1>
        </div>
        <div class='search-main'>
            <i class='iconfont icon-fangdajing'></i>
            <form action="" onsubmit="return false">
                <input type="search" placeholder="搜尋喜歡的產品">
            </form>
        </div>
        <div class='search-btn' @click='searchList'>搜索</div>
    </header>
</template>

<script>
export default {
  methods: {
    searchList(){
        this.$router.push('/searchList')
    }
  }
}
</script>

<style>
header {
    display: flex;
    justify-content: space-around;
    position: fixed;
    align-items: center;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 55px;
    background-color: #b0352f;
    z-index: 2;
    color: #fff;
}
header h1 {
    width: 85px;
    height: 55px;
}
header h1 img {
    width: 100%;
    height: 100%;
}

.search-btn {
    position: relative;
    font-size: 15px;
    padding: 8px;
    background: white;
    color: #b0352f;
}
.search-main {
    position: relative;
    display: flex;
    align-items: center;
    width: 500px;
    height: 30px;
    background-color: white;
    border-radius: 12px;
}
.search-main input[type="search"] {
    border: none;
    width: 455px;
    color: #000;

}
.search-main i {
    padding: 8px;
    color: #ccc;
}
search-main form {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
}
</style>
