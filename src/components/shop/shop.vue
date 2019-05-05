<template>
  <div class="shop">
    <!-- 头部更多 -->
    <sHeader></sHeader>
    <!-- 头部banner -->
    <sBanner></sBanner>
    <shopHot></shopHot>
    <!--今日必拼-->
    <sTodayBuy></sTodayBuy>
    <!-- 名品特卖 -->
    <specialSale></specialSale>
    <!-- 每日上新 -->
    <everydaynew></everydaynew>
  </div>
</template>
<script>
import sHeader from './components/sHeader'
import sBanner from './components/sBanner'
import everydaynew from './components/everydaynew'
import sTodayBuy from './components/sTodayBuy'
import specialSale from './components/specialSale'
import shopHot from './components/shopHot'
export default {
  components: {
    sHeader,
    sBanner,
    everydaynew,
    sTodayBuy,
    specialSale,
    shopHot
  }
}
</script>

<style lang="less" scoped>
.shop{
  background: white
}
</style>
