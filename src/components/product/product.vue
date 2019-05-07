<template>
<div>
 <h1>商品详情</h1>
 <h2 @click="goBack">返回</h2>
 <evaluation></evaluation>
</div>

</template>

<script>
import evaluation from '@/components/product/evaluation'
export default {
  components: {
    evaluation
  },
  mounted () {
    this.$store.dispatch('changeShowFooter', false)
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.dispatch('changeShowFooter', true)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
