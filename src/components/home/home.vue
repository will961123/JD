<template >
  <div class="home">
    <!-- 头部搜索框 -->
    <hsearch :s='scrolly'></hsearch>
    <!-- 头部轮播 -->
    <hBanner></hBanner>
    <!-- 头部分类-->
    <hCate></hCate>
    <!-- 京东秒杀 -->
    <jdspike></jdspike>
    <!-- 东家小院 -->
    <dyard></dyard>
    <!-- 每日逛 -->
    <gdaily></gdaily>
    <!-- 为你推荐 -->
    <foryou></foryou>
  </div>
</template>

<script>
import foryou from './components/foryou'
import hBanner from './components/hBanner'
import hsearch from './components/hsearch'
import hCate from './components/hCate'
import dyard from './components/dyard'
import gdaily from './components/gdaily'
import jdspike from './components/jdspike'
export default {
  components: {
    foryou,
    hBanner,
    hsearch,
    hCate,
    dyard,
    gdaily,
    jdspike
  },
  data () {
    return {
      scrolly: 0
    }
  },
  created () {
    var that = this
    document.body.onscroll = function () {
      that.scrolly = this.scrollY
    }
  }
}
</script>
<style scoped lang='less'>
</style>
