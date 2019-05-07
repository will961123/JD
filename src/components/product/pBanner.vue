<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
            <img class="s-img" :src="slide" alt=""/>
        </swiper-slide>
        <div class="swiper-paginations" slot="pagination"></div>
    </swiper>
</template>
<script>
export default {
  name: 'pBanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-paginations'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },

      swiperSlides: [
        '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/14660/26/3510/75469/5c26e061E76085e31/ef55ef9e2bf8cb84.jpg!q70.dpg.webp',
        '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/4394/21/3522/68010/5b997c0aE91c7291d/b8494bf281991f94.jpg!q70.dpg.webp',
        '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/4394/21/3522/68010/5b997c0aE91c7291d/b8494bf281991f94.jpg!q70.dpg.webp'
      ]
    }
  }
}
</script>
<style scoped lang="less">
    .s-img{
        width:100%;
        height:750px;
        display: block;
    }
    .swiper-paginations .swiper-pagination-bullet-active{
        background: blue !important;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets{
        position: absolute;
        left:50%;
        z-index: 10;
        bottom: 130px;
    }
</style>
