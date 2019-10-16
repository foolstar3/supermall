import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Shopcart from '../views/shopcart/Shopcart'
import Profile from '../views/profile/Profile'



// 1.安装插件
Vue.use(VueRouter)




// 2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/shopcart',
        component: Shopcart
      },
      {
        path: '/profile',
        component: Profile
      }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出
export default router