<template>
  <div>
    <bHeader></bHeader>
    <!-- 新人福利 -->
    <welfare></welfare>
    <miaosha></miaosha>
    <want></want>
  </div>
</template>

<script>
import bHeader from "./components/bHeader";
import welfare from "./components/welfare";
import miaosha from "./components/miaosha";
import want from "./components/want";
export default {
  components: {
    bHeader,
    welfare,
    miaosha,
    want
  }
};
</script>

<style lang="less" scoped>
</style>
