<template>
    <div>
        <bHeader></bHeader>
        <!-- 新人福利 -->
        <welfare></welfare>
        <miaosha></miaosha>
    </div>
</template>

<script>
import bHeader from './components/bHeader'
import welfare from './components/welfare'
import miaosha from './components/miaosha'
export default {
  components: {
    bHeader,
    welfare,
    miaosha
  }
}
</script>

<style lang="less" scoped>

</style>
