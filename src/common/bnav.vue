<template>
  <div class="Bnav">
    <ul class="bnav">
      <router-link tag="li" to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" to="/category">
        <i class="iconfont icon-cate"></i>
        <span>分类</span>
      </router-link>
      <router-link tag="li" to="/shop">
        <i class="iconfont icon-shop"></i>
        <span>拼购</span>
      </router-link>
      <router-link tag="li" to="/buy">
        <i class="iconfont icon-buy"></i>
        <span>购物车</span>
      </router-link>
      <router-link tag="li" to="/my">
        <i class="iconfont icon-mine"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<style  scoped>
.Bnav{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
    background-color: #FFFFFF;
    z-index: 99;
}
.bnav {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
}
.bnav li {
  flex: 1;
  text-align: center;

  display: flex;
  flex-direction: column;
}
.bnav li i {
  color: #8e9298;
  font-size: 50px;
  display: block;
}

.router-link-active {
  color: red;
}
.router-link-active i {
  color: red !important;
}
</style>
