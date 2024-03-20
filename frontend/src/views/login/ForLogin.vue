<template>
  <div class="login-success">
    <Header>
      <template #default>
        <div class="user-profile">
          <img src="/icon3.png" alt="User Avatar">
          <span>{{ username }}</span>
        </div>
      </template>
    </Header>
    <div class="main-content">
      <h1>歡迎回來，{{ username }}！</h1>
      <p>你已成功登入。</p>
    </div>
    <section>
        <ul>
            <li>地址管理</li>
            <li>帳號設定</li>
            <li>購買紀錄</li>
            <li>我的通知</li>
            <li @click='loginOut'>退出登入</li>
        </ul>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../../components/tabbar.vue'
import Header from '../../views/login/Header2.vue'

export default {
  components: {
    Tabbar,
    Header
  },
  data() {
    return {
      username: '用户'
    }
  },
  methods:{
    loginOut(){
        this.$router.push('/loginOut')
    }
  }
}
</script>

<style scoped lang="scss">
.login-success{
    top:0;
    left:0;
    display: flex;
    width:100%;
    justify-content:center;
    position: fixed;
    align-items:center;
}
.user-profile {
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  span {
    font-size: 20px;
  }
}
.main-content {
    margin-top:80px;
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 26px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
section{
    margin-top:250px;
    position:fixed;
    display: flex;
    overflow: hidden;
    list-style: none;

    ul li{
        display: inline-block;
        padding:10px;
        font-size:20px;
    }
}
</style>
