import Vue from 'vue'
import App from './App.vue' 
import iview from "iview"; 

import http from "./utils/http.js"
import router from "./router.js" 
import store from "./store/index.js"

Vue.use(iview)
//将http写在vue的原型上
Vue.prototype.$http = http; 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
