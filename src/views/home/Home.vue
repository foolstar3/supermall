<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/HomeRecommend'
import {getHomeMultiData} from 'network/home'


export default {
    name: 'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultiData().then(res => {
        let obj = eval ("(" + res + ")")
        // console.log(typeof(res))
        // console.log(res)
        // console.log(obj)
        // res = JSON.parse(res);
        // res= JSON.stringify(res);
        this.banner = obj.banner
        this.recommend = obj.recommend
      })


    }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>