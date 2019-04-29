import Vue from "vue";
import router from "../router";
export default{
    namespaced:true,
    state:{
        username:'',
        nickname:'',
        avatar:''
    },
    mutations:{
        changeUername(state,{username}){
            state.username = username
        },
        changeNickname(state,{nickname}){
            state.nickname = nickname
        },
        changeAvatar(state,{avatar}){
            state.avatar = avatar
        },
    },
    actions:{
            async checkMe({commit}){
            var resultObj= await Vue.prototype.$http.get('/me').then(data=>data.data)
            //   console.log(resultObj)
            //没有登录
            if(resultObj.err==-4){
                router.push({'name':'login'});
                return
            }
            //解构
            const{username,nickname,avatar} = resultObj
            //上跳
            commit('changeUername',{username});
            commit('changeNickname',{nickname});
            commit('changeAvatar',{avatar});
        }
    }
}