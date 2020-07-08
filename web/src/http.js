import axios from 'axios'
import Vue from 'vue'
import router from './router'
    const http = axios.create({
        baseURL:'http://localhost:3000/web/api'
    })

    http.interceptors.request.use(function(config){
        //请求头
        //在发送之前做什么
        if(localStorage.token){
            config.headers.Authorization = 'Bearer' + localStorage.token
            
        }return config;
        },function(error){
            // 对请求错误做些什么
            return  Promise.reject(error);
        }
    )

    http.interceptors.response.use(res=>{
        //请求头
        //在响应之前做什么
        
            return res;
        },err=>{
          //  对请求错误做些什么
           if(err.response.data.message){
               Vue.prototype.$message({
                   type:'error',
                   message:err.response.data.message
               })
           }
           return Promise.reject(err)
        }
    )

    export default http