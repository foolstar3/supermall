import axios from 'axios'

// axios.defaults.baseURL="http://47.106.248.143/supermall";//需要请求的后端域名 

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: '/api',
        timeout: 5000,
        // headers:{
        //     'Content-Type':'application/x-www-form-urlencoded'
        // }
    })

    // 2.axios的拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err)
    })

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config)
}