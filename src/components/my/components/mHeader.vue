<template>
  <div>
    <div class="headerBox">
      <span @click="$router.go(-1)" class="fanhui"></span>
      <p>我的京东</p>
      <span class="more"></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.headerBox {
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 24px;
  height: 88px;
  font-size: 32px;
  color: #333;
  line-height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(207, 204, 204); /* no */
  background: white;
  span {
    display: block;
    width: 40px;
    height: 40px;
    background-size: cover;
  }
  .fanhui {
    background: url(../images/fanhui.png) no-repeat;
  }
  .more {
    background: url(../images/more.png) no-repeat;
  }
}
</style>
