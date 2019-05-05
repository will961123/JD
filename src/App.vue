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
  background: #F0F2F5
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
.swiper-pagination2 span{
  width:10px;
  height:10px;
  background:#999;
  margin-right:10px;
}

.swiper-pagination2 .swiper-pagination-bullet-active {
  width:30px;
  border-radius:30%;
}
</style>
