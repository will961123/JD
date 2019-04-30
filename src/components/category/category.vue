<template>
  <div class="category">
    <catesearch></catesearch>
    <!-- 左边列表栏部分 -->
    <cateleft></cateleft>
    <div class="rightbox">
      <cateright></cateright>
    </div>
  </div>
</template>

<script>
import catesearch from './components/Catesearch'
import cateleft from './components/cateleft'
import cateright from './components/cateRight'
export default {
  components: {
    catesearch,
    cateleft,
    cateright
  }
}
</script>

<style lang="less" scoped>
.category {
  height: 100%;
  width: 100%;
  .rightbox {
    height: calc(100% - 190px);
    width: calc(100% - 170px);
    overflow: hidden;
  }
}
</style>
