<template>
    <div class='login container'>
        <Header></Header>
        <section>
            <div class='login-tel'>
                <input type="text" v-model='userTel' placeholder="請輸入手機號" pattern="[0-9]*">
            </div>
            <div class='login-tel'>
                <input type="text" v-model='userPwd' placeholder="請輸入密碼">
            </div>
            <div class='login' @click='forLogin'>登入</div>
            <div class='tab'>
                <span @click='goLogin'>驗證碼登入</span>
                <span>忘記密碼</span>
                <span>快速註冊</span>
            </div>
        </section>
        <Tabbar></Tabbar>
    </div>

</template>

<script>
import Tabbar from '../../components/tabbar.vue'
import Header from '../../views/login/Header2.vue'
export default {
    data() {
        return {
            userTel: '',
            userPwd: '',
            rules: {
                userTel: {
                    rule: /^0[123456789]\{9}$/,
                },
                userPwd: {
                    rule: /^\w{6,12}$/,
                    msg: '密碼為6~12位'
                }
            }
        }
    },
    components: {
        Tabbar,
        Header
    },
    methods: {
        goLogin() {
            this.$router.push('/login');
        },
        forLogin(){
            this.$router.push('/forLogin');
        },
        login() {
            if (!this.validate('userTel')) return;
            if (!this.validate('userPwd')) return;

            axios({
                method: 'POST', // 发送 POST 请求
                url: '/api/login',
                data: {
                    userTel: this.userTel,
                    userPwd: this.userPwd
                }
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.error(err);
            });
        },
        validate(key) {
            if (!this.rules[key].rule.test(this[key])) {
                // 如果验证不通过，输出错误信息
                console.error('Validation failed for ' + key);
                return false;
            }
            return true;
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
    margin-top:20px;
    display: flex;
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
    .login{
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