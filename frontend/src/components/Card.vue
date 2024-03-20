<template>
    <div class='title'>
        <slot>
            <span>火爆推薦</span>
        </slot>
    </div>
</template>

<script>
</script>

<style scoped>
.title{
    padding: 15px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    top:10px;
}
.title span{
    position: relative;
}
.title span::after{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius:50%;
    display: block;
    background: #b0352f;
    top: 50%;
    margin-top: -4px;
    right: -1rem;
}
.title span::before{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius:50%;
    display: block;
    background: #b0352f;
    top: 50%;
    margin-top: -4px;
    left:-1rem;
}
</style>