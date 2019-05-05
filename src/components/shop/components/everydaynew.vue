<template>
  <div class="everydaynew">
      <div class="top">
        <p>每日好货上新</p>
        <span>天天拼便宜</span>
      </div>
    <div class="section"  v-for="(item,index) in section" :key="index">
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
              <span>￥<em>{{items.int}}</em>.<i>{{items.dec}}</i>
              </span>
            </div>
            <span>以拼{{items.person}}件</span>
            <button>去开团</button>
          </div>
        </li>
      </ul>
      <div class="banner" v-for="(itemx,indexx) in item.banner" :key="indexx">
        <div class="bimg">
            <img
          v-lazy="itemx.img"
          alt
        >
        </div>
        <ul>
          <li v-for="(itema,indexa) in itemx.everyB" :key="indexa">
            <img
              v-lazy="itema.img"
              alt
            >
            <h2>{{itema.dis}}</h2>
            <div class="price">
              <i>2人拼</i>
              <span>￥<em>{{itema.priceint}}</em>.<i>{{itema.pricedec}}</i>
              </span>
            </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      section: [ {
        ware: [
          {
            img: '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/33942/12/6230/210631/5cc154b1E9a6441c4/4b8023ca763ecfad.jpg!q70.dpg',
            name: '臻惜 4层本色抽纸家庭装餐巾纸 母婴纸巾 30包【每包9毛】',
            tag1: '四层本色',
            tag2: '工厂直供',
            int: '26',
            dec: '90',
            person: '11.2万'
          },
          {
            img: '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/26068/18/13878/142555/5ca32128E0837a75c/a464045b6754bfdb.jpg!q70.dpg',
            name:
              '【买就送冰丝袖套】雪纺口罩女夏季防晒透气开车骑车防紫外线护颈全遮脸面纱遮阳防晒面罩 郁金香-白色',
            tag1: '出游必备',
            tag2: '防晒神器',
            int: '6',
            dec: '90',
            person: '2164'
          },
          {
            img: '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/28160/30/10622/143607/5c88b0bfEd39357a1/178e6e82fe59ce1e.jpg!q70.dpg',
            name:
              '好质量 工厂直供】双肩包男士帆布背包大容量电脑包简约休闲旅行包复古书包 1823卡其',
            tag1: '工厂直供',
            tag2: '超大容量',
            int: '29',
            dec: '90',
            person: '516'
          },
          {
            img:
              '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/41553/22/1654/201798/5cc6f7afE879922a5/7f9eebff708397b6.jpg!q70.dpg',
            name:
              '休闲宽松显瘦绑带印花斜纹绸拼接棉夏季T恤女 白色 L(建议100-115斤)',
            tag1: '休闲显瘦',
            tag2: '宽松女款',
            int: '39',
            dec: '80',
            person: '13'
          },
          {
            img:
              '//img10.360buyimg.com/evalpic/s400x400_jfs/t1/26975/9/11045/294001/5c8b7815Ef76aded2/b64010ffc7bd02e9.jpg!q70.dpg',
            name:
              '睡衣女夏季短袖可爱卡通小清新两件套装休闲大码夏天家居服 小黄蜂 M',
            tag1: '亲肤透气',
            tag2: '亲肤透气',
            int: '15',
            dec: '90',
            person: '5721'
          },
          {
            img:
              '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/30913/25/2447/164213/5c6b644cEc27a37fc/a580823e85af2084.jpg!q70.dpg',
            name:
              '新百泰袜子男士短袜防臭吸汗纯棉船袜男夏季低帮浅口运动隐形袜黑薄款 混色 5双',
            tag1: '防臭吸汗',
            tag2: '限时特惠',
            int: '9',
            dec: '80',
            person: '45'
          },
          {
            img:
              '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/26734/3/9805/157376/5c81f3d7E35d676a4/45eb38096999d3ee.jpg!q70.dpg',
            name:
              '【五一出门必备】【可单肩可双肩】2019春季双肩包包女士背包多功能手提斜挎包pu软皮背包 黑色',
            tag1: '下单即送',
            tag2: '厂家直销',
            int: '29',
            dec: '90',
            person: '1342'
          }
        ],
        banner: [
          {
            img:
              '//img12.360buyimg.com/mcoss/jfs/t1/35973/3/7562/98641/5cc80321E997914e9/93720b5aef254f50.jpg!q70.dpg',
            everyB: [
              {
                img:
                  '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/39316/21/1029/213580/5cbbc986E72c06c6d/4bd002d60fad6b72.jpg!q70.dpg',
                dis:
                  '【纤丝鸟】【10双-20双】男士丝袜夏季薄款透气防臭黑色春秋中筒袜超薄丝光冰丝袜子男短袜 男混色10双',
                priceint: '9',
                pricedec: '90'
              },
              {
                img:
                  '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/33280/2/1525/123054/5ca609eaE7c3fe33e/011128b248a46c9f.jpg!q70.dpg',
                dis:
                  '迷你台式小风扇USB充电学生便携式风扇桌面手持办公室宿舍随身电风扇 （随机颜色）小风扇+充电电池+充电线',
                priceint: '9',
                pricedec: '90'
              },
              {
                img:
                  '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/12283/31/14170/92302/5ca4940fE9e718284/cebf251ebb0e3af2.jpg!q70.dpg',
                dis:
                  '大帽檐防晒衣 女夏季新款防晒服轻薄快干防风防水透气风衣外套遮阳防紫外线女款学生韩版短款衫短外套 白色大帽檐防晒衣+耳朵（首发升级',
                priceint: '29',
                pricedec: '00'
              }
            ]
          }
        ]
      }, {
        ware: [
          {
            img: '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/38809/37/1359/106640/5cbd14b5E0d6a0aae/a004e31718d53c90.jpg!q70.dpg',
            name: '四季播种【30粒已开口】水培碗莲种子套装桌面水培 单独5粒种子不含其他',
            tag1: '6天就能发芽',
            tag2: '6天就能发芽',
            int: '2',
            dec: '60',
            person: '5423'
          },
          {
            img: '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/30032/17/10373/128093/5caf183bE9388ae0b/b9e58bf941fc5a01.jpg!q70.dpg',
            name:
              '双惯性越野车  抗耐摔玩具车 四驱惯性越野车',
            tag1: '双惯性越野车',
            tag2: '拼购专享',
            int: '9',
            dec: '90',
            person: '1860'
          },
          {
            img: '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/31007/27/15325/210479/5cc1871aE42cbbdba/0e4b0a195e66db18.jpg!q70.dpg',
            name:
              '网红头饰头绳皮筋发圈成人豹纹韩版简约可爱橡皮筋扎头发 掌柜《四件套》',
            tag1: '网红爆款',
            tag2: '时尚豹纹',
            int: '9',
            dec: '90',
            person: '426'
          },
          {
            img:
              '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/23760/15/14693/150551/5caac69cE1953fdb3/e9dd05627b577ebb.jpg!q70.dpg',
            name:
              '吊带背心女外穿网红爆款美背内衣带胸垫性感内搭打底衫上衣 灰色 单件 均码（适于80-140斤）',
            tag1: '带胸垫背心',
            tag2: '美背吊带背心',
            int: '12',
            dec: '90',
            person: '1421'
          },
          {
            img:
              '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/22224/35/6927/184349/5c64d5abE974bd3ce/3e8495f3da30128e.jpg!q70.dpg',
            name:
              '【单瓶低至9.9】超能洗衣液 时尚炫彩植翠低泡薰衣草香 爆款3件套',
            tag1: '名品特卖',
            tag2: '低价优惠',
            int: '29',
            dec: '90',
            person: '6294'
          },
          {
            img:
              '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/16755/38/14646/314468/5ca80f2bEf477362e/7cbf575be0f6705d.jpg!q70.dpg',
            name:
              '小宝贝抽纸婴儿纸巾抽取式面巾纸餐巾纸擦手纸卫生纸 7981D27',
            tag1: '四层加厚',
            tag2: '亲肤柔韧',
            int: '25',
            dec: '80',
            person: '1991'
          },
          {
            img:
              '//img10.360buyimg.com/evalpic/s400x400_jfs/t1/34080/5/7137/126909/5cc0279bE4d0bbc7a/822021bb1b5af4da.jpg!q70.dpg',
            name:
              '儿童百变积木送收纳盒和贴纸大颗粒3-6岁拼装宝宝益智积木送莱德队长玩具男女孩 100颗粒【礼盒】+莱德队长',
            tag1: '百变积木',
            tag2: '送汪汪队',
            int: '8',
            dec: '80',
            person: '5429'
          }
        ],
        banner: [
          {
            img:
              '//img12.360buyimg.com/mcoss/jfs/t1/42118/7/1946/54714/5cc81bcbE1b8aaa23/b23bd3cd05c65a26.jpg!q70.dpg',
            everyB: [
              {
                img:
                  '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/32138/1/15156/114804/5cc14a41Efe9337a6/6f28226d351a869e.jpg!q70.dpg',
                dis:
                  '床头LED台灯护眼学习USB充电夹子式小迷你卧室床头大学生书桌宿舍 立式款+送USB线充电',
                priceint: '18',
                pricedec: '80'
              },
              {
                img:
                  '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/7900/15/6101/517410/5bdfea4fEcfe2fbc7/f0c97be933cd4d8e.jpg!q70.dpg',
                dis:
                  '督牌 转换插头多功能插座排插无线usb插板不带线一转二多插座转换器 X2 蓝色',
                priceint: '9',
                pricedec: '90'
              },
              {
                img:
                  '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/27105/24/7256/52544/5c6a5977E77b21ef5/a95dee653bb0b30b.jpg!q70.dpg',
                dis:
                  '【送透明胶棒】热熔胶枪家用玻璃胶枪手工diy硅胶条热熔胶棒11mm7mm热熔胶 56W热熔胶枪+10根胶棒',
                priceint: '9',
                pricedec: '90'
              }
            ]
          }
        ]
      }]
    }
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
    .banner{
        width: 100%;
        .bimg{
            position: relative;
             img{
                width: 100%;
                display: block;
            }
            &::after{
                content: '';
                position: absolute;
                border: 10px solid transparent;
                border-bottom: 10px solid #fff;
                bottom: 0;
                left: 50%;
                margin-left: -4px;
            }
        }
        ul{
            width: 100%;
            height: 363px;
            padding: 30px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            li{
                width: 216px;
                height: 312px;
                display: flex;
                flex-direction: column;
                img{
                    width: 100%;
                    height: 216px;
                }
                h2{
                    margin-top: 14px;
                    font-weight: 400;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 24px;
                    line-height: 36px;
                }
                .price{
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
