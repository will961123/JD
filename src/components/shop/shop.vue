<template>
  <div class="shop">
    <!-- 头部更多 -->
    <sHeader></sHeader>
    <!-- 头部banner -->
    <sBanner></sBanner>
    <!-- 每日上新 -->
    <everydaynew></everydaynew>
  </div>
</template>

<script>
import sHeader from './components/sHeader'
import sBanner from './components/sBanner'
import everydaynew from './components/everydaynew'
export default {
  components: {
    sHeader,
    sBanner,
    everydaynew
  }
}
</script>

<style lang="less" scoped>
.shop{
  background: white
}
</style>
