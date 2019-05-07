<template>
  <div class="my">
    <div class="load" v-if="$store.state.myShow.load">
      <login></login>
    </div>
    <div class="alrady" v-if="$store.state.myShow.main">
      <mHeader></mHeader>
      <userInfo></userInfo>
      <myAlidyMain></myAlidyMain>
      <foryou></foryou>
    </div>

  </div>
</template>

<script>
import mHeader from './components/mHeader'
import myAlidyMain from './components/myAlidyMain'
import foryou from './components/foryou'
import userInfo from './components/userInfo'
import login from './components/login'
export default {
  data () {
    return {
      myshow: {}
    }
  },
  components: {
    mHeader,
    myAlidyMain,
    foryou,
    userInfo,
    login
  },
  watch: {
    '$store.state.myShow.main': function (newval, oldval) {
      this.myshow = newval
    }
  },
  methods: {
    changeStore () {
      this.$store.dispatch('changeMyshow', 'main')
    }

  }
}
</script>

<style lang="less" scoped>
.my{
  height: 100%;
}
.load{
  height: 100%;
}
</style>
