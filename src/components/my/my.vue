<template>
  <div class="my">
    <mHeader></mHeader>
    <foryou></foryou>
  </div>
</template>

<script>
import mHeader from './components/mHeader'
import foryou from './components/foryou'
export default {
  components: {
    mHeader,
    foryou
  }
}
</script>

<style lang="less" scoped>
.my{
  padding-bottom: 200px;
}
</style>
