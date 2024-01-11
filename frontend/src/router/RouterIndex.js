import Vue from "vue";
import VueRouter from "vue-router"
import Home from "../src/Home.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "hOme",
        component: Home,
    },
    {
        path: "/",
        redirect:'/home',
    },
    {
        path: "/list",
        name: "List",
        component: ()=>
            import("../components/List.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: ()=>
            import("../components/Cart.vue"),
    },
    {
        path: "/my",
        name: "My",
        component: ()=>
            import("../components/My.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.Base_URL,
    routes,
});

export default router;