import { createRouter, createWebHistory } from 'vue-router'
import Detail from "../views/Detail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('../views/My.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/userLogin',
      name: 'UserLogin',
      component: () => import('../views/login/UserLogin.vue')
    },
    {
      path: '/forLogin',
      name: 'ForLogin',
      component: () => import('../views/login/ForLogin.vue')
    },
    {
      path: '/loginOut',
      name: 'LoginOut',
      component: () => import('../views/login/UserLogin.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/searchList',
      name: 'SearchList',
      component: () => import('../views/SearchList.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../views/Detail.vue'),
      children: [
        {
          path: ":id", // 子路由中的動態路由參數:id，用於接收商品的id
          name: "Detail",
          component: Detail
        }
      ]
    },
    
  ]
})

export default router
