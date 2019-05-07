<template>
<div>
  <topnav :s="scrolly"></topnav>
  <bottom></bottom>
  <evaluation></evaluation>
</div>

</template>

<script>
import topnav from '@/components/product/components/topnav.vue'
import bottom from '@/components/product/components/bottom.vue'
import evaluation from '@/components/product/evaluation'
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
    topnav, bottom, evaluation
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
