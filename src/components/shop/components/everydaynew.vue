<template>
  <div class="everydaynew">
    <div class="top">
      <p>每日好货上新</p>
      <span>天天拼便宜</span>
    </div>
    <div class="section" v-for="(item,index) in list" :key="index">
      <ul>
        <li v-for="(items,indexs) in item.ware" :key="indexs">
          <div class="left">
            <img v-lazy="items.img" alt>
          </div>
          <div class="right">
            <p class="name">{{items.name}}</p>
            <div class="tag">
              <span>{{items.tag1}}</span>
              <span>{{items.tag2}}</span>
            </div>
            <div class="price">
              <i>2人拼</i>
              <span>
                ￥
                <em>{{items.int}}</em>.
                <i>{{items.dec}}</i>
              </span>
            </div>
            <span>以拼{{items.person}}件</span>
            <button>去开团</button>
          </div>
        </li>
      </ul>
      <div class="banner" v-for="(itemx,indexx) in item.banner" :key="indexx">
        <div class="bimg">
          <img v-lazy="itemx.img" alt>
        </div>
        <ul>
          <li v-for="(itema,indexa) in itemx.everyB" :key="indexa">
            <img v-lazy="itema.img" alt>
            <h2>{{itema.dis}}</h2>
            <div class="price">
              <i>2人拼</i>
              <span>
                ￥
                <em>{{itema.priceint}}</em>.
                <i>{{itema.pricedec}}</i>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getEverydaynew } from '@/api/index.js'
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    this.list = await getEverydaynew()
    // console.log(getEverydaynew())
  }
}
</script>

<style lang="less" scoped>
.everydaynew {
  width: 100%;
  padding-bottom: 100px;
  .top {
    height: 144px;
    text-align: center;
    box-sizing: border-box;
    padding: 20px 0;
    p {
      font-size: 35px;
    }
    span {
      font-size: 26px;
      color: #999;
    }
  }
  .section {
    ul {
      li {
        display: flex;
        width: 100%;
        height: 322px;
        position: relative;
        .left {
          width: 317px;
          height: 317px;
          img {
            display: block;
            width: 100%;
          }
        }
        .right {
          padding-left: 30px;
          padding-top: 30px;
          box-sizing: border-box;
          width: 410px;
          .name {
            width: 380px;
            height: 82px;
            font-size: 28px;
            margin-right: 30px;
            margin-bottom: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .tag {
            height: 32px;
            line-height: 32px;
            span {
              width: 96px;
              height: 32px;
              padding: 0 12px;
              margin-right: 10px;
              background-color: #f7f7f7;
            }
          }
          .price {
            margin-top: 60px;
            height: 51px;
            span {
              color: red;
              width: 60px;
              font-weight: 700;
              em {
                font-size: 36px;
              }
            }
          }
          span {
            color: #999;
          }
          button {
            position: absolute;
            width: 144px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            background: linear-gradient(90deg, #e93b3d, #ff9474);
            box-shadow: 0 0.15rem 0.3rem rgba(233, 59, 61, 0.2);
            border: none;
            border-radius: 28px;
            right: 44px;
            bottom: 30px;
            color: #fff;
          }
        }
      }
    }
    .banner {
      width: 100%;
      .bimg {
        position: relative;
        img {
          width: 100%;
          display: block;
        }
        &::after {
          content: "";
          position: absolute;
          border: 10px solid transparent;
          border-bottom: 10px solid #fff;
          bottom: 0;
          left: 50%;
          margin-left: -4px;
        }
      }
      ul {
        width: 100%;
        height: 363px;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        li {
          width: 216px;
          height: 312px;
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            height: 216px;
          }
          h2 {
            margin-top: 14px;
            font-weight: 400;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 24px;
            line-height: 36px;
          }
          .price {
            line-height: 1.5;
            text-align: center;
            color: #e93b3d;
            height: 48px;
            span {
              color: red;
              width: 60px;
              font-weight: 700;
              em {
                font-size: 36px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
