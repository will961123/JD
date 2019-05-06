<template>
  <div class="foryou">
    <div class="foryoutop">
      <hr>
      <span>为您推荐</span>
    </div>
    <ul class="allshop">
      <li class="everyshop" v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt>
        <p>{{item.dis}}</p>
        <div class="priceinfo">
          <span v-show="item.pin">2人拼</span>
          <span>
            ￥
            <em>{{parseInt(item.price)}}</em>
            <i>{{((item.price+'').split(parseInt(item.price+'')))[1]}}</i>
          </span>
          <div v-show="item.sub" class="sub">{{item.sub}}</div>
          <span b-show="item.useq" class="useq">{{item.useq}}</span>
        </div>
         <div v-show="item.single" class="single">单价买 ￥{{item.single}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getMyforyou } from '@/api'
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    console.log(getMyforyou())
    this.list = await getMyforyou()
  }
}
</script>

<style lang="less" scoped>
.foryou {
  width: 100%;
  .foryoutop {
    width: 100%;
    height: 84px;
    background: rgb(247, 247, 247);
    position: relative;
    box-sizing: border-box;
    padding: 30px;
    text-align: center;
    hr {
      width: 94%;
      margin: 0px;
      height: 1px;
      border: 0px;
      background-color: #d5d5d5;
      color: #d5d5d5;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    span {
      position: relative;
      z-index: 2;
      padding: 0 30px;
      top: -5px;
      background: rgb(247, 247, 247);
      color: rgb(153, 153, 153);
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -4px;
        left: 0;
        width: 8px;
        height: 8px;
        background-color: #ccc;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        background-color: #ccc;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
  .allshop {
    width: 100%;
    background: #f7f7f7;
    overflow: hidden;
    padding-bottom: 100px;
    li {
      width: 50%;
      float: left;
      box-sizing: border-box;
      padding: 30px 30px 0;
      margin-bottom: 2px;
      background: #fff;
      height: 526px;
      &:nth-child(2n) {
        float: right;
        margin-right: -2px;
      }
      img {
        width: 100%;
      }
      p {
        margin: 20px 0 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .priceinfo {
        margin-top: 10px;
        overflow: hidden;
        color: #e93b3d;
        display: flex;
        align-items: center;
        .useq {
          font-size: 10px;
          color: #000;
        }
        span {
          color: red;
          margin-right: 8px;
          line-height: 40px;
          em {
            font-size: 32px;
          }
        }
        .sub {
          border: 1px solid red;
          display: inline-block;
          padding: 0 6px;
          font-size: 10px;
          height: 29px;
          line-height: 29px;
          margin-right: 8px;
        }

      }
      .single {
          color: #999;
          text-decoration: line-through;
          line-height: 36px;
          clear: both;
        }
    }
  }
}
</style>
