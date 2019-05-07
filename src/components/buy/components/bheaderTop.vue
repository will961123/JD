<template>
    <div class="headerBox">
      <span class="fanhui" @click="$router.go(-1)"></span>
      <p>购物车</p>
      <span class="more"></span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      changePosition: 0
    }
  },
  created () {
    var tant = this
    document.body.onscroll = function () {
      tant.changePosition = (this.scrollY)
    }
  }
}
</script>

<style lang="less" scoped>
.headerBox {
  background: white;
  position: fixed;
  z-index: 9;
  top: 0;
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
