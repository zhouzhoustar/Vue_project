import axios from "axios"

import url from "url"; 
import MOCKAPI from "./MOCKAPI.js";

var instance = axios.create({
    baseURL: '/api'
 
  });

  //拦截器
  //拦截响应
  instance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
  //  console.dir(error.config.url)
  //净化路径，去掉querystring部分
  const pathname = url.parse(error.config.url).pathname
  //找策略对象，执行它
  if(typeof MOCKAPI[pathname]=='function'){
    return {
          data:MOCKAPI[pathname]()
    }
  }
 
    //当失败的之后，要考虑转接模拟接口
    return Promise.reject(error)
  });
  export default instance;