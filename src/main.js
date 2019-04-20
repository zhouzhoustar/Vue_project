import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import iview from "iview";


import http from "./utils/http.js"
import routes from "./routes.js"

const router = new VueRouter({routes})

Vue.use(VueRouter)
Vue.use(iview)
//将http写在vue的原型上
Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
