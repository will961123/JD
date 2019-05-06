<template>
  <div class="rightMain">
    <ul class="mainUl">
      <li v-for="(item, index) in contentList" :key="index" class="mainLi">
        <img class="titleImg" v-lazy="item.img">
        <div class="info">
          <p class="titleName">{{item.titleName}}</p>
          <div class="price">
            <span class="people">{{item.people}}人拼</span>
            <span class="solid">
              ￥
              <span class="first">{{parseInt(item.solid)}}</span>
              <span>{{((item.solid).split(parseInt(item.solid)))[1]}}</span>
            </span>
            <span class="new" v-show="item.new">新人专享</span>
          </div>
          <p class="solidSum">已拼{{item.solidSum}}件</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRightMain } from '@/api'
export default {
  data () {
    return {
      contentList: []
    }
  },
  watch: {
    '$store.state.shopListIndex': function (newval, oldval) {
      getRightMain().then(data => {
        this.contentList = data[newval]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.rightMain {
  padding-bottom: 100px;
}
.mainUl {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background: #f7f7f7;
  .mainLi {
    width: calc(50% - 4px);
    background: white;
    box-sizing: border-box;
    float: left;
    margin-right: 8px;
    margin-bottom: 8px;
    .titleImg {
      width: 100%;
      height: 100%;
    }
    .info {
      padding: 14px 20px;
      .titleName {
        font-size: 24px;
        line-height: 1.5em;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        text-overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        margin-bottom: 8px;
      }
      .price {
        display: flex;
        align-items: center;
        height: 52px;
        .people {
          color: white;
          font-size: 20px;
          padding: 0 12px;
          display: inline-block;
          height: 28px;
          line-height: 28px;
          background: linear-gradient(90deg, #e93b3d, #fe9373);
          border-radius: 14px 0 14px 14px;
        }
        .solid {
          color: red;
          font-size: 24px;
          font-weight: 700;
          margin: 0 16px 0 20px;
          .first {
            font-size: 36px;
          }
        }
        .new {
          color: #ee974a;
          border: 1px solid #ee974a;
          height: 28px;
          padding: 0 6px;
          font-size: 20px;
        }
      }
      .solidSum {
        color: #999;
        font-size: 24px;
        padding-top: 5px;
      }
    }
  }
  .mainLi:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
