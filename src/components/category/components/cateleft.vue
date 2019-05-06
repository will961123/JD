<template>
    <div class="cate">
        <div class="cateleft wrapper" ref="mytop">
            <ul classs="ful content" ref="myul">
                <li ref="myli" v-for="(item,index) in cateList" :style="{height:liHeight+'px'}" :key="index" @click="changestatus(index)" :class="{active:index===currentIndex}">
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

      /* 如果点击的索引就是this.currentIndex 停止滚动 */
      if (index === this.currentIndex) {
        // console.log('是当前索引值 停止滚动')

        return
      }
      /* 判断是否滚动 总长度-滚动上去的高度=设备高度 停止 */
      if (
        this.$refs.myul.offsetHeight - this.$refs.mytop.scrollTop <=
        this.$refs.mytop.offsetHeight
      ) {
        // console.log(this.$refs.myul.offsetHeight, this.$refs.mytop.scrollTop)
        this.$refs.myli.className = 'active'
        return
      }

      this.currentIndex = index
      /* 滚动动画公式 target目标值 header当前值（每一毫秒的） */
      var target = this.currentIndex * this.$refs.myli[0].offsetHeight
      var header = this.$refs.mytop.scrollTop
      clearInterval(this.timer)

      this.timer = setInterval(() => {
        header = header + (target - header) / 10
        this.$refs.mytop.scrollTop = header
        if (header > target - 1) {
          clearInterval(this.timer)
        }
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
