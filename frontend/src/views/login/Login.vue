<template>
    <div class='login container'>
        <Header></Header>
        <section>
            <div class='login-tel'>
                <input type="text" placeholder="請輸入手機號" pattern="[0-9]*">
            </div>
            <div class='login-code'>
                <input type="text" placeholder="請輸入驗證碼">
                <button>獲取驗證碼</button>
            </div>
            <div class='login-into' @click='forLogin'>登入</div>
            <div class='tab'>
                <span @click='passwordLogin'>密碼登入</span>
                <span>快速註冊</span>
            </div>
        </section>
    </div>

</template>

<script>
import Header from '../../components/Header.vue'
export default {
    components:{
        Header
    },
    methods:{
        passwordLogin(){
            this.$router.push('/userLogin');
        },
        forLogin(){
            this.$router.push('/forLogin');
        }
    }
}
</script>

<style scoped lang='scss'>
.container{
    top:0px;
    left:250px;
}
section{
    display: flex;
    margin-top:20px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color:#f6f6f6;
    div{
        margin:0.4rem 0;
        width:650px;
        height:44px;
        
    }
    input{
        box-sizing: border-box;
        padding:0 0.26666rem;
        line-height:40px;
        background-color:#FFFFFF;
        border:1px solid #ccc;
        border-radius:6px;
    }
    .login-tel{
        margin-top:15px;
        input{
            width:650px;
        }
    }
    .login-code{
        display:flex;
        input{
            flex:1;
        }
        button{
            padding: 0 20px;
            line-height:40px;
            height: 44px;
            background-color: #b0352f;
            border:0px;
            border-radius:6px;
            color: white;
        }
    }
    .login-into{
        line-height:44px;
        background-color: #b0352f;
        color: white;
        border-radius:6px;
        text-align: center;
    }
    .tab{
        display:flex;
        justify-content: space-between;
        font-size:16px;
        padding:0 20px;
        line-height:40px;
    }
}
</style>