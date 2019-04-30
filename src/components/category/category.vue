<template>
    <div class="category">
        <catesearch></catesearch>
        <!-- 左边列表栏部分 -->
        <cateleft></cateleft>
    </div>
</template>

<script>
import catesearch from './components/Catesearch'
import cateleft from './components/cateleft'
export default {
  components: {
    catesearch,
    cateleft
  }
}
</script>

<style lang="less" scoped>

</style>
