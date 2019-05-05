<template>
  <div class="shop">
    <!-- 头部更多 -->
    <sHeader></sHeader>
    <!-- 头部banner -->
    <sBanner></sBanner>
    <!-- 名品特卖 -->
    <specialSale></specialSale>
  </div>
</template>

<script>
import sHeader from './components/sHeader'
import sBanner from './components/sBanner'
import specialSale from './components/specialSale'
export default {
  components: {
    sHeader,
    sBanner,
    specialSale
  }
}
</script>

<style lang="less" scoped>
.shop{
  background: white
}
</style>
