<template>
<div>
  <topnav :s="scrolly"></topnav>
  <pBanner></pBanner>
  <price></price>
  <ziying></ziying>
  <lingquan></lingquan>
  <bottom></bottom>
  <evaluation></evaluation>
</div>

</template>

<script>
import pBanner from '@/components/product/components/pBanner.vue'
import price from '@/components/product/components/price.vue'
import ziying from '@/components/product/components/ziying.vue'
import lingquan from '@/components/product/components/lingquan.vue'
import topnav from '@/components/product/components/topnav.vue'
import bottom from '@/components/product/components/bottom.vue'
import evaluation from '@/components/product/components/evaluation.vue'
export default {
  data () {
    return {
      scrolly: 0
    }
  },
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
    topnav, bottom, evaluation, pBanner, price, ziying, lingquan
  },
  created () {
    var that = this
    document.body.onscroll = function () {
      that.scrolly = this.scrollY
    }
  }
}
</script>

<style lang="less" scoped>

</style>
