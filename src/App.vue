<template>
  <div id="app">
    <bnav v-show='$store.state.showFooter'></bnav>
    <gotoTop></gotoTop>

    <keep-alive>
      <transition name='fade'>
        <router-view v-if="$route.meta.cache"></router-view>
      </transition>
    </keep-alive>

    <transition name='fade'>
      <router-view v-if="!$route.meta.cache"></router-view>
    </transition>
  </div>
</template>

<script>
// 初始样式
import '@/gcss/reset.css'
import '@/gcss/fonts.css'
import bnav from '@/common/bnav.vue'
import gotoTop from '@/common/gotoTop.vue'
export default {
  name: 'App',
  components: {
    bnav,
    gotoTop
  }
}
</script>

<style>
#app {
  height: 100%;
  background: #f0f2f5;
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
.swiper-pagination1 {
  position: absolute;
  z-index: 2;
  left: calc(50% - 20px) !important;
  bottom: 20px;
}
.swiper-pagination1 span {
  background: hsla(0, 0%, 100%, 0.7) !important;
  border: none;
  margin-right: 10px;
  width: 10px !important;
  height: 10px;
  border-radius: 50% !important;
}
.swiper-pagination1 .swiper-pagination-bullet-active {
  width: 20px !important;
  border-radius: 30% !important;
  background: red !important;
}

.swiper-pagination2 span {
  background: #999 !important;
  border: none;
}

.swiper-pagination2 .swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 30% !important;
}
.fade-end-active, .fade-leave-active{
  transition: all 0.5s
}
.fade-enter ,.fade-leave-to{
  opacity: 0;
}
</style>
