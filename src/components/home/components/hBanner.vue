<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a href="javascript:;">
        <img class="simg" :src="slide" alt>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {gethBanner} from '@/api'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      swiperSlides: []
    }
  },
  async created () {
    this.swiperSlides = await gethBanner()
  }
}
</script>

<style scoped lang='less'>
.simg {
  width: 100%;
  height: 366px;
}
</style>
