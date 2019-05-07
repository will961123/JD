<template>
  <div class="head" :style="s>10?'background:#e43130':'background:none'">
    <img class="img1" src="../images/menu.png">
    <div class="searchbox">
      <img class="jd" src="../images/jingdong.png">
      <img class="search" src="../images/search.png">
      <input type="text" placeholder="电子琴">
    </div>
    <div class="login">
      <router-link tag="p" to="my">
        <p v-if="needload">登录</p>
      </router-link>
      <p v-if="!needload" @click="changeLoad">退出</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['s'],
  data () {
    return {
      isSHow: 0,
      needload: true
    }
  },
  methods: {
    changeLoad () {
      this.$store.dispatch('changeMyshow', 'main')
      location.reload()
    }
  },
  watch: {
    '$store.state.myShow.main': function (newval, oldval) {
      console.log(222)
      this.myshow = newval
    }
  },
  created () {
    this.needload = this.$store.state.myShow.load
  }
}
</script>

<style scoped>
.head {
  position: fixed;
  z-index: 2;
  top: 1px;
  height: 104px;
  z-index: 2;
  width: 100%;
  background: #e43130;
}
.head .img1 {
  margin: 28px 0 0 30px;
}
.searchbox {
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
  top: 13px;
  left: 100px;
  width: 30px;
  height: 30px;
}
.searchbox input {
  height: 60px;
  padding-left: 136px;
  padding-right: 20px;
  border-radius: 40px;
}
.head .login {
  position: relative;
  top: 26px;
  font-size: 30px;
  color: white;
  z-index: 10;
  top: -108px;
  left: 640px;
}
</style>
