<template>
    <header>
        <h1>
            <img src="../src/assets/logo.jpg" alt=""> 
        </h1>
        <div class='search'>
            <i class='iconfont icon-fangdajing'></i>
            <span>搜尋</span>
        </div>
        <div class='kefu'>
            <i class='iconfont icon-kefu'></i>
        </div>
    </header>
</template>

<style scoped>
header{
    display:flex;
    justify-content: space-around;
    position: fixed;
    align-items:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 55px;
    background-color: #b0352f;
}
header h1{
    width: 85px;
    height: 55px;
}
header h1 img{
    width: 100%;
    height: 100%;
}

.search{
    top:12px;
    left:200px;
    display: flex;
    align-items:center;
    width: 500px;
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
.kefu{
    top:-20px;
    left:150px;
    display: flex;
    align-items:center;
    height: 100px;
    width: 100px;

}
.kefu i{
    font-size:18px;
    color: white;
}
</style>