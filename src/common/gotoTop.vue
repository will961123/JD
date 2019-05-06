<template>
  <a v-show="show" class="gotop" @click="goT" href="javascript: void(0);">
    <i class="iconfont icon-gototop"></i>
  </a>
</template>

<script>

export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 650) {
        this.show = true
      } else {
        this.show = false
      }
    },
    goT () {
      window.scroll(0, 0)
    }

  }
}
</script>

<style lang="less" scoped>
.gotop {
  position: fixed;
  bottom: 160px;
  right: 35px;
  width: 76px;
  height: 76px;
  z-index: 99;
  i {
    font-size: 76px;
    color: red;
  }
}
</style>
