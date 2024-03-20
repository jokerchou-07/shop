<template>
    <ul class="icons">
        <li v-for='(item,index) in iconsList' :key='index'>
            <span>{{item.title}}</span>
            <img :src="item.imgUrl" alt="">
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            iconsList:[
                {
                    id:1,
                    title:'折價卷',
                    imgUrl:'/icon1.png'
                    
                },
                {
                    id:2,
                    title:'免運卷',
                    imgUrl:'/icon2.png'
                    
                },{
                    id:3,
                    title:'排行榜',
                    imgUrl:'/icon3.png'
                    
                },{
                    id:4,
                    title:'新品上市',
                    imgUrl:'/icon4.png'
                    
                },{
                    id:5,
                    title:'累積點數',
                    imgUrl:'/icon5.png'
                    
                },
            ]
        }
    }
}
</script>

<style scoped>
.icons{
    display: flex;
    justify-content: space-around;
    padding:20px;
    margin-left: 200px;
    margin-top: 250px;
    
}
.icons li{
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-right: 100px;
    flex-direction: column;
}
.icons img{
    width:60px;
    height:50px;
}
.icon span{
    font-size:20px;
}
</style>