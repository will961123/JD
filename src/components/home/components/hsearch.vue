<template>
  <div class="head">
    <img class="img1" src="../images/menu.png">
    <div class="searchbox">
      <img class="jd" src="../images/jingdong.png">
      <img class="search" src="../images/search.png">
      <input type="text" placeholder="电子琴">
    </div>
    <div class="login">
      <p>登录</p>
    </div>
  </div>
</template>
<style scoped>
.head {
  position: fixed;
  z-index: 2;
  top: 0;
  height: 88px;
}
.head .img1 {
  margin: 28px 0 0 30px;
}
.searchbox {
  display: flex;
  position: relative;
  top: -50px;
  left: 120px;
}
.searchbox .jd {
  width: 40px;
  height: 35px;
  position: absolute;
  top: 15px;
  left: 30px;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid #999;
}
.searchbox .search {
  position: absolute;
  top: 18px;
  left: 100px;
  width: 30px;
  height: 30px;
}
.searchbox input {
  height: 60px;
  padding-left: 136px;
  padding-right: 20px;
  border-radius: 40px;
  border: 2px solid red;
}
.head .login {
  position: absolute;
  right: -210px;
  top: 26px;
  font-size: 30px;
  color: white;
}
</style>
