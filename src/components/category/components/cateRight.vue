<template>
  <div ref="myRight" class="cateRight">
    <div v-for="(item, index) in contentList" :key="index" class="cateOne">
      <h4>{{item.title}}</h4>
      <ul class="cateOneUl">
        <li v-for="(list, indexs) in item.content" :key="indexs">
          <a href="javascript:;">
            <img :src="list.img" :alt="list.name">
          </a>
          <span>{{list.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getcateRight } from '@/api'
export default {
  data () {
    return {
      contentList: []
    }
  },
  async created () {
    this.contentList = (await getcateRight())[this.$store.state.currentIndex]
  }
}
</script>

<style lang="less" scoped>
.cateRight {
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: auto;
  .cateOne {
    margin: 40px 14px 0 14px;
    h4 {
      font-size: 28px;
      color: #333;
    }
    .cateOneUl {
      width: 100%;
      padding: 17px 20px 0 20px;
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;
      box-sizing: border-box;
      li {
        width: 33%;
        // text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 140px;
          height: 140px;
          // display: block;
          // margin: 0 auto;
        }
      }
    }
  }
}
</style>
