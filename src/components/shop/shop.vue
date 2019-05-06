<template>
  <div class="shop">
    <!-- 头部搜索框&分类 -->
    <sHeader></sHeader>

    <div class="jingxuan" v-show="isShow===-1">
      <!-- 精选banner -->
    <sBanner></sBanner>
      <!-- 精选-分类 -->
      <shopHot></shopHot>
      <!--精选-今日必拼-->
      <sTodayBuy></sTodayBuy>
      <!-- 精选-名品特卖 -->
      <specialSale></specialSale>
      <!-- 精选-每日上新 -->
      <everydaynew></everydaynew>
    </div>
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
  },
  data () {
    return {
      isShow: -1
    }
  },
  watch: {
    '$store.state.shopListIndex': function (nval, oval) {
      this.isShow = nval
    }
  }
}
</script>

<style lang="less" scoped>
.shop {
  background: white;
}
</style>
