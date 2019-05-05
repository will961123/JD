<template>
  <div class="shop">
    <!-- 头部更多 -->
    <sHeader></sHeader>
    <!-- 头部banner -->
    <sBanner></sBanner>

    <!--今日必拼-->
    <sTodayBuy/>
  </div>
</template>

<script>
import sHeader from './components/sHeader'
import sBanner from './components/sBanner'
import sTodayBuy from './components/sTodayBuy'
export default {
  components: {
    sHeader,
    sBanner,
    sTodayBuy
  }
}
</script>

<style lang="less" scoped>
.shop{
  background: white
}
</style>
