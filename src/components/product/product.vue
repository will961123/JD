<template>
<div>
 <h1>商品详情</h1>
 <h2 @click="goBack">返回</h2>
</div>

</template>

<script>
export default {
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
