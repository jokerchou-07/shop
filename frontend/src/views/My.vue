<template>
    <div class='my-container'>
    <Header></Header>
        <span class='login' @click='goLogin' >登入/註冊</span>
        <section>
            <ul>
                <li></li>
            </ul>
        </section>
        <Tabbar> </Tabbar>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name: "my",
    components:{
        Header
    },
    methods:{
        goLogin(){
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped lang='scss'>
.my-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    left:160px;
}
.login{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    color: white;
    background-color: black;
    border-radius: 6px;

    }
section{
    flex:1;
    overflow: hidden;
    ul li{
        padding:15px;
    }
}
</style>