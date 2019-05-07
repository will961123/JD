<template>
  <div>
    <div class="bus">
      <img src="../images/gouwuche.png">
      <div class="tongbu">登录后可同步购物车中商品</div>
      <div class="login">
        <router-link tag="span" to="/my">
          <span>登录</span>
        </router-link>
      </div>
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
.bus {
  text-align: center;
  padding: 60px 0 30px;
  img {
    width: 180px;
    height: 180px;
  }
  .tongbu {
    font-size: 32px;
    color: rgba(51, 51, 51, 0.66);
    line-height: 48px;
    margin: 22px 0;
  }
  .login {
    width: 120px;
    height: 60px;
    border: 2px solid #e93b3d;
    color: #e93b3d;
    font-size: 28px;
    line-height: 60px;
    border-radius: 8px;
    margin: 0 auto;
  }
}
</style>
