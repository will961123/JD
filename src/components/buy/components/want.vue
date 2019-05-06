<template>
  <div class="want">
    <div class="divline">
      <span class="left-point"></span>
      <span class="txt">可能你还想要</span>
      <span class="right-point"></span>
      <span class="line"></span>
    </div>
    <div class="article">
      <ul>
        <li class="wbox" v-for="(item,index) in wants" :key="index">
          <img class="bigimg" v-lazy="item.ads" alt="1">
          <div class="detail">
            <i>
              <img class="sup" :src="item.sup" alt="1">
              <span class="details">{{item.details}}</span>
            </i>
          </div>
          <div class="buttom">
            <span class="money">{{item.money}}</span>
            <span>
              <div class="pur">{{item.pur}}</div>
            </span>
            <span class="buycars">
              <div class="buycar">
                <img src="../images/buycar.png" alt>
              </div>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getWant } from '@/api'
export default {
  data () {
    return {
      wants: null
    }
  },
  async created () {
    this.wants = await getWant()
  }
}
</script>
<style scoped lang="less">
.want {
  width: 100%;
  background-color: #f0f2f5;
}
.divline {
  position: relative;
  margin: 15px 0;
  height: 14px;
  line-height: 14px;
  text-align: center;
  font-size: 12px;
  color: #999;
  .left-point {
    // border-radius: 3px;
    height: 5px;
    width: 5px;
    position: absolute;
    left: 38%;
    top: 50%;
    // margin-top: -4px;
    background-color: black;
    display: block;
  }
  .right-point {
    // border-radius: 3px;
    height: 5px;
    width: 5px;
    position: absolute;
    right: 38%;
    top: 50%;
    // margin-top: -4px;
    background-color: black;
    display: block;
  }
  .txt {
    position: relative;
    padding: 0 15px;
    background-color: #f7f7f7;
    z-index: 2;
  }
  .line {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 50%;
    z-index: 1;
    background-color: #ccc;
    height: 2px;
    pointer-events: none;
  }
}
.article {
  width: 100%;
  ul {
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: column;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    align-content: center;
    .wbox {
      margin: 2px;
      background: white;
      width: 45.4%;
      padding: 15px 15px 0;
    }
  }
}
.bigimg {
  width: 100%;
}
.sup {
  height: 28px;
}
.detail {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  .details {
    font-size: 10px;
    width: 100%;
  }
}
.money {
  color: #e93b3d;
  font-size: 28px;
}
.pur {
  display: inline-block;
  border: 2px solid #e4393c;
  color: #e4393c;
  height: 24px;
  line-height: 24px;
  padding: 2px;
  border-radius: 4px;
  margin-left: 5px;
}
.buycar {
  width: 40px;
  height: 32px;
  position: relative;
  left: 380%;
}
.buycars {
  display: inline-block;
}
.buycar img {
  width: 100%;
}
.buttom {
  display: flex;
  height: 50px;
  line-height: 50px;
}
</style>
