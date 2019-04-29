<template >
  <div class="home">
    <!-- 头部搜索框 -->
    <hsearch></hsearch>
    <!-- 头部轮播 -->
    <hBanner></hBanner>
    <!-- 头部分类-->
    <hCate></hCate>
    <!-- 东家小院 -->
    <dyard></dyard>
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
export default {
  components: {
    foryou,
    hBanner,
    hsearch,
    hCate,
    dyard
  }
}
</script>

<style scoped lang='less'>

</style>
