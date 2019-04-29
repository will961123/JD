<template>
  <div class="h_cate">
    <ul class="cate_list">
      <li v-for="(item, index) in cateList" :key="index">
        <img :src="item.img">
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="cate_news">
      <img :src="jdImg">
      <ul>
        <li class="ellipsis">推荐：华为p30pro 元件成本曝光</li>
      </ul>
      <span class="news_more">更多</span>
    </div>
  </div>
</template>

<script>
import { gethCate } from '@/api'
export default {
  data () {
    return {
      cateList: [],
      jdImg:
        '//m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg'
    }
  },
  async created () {
    this.cateList = await gethCate()
  }
}
</script>

<style lang="less" scoped>
.h_cate {
  width: 100%;
  background: white;
  .cate_list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20%;
      img {
        width: 80px;
        margin-top: 20px;
      }
      span {
        display: block;
        margin-top: 12px;
        font-size: 12px; /*px*/
        color: #666;
      }
    }
  }
  .cate_news {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    img {
      width: 146px;
      margin-left: 20px;
    }
    ul {
      margin-left: 16px;
      width: 500px;
      color: #181818;
      li {
        width: 100%;
      }
    }
    .news_more {
      font-size: 12px;
      color: #181818;
    }
  }
}
.ellipsis {
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
</style>
