<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a href="javascript:;">
        <img class="simg" :src="slide.img" alt>
      </a>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
  </swiper>
</template>

<script>
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
      swiperSlides: [
        {
          id: '0',
          img:
            '//img20.360buyimg.com/mcoss/jfs/t1/37567/19/5362/100699/5cc7e8f7Eee418daf/c1316c19d325278d.jpg!q70.dpg'
        },
        {
          id: '1',
          img:
            '//img12.360buyimg.com/mcoss/jfs/t1/43633/35/1643/97361/5cc6e836E17a55c8a/043e6f4ae7f5d766.jpg!q70.dpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.simg {
  width: 100%;
  //   height: 366px;
}
</style>
