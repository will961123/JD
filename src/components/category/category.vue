<template>
    <div class="category">
        <catesearch></catesearch>
        <!-- 左边列表栏部分 -->
        <cateleft></cateleft>
        <!-- 右边运动 -->
        <Outsports></Outsports>
    </div>
</template>

<script>
import catesearch from './components/Catesearch'
import cateleft from './components/cateleft'
import Outsports from './components/Outsports'
export default {
  components: {
    catesearch,
    cateleft,
    Outsports
  }
}
</script>

<style lang="less" scoped>

</style>
