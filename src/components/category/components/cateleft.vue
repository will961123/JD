<template>
    <div class="cate">
        <div class="cateleft wrapper" ref="top">
            <ul classs="ful content" ref="ul">
                <li v-for="(item,index) in cateList" :style="{height:liHeight+'px'}" :key="index" @click="changestatus(index)" :class="{active:index===currentIndex}">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {getCate} from '@/api/index.js'
export default {
  data () {
    return {
      cateList: null,
      currentIndex: 0,
      liHeight: 46,
      timer: null

    }
  },
  async mounted () {
    this.cateList = await getCate()
  },
  methods: {
    // 点击的li字体样式
    changestatus (index) {
      // 触发vuex的修改数据方法
      this.$store.dispatch('change', index)
      // 打印vuex index
      console.log(this.$store.state.currentIndex)

      if (this.index === 8 && index > 8) {
        return
      }
      this.currentIndex = index
      if ((this.cateList.length * this.liHeight - this.$refs.top.scrollTop) > this.$refs.top.offsetHeight) {

      } else {
        return
      }
      // 目标值target  初始值header=0
      var target = this.currentIndex * this.liHeight
      var header = 0
      // 每次开始先清除定时器,以免影响计算
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        header = header + (target - header) / 10
        if (header > target - 2) {
          clearInterval(this.timer)
        }
        // div向上缩进到的位置，直到为0为止
        this.$refs.top.scrollTop = header
      }, 10)
    }

  }
}
</script>
<style scoped lang="less">
.cate{
    height:calc(100% - 206px);
    float: left;
}
.cateleft{
    width: 170px;
    height:100%;
    overflow: hidden;
    overflow-y:auto;
    ul{
        width:100%;

        li{
            width: 100%;
            height: 92px;
            font-size: 28px;
            line-height: 92px;
            text-align: center;
            color: #333;
            &.active{
                color: #e87f77;
                background:white;
            }
        }
    }
}
</style>
