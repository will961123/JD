<template>
  <div class="alradytop">
    <div class="dizhibox">
      <div class="dingwei">
        <span class="img">
          <img src="../images/dingwei.png" alt>
        </span>
        郑州市高新区
      </div>
      <p>编辑商品</p>
    </div>

    <div class="list" v-for="(item, index) in contentList" :key="index">
      <div class="dianpuInfo">
        <div class="title">
          <span class="select"></span>
          <span class="icao">
            <img src="../images/house.png">
          </span>
          <span class="name">{{item.title.name}}</span>
        </div>
        <p class="youhui" v-show="item.title.youhui">优惠卷</p>
      </div>

      <div class="shangpinInfo">
        <div class="top">
          <span class="youhuii">{{item.title.manjian}}</span>
          <span class="dazhe">{{item.title.tip}}</span>
          <span class="qucoudan">去凑单</span>
        </div>
        <div class="main">
          <span class="select"></span>
          <div class="jieshao">
            <div class="imgbox">
              <img :src="item.main.imgbox.img" alt>
              <p v-show="item.main.imgbox.fenqi">白条支付3期免息</p>
              <div class="shangpinselect"></div>
            </div>
            <div class="solid">
              <div class="name">
                <span>
                  <img :src="item.main.xinxi.nameimg" alt>
                  {{item.main.xinxi.name}}
                </span>
              </div>
              <div class="xinghao">
                <span>{{item.main.xinxi.guige}}</span>
              </div>
              <div class="number">
                <div class="mony">
                  ￥
                  <span class="zhengshu">{{parseInt(item.main.xinxi.mony)}}.</span>
                  {{(item.main.xinxi.mony).split('.')[1]}}
                </div>
                <div class="shuliang">
                  <div class="ntop">
                    <span class="jian">-</span>
                    <span class="num">{{item.main.number}}</span>
                    <span class="jia">+</span>
                  </div>
                </div>
              </div>
              <div class="shanchu">
                <span>移入关注</span>
                <span>删除</span>
              </div>
            </div>
            <div class="chuxiaoList">
              <ul>
                <li v-for="(items, index) in item.main.list" :key="index">
                  <span class="chuxiao">{{items.name}}</span>
                  <span class="dazhe">{{items.content}}</span>
                  <span v-show="items.more.isShow">{{items.more.content}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShopAlradyTop } from '@/api'
export default {
  data () {
    return {
      contentList: []
    }
  },
  async created () {
    this.contentList = await getShopAlradyTop()
  }
}
</script>

<style lang="less" scoped>
.alradytop {
  background: #fff;
}
.dizhibox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  font-size: 28px;
  .dingwei {
    color: #999;
    .img {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin-right: 20px;
      position: relative;
      img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: -10px;
      }
    }
  }
  p {
    color: #e93b3d;
  }
}

.list {
  position: relative;
  .dianpuInfo {
    padding: 0 20px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .title {
      display: flex;
      align-items: center;
      .select {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        display: inline-block;
        border: 1px solid #999;
        border-radius: 50%;
      }
      .icao {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          font-size: 0;
        }
      }
      .name {
        color: black;
        font-weight: 700;
        font-size: 32px;
      }
    }
    .youhui {
      font-size: 24px;
      color: #e93b3d;
    }
  }
  .shangpinInfo {
    padding-right: 20px;
    padding-bottom: 30px;
    .top {
      font-size: 24px;
      color: #333;
      line-height: 30px;
      margin-top: 20px;
      .youhuii {
        position: relative;
        padding: 2px 10px;
        height: 30px;
        text-align: center;
        background: red;
        color: white;
        margin: 0 10px 0 20px;
        border-radius: 3px;
        &::after {
          position: absolute;
          left: 10px;
          bottom: -8px;
          content: "";
          display: block;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #e93b3d;
        }
      }
      .qucoudan {
        float: right;
        margin-right: 10px;
        color: rgb(153, 153, 153);
      }
    }
    .main {
      .jieshao {
        .imgbox {
          position: relative;
          float: left;
          margin-left: 86px;
          margin-right: 10px;
          margin-top: 20px;
          img {
            width: 150px;
            height: 150px;
          }
          p {
            margin: 0 auto;
            font-size: 20px;
            width: 4em;
            height: 2em;
            background: rgba(233, 59, 61, 0.7);
            line-height: 1em;
            text-align: center;
            padding: 8px 30px;
            color: #fff;
          }
        }
        .solid {
          padding: 10px 0 30px 256px;
          img {
            height: 28px;
            vertical-align: text-top;
          }
          .name {
            font-size: 28px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .xinghao {
            margin: 16px 20px 20px 0;
            padding: 2px 50px 2px 10px;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            font-size: 28px;
            color: #666;
            span {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }
          .number {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .mony {
              color: #e93b3d;
              .zhengshu {
                font-size: 32px;
              }
            }
            .shuliang {
              span {
                display: inline-block;
                width: 60px;
                height: 60px;
                background: hsla(0, 0%, 80%, 0.3);
                line-height: 60px;
                text-align: center;
                font-size: 36px;
                color: #999;
              }
              .num {
                // font-size: 24px;
                padding: 0 10px;
              }
            }
          }
          .shanchu {
            float: right;
            color: #999;
            margin-top: 10px;
            span {
              margin-left: 40px;
            }
          }
        }
        .chuxiaoList {
          padding-left: 84px;
          margin-top: 20px;
          ul {
            background-color: #fef5f5;
            padding: 6px 0 12px 0;
            li {
              color: #999;
              height: 2em;
              line-height: 2em;
              .chuxiao {
                margin: 0 20px;
                color: #666;
              }
              .dazhe {
                display: inline-block;
                width: 400px;
                margin-right: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -webkit-box-flex: 1;
                vertical-align: bottom;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
  }
  .shangpinselect {
    width: 40px;
    height: 40px;
    border: 1px solid #999;
    border-radius: 50%;
    position: absolute;
    top: 75px;
    left: -70px;
    &::after {
      position: absolute;
      left: 50%;
      top: -95px;
      content: "";
      display: block;
      width: 1px;
      height: 95px;
      border-left: 1px dashed #999;
    }
  }
}
</style>
