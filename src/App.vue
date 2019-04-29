<template>
  <div id="app">
    <bnav></bnav>
    <router-view></router-view>
  </div>
</template>

<script>
// 初始样式
import '@/gcss/reset.css'
import '@/gcss/fonts.css'
import bnav from '@/common/bnav.vue'
export default {
  name: 'App',
  components: {
    bnav
  }
}
</script>

<style>
#app {
  height: 100%;
}

</style>
