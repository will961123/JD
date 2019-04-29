<template >
  <div class="home">
    <!-- 头部搜索框 -->
    <hsearch></hsearch>
    <!-- 头部轮播 -->
    <hBanner></hBanner>
    <!-- 头部分类-->
    <hCate></hCate>

    <foryou></foryou>

  </div>
</template>

<script>
import foryou from './components/foryou'
import hBanner from './components/hBanner'
import hsearch from './components/hsearch'
import hCate from './components/hCate'
export default {
  components: {
    foryou,
    hBanner,
    hsearch,
    hCate
  }
}
</script>

<style scoped lang='less'>

</style>
