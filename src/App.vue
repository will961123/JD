<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 初始样式
import '@/gcss/reset.css'

export default {
  name: 'App',
  components: {

  }
}

</script>

<style>
#app {
  height: 100%;
}
.swiper-pagination span {
  width: 12px !important;
  height: 12px !important;
  background-color: transparent;
  border: 2px solid #fff;
  margin-right: 8px !important;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: #fff;
}

</style>
