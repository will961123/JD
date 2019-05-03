<template>
  <div class="shop">
    <!-- 头部更多 -->
    <sHeader></sHeader>
    <!-- 头部banner -->
    <sBanner></sBanner>
  </div>
</template>

<script>
import sHeader from './components/sHeader'
import sBanner from './components/sBanner'
export default {
  components: {
    sHeader,
    sBanner
  }
}
</script>

<style lang="less" scoped>
.shop{
  background: white
}
</style>
