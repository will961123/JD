<template>
  <div class="main">
    <div class="container">
      <div v-for="(item, index) in containerList" :key="index" class="list">
        <img :src="item.img">
        <p>{{item.title}}</p>
      </div>
    </div>

    <div class="monyList">
      <div class="Mlist">
        <p class="number">
          <span class="num">0</span>张
        </p>
        <p class="title">京东券</p>
      </div>
      <div class="Mlist">
        <p class="number">
          <span class="num"></span>开通有礼
        </p>
        <p class="title">白条</p>
      </div>
      <div class="Mlist">
        <p class="number">
          <span class="num">0</span>个
        </p>
        <p class="title">京豆</p>
      </div>
      <div class="Mlist">
        <p class="number">
          <span class="num">0</span>张
        </p>
        <p class="title">礼品卡</p>
      </div>
      <div class="Mlist">
        <img
          src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png"
          alt
        >
        <p class="title">我的资产</p>
      </div>
    </div>

    <div class="like">
      <div class="list">
        <p class="num">4</p>
        <p class="title">商品收藏</p>
      </div>
      <div class="list">
        <p class="num">
          4
          <span class="tip"></span>
        </p>
        <p class="title">店铺收藏</p>
      </div>
      <div class="list">
        <p class="num">4</p>
        <p class="title">我的足迹</p>
      </div>
    </div>

    <div class="more">
      <div class="list">
        <img
          src="http://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png!q70.webp"
        >
        <p>我的预约</p>
      </div>
      <div class="list">
        <img
          src="http://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp"
        >
        <p>京东火车票</p>
      </div>
      <div class="list">
        <img
          src="http://img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp"
        >
        <p>应用推荐</p>
      </div>
      <div class="list">
        <img
          src="//img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png!q70.webp"
        >
        <p>京东通讯营业厅</p>
      </div>
      <div class="list">
        <img
          src="//img12.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp"
        >
        <p>用户福利</p>
      </div>
      <div class="list">
        <img
          src="//img12.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png!q70.webp"
        >
        <p>京东机票</p>
      </div>
      <div class="list">
        <img
          src="//img12.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png!q70.webp"
        >
        <p>京东酒店</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      containerList: [
        {
          title: '待付款',
          img:
            '//img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png'
        },
        {
          title: '待收货',
          img:
            '//img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png'
        },
        {
          title: '退换/售后',
          img:
            '//img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png'
        },
        {
          title: '全部订单',
          img:
            '//img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  background: #f7f7f7 !important;
  font-size: 24px;
  .container {
    margin: 30px 0;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    color: #666 !important;
    line-height: 84px;
    padding-top: 20px;
    .list {
      position: relative;
      flex: 1;
      img {
        width: 40px;
        display: block;
        font-size: 0;
        margin: 0 auto;
      }
      p {
        text-align: center;
      }
    }
  }

  .monyList {
    background: #ffffff;
    padding: 34px 0 0 0;
    display: flex;
    justify-content: space-between;
    .Mlist {
      flex: 1;
      text-align: center;
      .number {
        color: red;
        .num {
          font-size: 32px;
        }
      }
      .title {
        color: #666;
        height: 66px;
        line-height: 66px;
      }
      img {
        font-size: 0;
        margin-bottom: -8px;
        width: 40px;
      }
    }
  }

  .like {
    background: #ffffff;
    margin: 30px 0;
    text-align: center;
    padding: 32px 0 10px;
    display: flex;
    .list {
      flex: 1;
      .num {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        position: relative;
        .tip {
          display: block;
          position: absolute;
          left: 58%;
          top: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: red;
        }
      }
      .title {
        line-height: 66px;
        color: #666;
      }
    }
  }

  .more {
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    .list {
      width: 25%;
      text-align: center;
      margin: 20px 0 16px 0;
      img {
        width: 40px;
      }
      p {
        color: #666;
        line-height: 66px;
      }
    }
  }
}
</style>
