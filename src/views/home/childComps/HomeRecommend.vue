<template>
  <div class="recommend">
      <div v-for="item in recommend" :key="item.link" class="recommend-item">
          <a :href="item.link">
              <img :src="item.url" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommend: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        font-size: 12px;
        text-align: center;
        padding: 15px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend-item {
        flex: 1;
    }
    .recommend-item img {
        width: 62px;
        height: 62px;
        margin-bottom: 10px;
        border-radius: 50%;
    }
</style>