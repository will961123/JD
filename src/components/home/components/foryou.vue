<template>
  <div class="foryou">
    <img
      src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
      alt
    >
    <ul class="every">
      <li v-for="(item,index) in ware" :key="index">
        <img v-lazy="item.img" alt>
        <p>{{item.infor}}</p>
        <span class="price">￥{{item.price}}</span>
        <span class="similar">{{item.similar}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { gethForyou } from '@/api'
export default {
  data () {
    return {
      ware: []
    }
  },
  async created () {
    this.ware = await gethForyou()
  }
}
</script>
<style lang="less" scoped>
.foryou {
  width: 100%;
  background: #f0f2f5;
  > img {
    width: 100%;
    display: block;
  }
  .every {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
    li {
      width: 350px;
      height: 510px;
      box-sizing: border-box;
      background-color: white;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
      p {
        box-sizing: border-box;
        height: 62px;
        font-size: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        color: #232326;
        margin-top: 10px;
        line-height: 32px;
        margin-bottom: 10px;
        padding: 0 8px;
      }
      .price {
        margin-left: 8px;
        color: red;
        font-size: 32px;
        float: left;
        line-height: 50px;
      }
      .similar {
        float: right;
        margin-right: 20px;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
}
</style>
