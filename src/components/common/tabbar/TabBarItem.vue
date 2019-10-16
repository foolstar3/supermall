<template>
  <div class="tab-bar-item" @click="toggle">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#1296db'
        }
    },
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        toggle() {
            this.$router.push(this.path)
        }
    }
}
</script>

<style>
  .tab-bar-item{
    text-align: center;
    font-size: 10px;
    flex: 1;
  }
  .tab-bar-item img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-top: 1px;
  }
</style>