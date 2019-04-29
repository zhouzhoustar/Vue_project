
import Vue from "vue";
import VueRouter from "vue-router"; 
import store from "./store/index.js"
Vue.use(VueRouter)

import Login from "./views/login/Login.vue"
import Index from "./views/index/Index.vue"

const router = new VueRouter({
  routes:[
    { path: '/login', component: Login, name:'login'},
    { path: '/', component: Index ,name:'index'}
    
  ]
})

//路由守卫
  router.beforeEach((to,from,next)=>{
    // console.log("我从",from,"来")
    // console.log("我要去",to.name)
    if(to.name != 'login'){
      store.dispatch('me/checkMe')
      // console.log(store)
    }
    next()
  })

export default router  //对外暴露一个router