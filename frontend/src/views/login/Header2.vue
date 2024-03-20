<template>
    <header>
        <div>
            
        </div>
        <div>
            <slot>
                <span>登入</span>
            </slot>
        </div>
        <div>
            <i class='iconfont icon-kefu'> </i>
        </div>
    </header>
</template>

<style scoped lang='scss'>
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
    color: white;
    span{
        font-size:22px;
    }
    i{
        padding:3px;
        font-size:22px;
    }
}

</style>