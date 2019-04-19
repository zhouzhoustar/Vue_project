import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex"
import iview from "iview";
import store from "./store/index.js"
 

Vue.use(Vuex);
Vue.use(iview)

new Vue({
    el:"#app",
    render(h){
        return h(App)
    },
    store:new Vuex.Store(store)
})