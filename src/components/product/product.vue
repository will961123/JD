<template>
<div>
 <h1>商品详情</h1>
 <h2 @click="goBack">返回</h2>
 <!-- bannner图 -->
 <pBanner></pBanner>
 <!-- 价格区 -->
 <price></price>
 <!-- 自营标题 -->
 <ziying></ziying>
 <!-- 领券 -->
 <lingquan></lingquan>
</div>

</template>

<script>
import pBanner from './pBanner.vue'
import price from './price.vue'
import ziying from './ziying.vue'
import lingquan from './lingquan.vue'
export default {
  mounted () {
    this.$store.dispatch('changeShowFooter', false)
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.dispatch('changeShowFooter', true)
    }
  },
  components: {
    pBanner,
    price,
    ziying,
    lingquan
  }
}
</script>

<style lang="less" scoped>

</style>
