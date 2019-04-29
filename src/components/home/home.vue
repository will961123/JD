<template >
  <div class="home">
    <!-- 头部轮播 -->
    <hsearch></hsearch>
    <hBanner></hBanner>
    <hCate></hCate>
    <div class="aaa"></div>
  </div>
</template>

<script>
import hBanner from './components/hBanner'
import hsearch from './components/hsearch'
import hCate from './components/hCate'
export default {
  components: {
    hBanner,
    hsearch,
    hCate
  }
}
</script>

<style scoped lang='less'>

</style>
