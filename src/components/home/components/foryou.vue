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
export default {
  data () {
    return {
      ware: [
        {
          img:
          '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/25412/23/4475/215607/5c3307ceEaa25c981/24091a833b803f74.jpg!q70.dpg',
          infor:
          '德国家用 304不锈钢 菜板厨房长方形双面两用大砧板切菜板案板占板面板擀面板刀板不发霉 加大(460X300mm)送防滑垫:三口以上家庭使',
          price: '128',
          similar: '看相似'
        },
        {
          img:
          '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/4697/5/13519/63602/5bd80c0bE463d5b6b/b627f2c2c04af37e.jpg!q70.dpg',
          infor:
          '飞利浦（PHILIPS）男士电动剃须刀便携式剃胡刀胡须刀刮胡刀PQ182/16',
          price: '89',
          similar: '看相似'
        },
        {
          img:
          '//img12.360buyimg.com/mobilecms/s372x372_jfs/t25456/309/408828474/237465/516bbe31/5b6e5289N5f550032.jpg!q70.dpg',
          infor:
          '大一（DAYI）家用办公全钢入墙保管柜大型60cm保管箱深邃黑密码款',
          price: '688',
          similar: '看相似'
        }, {
          img:
          '//img12.360buyimg.com/mobilecms/s372x372_jfs/t24148/269/2677968209/453964/94ead7ad/5b8a36d3Nd5bc6701.jpg!q70.dpg',
          infor:
          '美的（Midea）电压力锅5升双胆电高压锅 一键排气 七段调压 开盖收汁 WQC50A5',
          price: '279.6',
          similar: '看相似'
        }, {
          img:
          '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/26685/20/14017/103537/5ca46c49E34128541/c5949cdd4ee55fa8.jpg!q70.dpg',
          infor:
          'IKSNAIL 【行李箱24寸防刮铝框】铝框拉杆箱 万向轮24寸男女行李箱商务20寸轻巧便利旅行箱 玫瑰金 22寸',
          price: '208',
          similar: '看相似'
        }, {
          img:
          '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/21051/8/2362/249945/5c1c5c1bE33b5149e/4ac2f02e1ec55088.jpg!q70.dpg',
          infor:
          '南极人 男士内裤男平角裤纯色95%精梳棉质中腰男式四角内裤u凸短裤头4条礼盒装NHT9999 混色4条XL',
          price: '46.5',
          similar: '看相似'
        }, {
          img:
          '//img13.360buyimg.com/mobilecms/s372x372_jfs/t18931/170/1175039838/193413/352c6e00/5abe097fNb68e8152.jpg!q70.dpg',
          infor:
          'EPOCH艾保克 夜光手表全自动机械男表 氚气自发光H3防水镂空腕表 A款 钢色绿灯钢带白盘',
          price: '1499',
          similar: '看相似'
        }, {
          img:
          '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/36999/21/5957/417092/5cc18a0fE379803aa/76173b3cdb7bc1be.jpg!q70.dpg',
          infor:
          '亿色(ESR) iphone xr手机壳苹果xr手机外壳 超薄防摔硅胶软边透明玻璃全包抖音款手机套 琉璃剔透白',
          price: '49.9',
          similar: '看相似'
        }, {
          img:
          '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/20729/6/11849/171953/5c9351daE2e50cd61/f364f7af05490d9b.jpg!q70.dpg',
          infor:
          '康麦斯（K-Max）牌美国原装进口深海鱼油胶囊卵磷脂胶囊组合 调节血脂 中老年营养保 鱼油200粒+卵磷脂200粒组合装',
          price: '438',
          similar: '看相似'
        },
        {
          img:
          '//img10.360buyimg.com/mobilecms/s372x372_jfs/t22912/226/1778016670/136315/68021208/5b6a4856N34be1638.jpg!q70.dpg',
          infor:
          '小芸豆 欧式梳妆台卧室电视柜现代简约化妆柜多功能化妆桌小户型网红公主型化妆台 韩式田园韩式618',
          price: '1698',
          similar: '看相似'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.foryou {
  width: 100%;
  background: #F0F2F5;
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
