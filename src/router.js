
import Vue from "vue";
import VueRouter from "vue-router"; 
Vue.use(VueRouter)

import Login from "./views/login/Login.vue"
import Index from "./views/index/Index.vue"

const router = new VueRouter({
  routes:[
    { path: '/login', component: Login, name:'login'},
    { path: '/index', component: Index }
    
  ]
})

export default router  //对外暴露一个router