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
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31684/39/15532/76068/5cc2bcceEb95db222/d33ac18d7125f6b4.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31222/36/14172/175722/5cc571d2Eca6d9c76/13856003860b149b.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://imgcps.jd.com/ling4/2922989/54mb5aW25Lmz5ZOB5Zeo5bm05Y2O/5q2j5ZOB6YCf6YCS/p-5c17126882acdd181dd53ce8/2f338d07/cr_1125x549_0_72/s1125x690/q70.jpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/40090/24/2226/592956/5cbfd422E1ef9a1e3/2d3b42cb73b9197d.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/43438/32/1423/98127/5cc64813E702e27ad/3c300d36168e9e2e.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.simg {
  width: 100%;
  height: 366px;
}
</style>
