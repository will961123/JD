<template>
  <div>
    <bheaderTop></bheaderTop>
    <!-- 新人福利 -->
    <div v-show="neddload">
      <bHeader></bHeader>
      <welfare></welfare>
      <miaosha></miaosha>
      <want></want>
    </div>
    <div v-show="!neddload">
      <alrady></alrady>
    </div>
  </div>
</template>

<script>
import bheaderTop from './components/bheaderTop'
import bHeader from './components/bHeader'
import welfare from './components/welfare'
import miaosha from './components/miaosha'
import want from './components/want'
import alrady from './components/balrady/balrady'
export default {
  components: {
    bheaderTop,
    bHeader,
    welfare,
    miaosha,
    want,
    alrady
  },
  data () {
    return {
      neddload: true
    }
  },
  created () {
    this.neddload = this.$store.state.myShow.load
  },
  watch: {
    '$store.state.myShow.load': function (newval, oldval) {
      this.neddload = newval
    }
  }
}
</script>

<style lang="less" scoped>
</style>
