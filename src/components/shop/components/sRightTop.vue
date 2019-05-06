<template>
  <div class="rightTop">
    <ul class="rightUl">
      <li class="rightLi" v-for="(item, index) in imgList" :key="index">
        <img :src="item.img" :alt="item.id">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getRightTop} from '@/api'
export default {
  data () {
    return {
      imgList: []
    }
  },
  watch: {
    '$store.state.shopListIndex': function (newval, oldval) {
      getRightTop().then(data => {
        this.imgList = (data[newval])
      })
    }
  }
}
</script>

<style lang='less' scoped>
.rightUl{
    display: flex;
    padding-top: 40px;
    .rightLi{
        flex: 1;
        padding-bottom: 32px;
        img{
            width: 90px;
            height: 90px;
            display: block;
            margin: 0 auto;
            margin-bottom: 10px;
        }
        p{
            text-align: center;
            color: #666;
            font-size: 24px;
        }
    }
}
</style>
