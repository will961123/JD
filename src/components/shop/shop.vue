<template>
  <div class="shop">
    <!-- 头部更多 -->
    <sHeader></sHeader>
    <!-- 头部banner -->
    <sBanner></sBanner>
    <shopHot></shopHot>
    <!--今日必拼-->
    <sTodayBuy></sTodayBuy>
  </div>
</template>
<script>
import sHeader from './components/sHeader'
import sBanner from './components/sBanner'
import sTodayBuy from './components/sTodayBuy'
import shopHot from './components/shopHot'
export default {
  components: {
    sHeader,
    sBanner,
    sTodayBuy,
    shopHot
  }
}
</script>

<style lang="less" scoped>
.shop{
  background: white
}
</style>
