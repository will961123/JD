<template>
  <div class="my">
    <mHeader></mHeader>
    <foryou></foryou>
    <userInfo></userInfo>
  </div>
</template>

<script>
import mHeader from './components/mHeader'
import foryou from './components/foryou'
import userInfo from './components/userInfo'
export default {
  components: {
    mHeader,
    foryou,
    userInfo
  }
}
</script>

<style lang="less" scoped>
.my{
  padding-bottom: 200px;
}
</style>
