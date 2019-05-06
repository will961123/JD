<template>
  <div class="my">
    <p @click="changeStore">点我</p>
    <mHeader></mHeader>
    <div class="alrady" v-if="$store.state.myShow.main">
      <myAlidyMain></myAlidyMain>
    </div>
  </div>
</template>

<script>
import mHeader from './components/mHeader'
import myAlidyMain from './components/myAlidyMain'
export default {
  data () {
    return {
      myshow: {}
    }
  },
  components: {
    mHeader,
    myAlidyMain
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
</style>
