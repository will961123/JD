<template>
  <div class="rcontlist wrapper">
    <ul class="content">
      <li class="page" v-for="(item,index) in contList" :key="index">
        <span>{{item.title}}</span>
        <ul>
          <li v-for="(items,indexs) in item.content" :key="indexs">
            <img :src="items.img" alt>
            <span>{{items.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      contList: [
        {
          title: '热卖选购',
          content: [
            {
              name: '夹克',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg'
            },
            {
              name: 'T恤',
              img:
                '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg'
            },
            {
              name: '针织衫',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg'
            },
            {
              name: '衬衫',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg'
            },
            {
              name: '卫衣',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg'
            },
            {
              name: '风衣',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg'
            },
            {
              name: '牛仔裤',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg'
            },
            {
              name: '休闲裤',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg'
            },
            {
              name: '自营男装',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg'
            }
          ]
        },
        {
          title: '男士内搭',
          content: [
            {
              name: '新品T恤',
              img:
                '//img12.360buyimg.com/focus/s140x140_jfs/t17641/277/1305218449/8776/e5182bbe/5ac47ffaN8a7b2e14.png'
            }, {
              name: '短袖T恤',
              img: '//img13.360buyimg.com/focus/s140x140_jfs/t18436/155/1324938407/6646/1a66cfa0/5ac47fffNe7a93aca.jpg'
            }, {
              name: '新品衬衫',
              img: '//img20.360buyimg.com/focus/s140x140_jfs/t19030/113/1250466624/3376/b981fe07/5ac48007Nb30b2118.jpg'
            }, {
              name: '短袖衬衫',
              img: '//img10.360buyimg.com/focus/s140x140_jfs/t16786/289/1311106267/4182/c345e2ef/5ac4800eN78bdf977.jpg'
            },
            {
              name: '新品卫衣',
              img: {
                // img14.360buyimg.com/focus/s140x140_jfs/t17824/6/1287333457/6576/aeae36f6/5ac48017N9347122f.jpg
              }
            }, {
              name: '连帽卫衣',
              img: '//img12.360buyimg.com/focus/s140x140_jfs/t16987/129/1278260758/4740/58f780b2/5ac4801bN5bd994fa.jpg'
            },
            {
              name: '潮牌卫衣',
              img: '//img11.360buyimg.com/focus/s140x140_jfs/t19366/130/1283276181/8302/a9d5eb82/5ac48021Ne7b57893.jpg'
            },
            {
              name: '长袖T恤',
              img: '//img11.360buyimg.com/focus/s140x140_jfs/t18988/341/1273630612/8382/4109693d/5ac47fa6Nd128653e.jpg'
            },
            {
              name: '长袖衬衫',
              img: '//img11.360buyimg.com/focus/s140x140_jfs/t18310/26/1273827800/2024/a6774615/5ac47fdaN6069d640.jpg'
            },
            {
              name: '免烫衬衫',
              img: '//img30.360buyimg.com/focus/s140x140_jfs/t19750/102/1313789327/2597/1536d07c/5ac47fdeNbebe151e.jpg'
            },
            {
              name: '针织衫',
              img: '//img14.360buyimg.com/focus/s140x140_jfs/t19270/191/1278480597/3933/bc516fa7/5ac47fe7N2718dc4b.jpg'
            }, {
              name: 'POLO衫',
              img: '//img20.360buyimg.com/focus/s140x140_jfs/t17149/171/1334340006/3690/4e8b276a/5ac47ff1N20a0a421.jpg'
            }
          ]
        }
      ],
    }
  },
  created () {
    // 增加滚动视图
    /* eslint-disable no-new */
    new BScroll('.wrapper')
  }
}
</script>

<style lang="less" scoped>
.rcontlist {
  margin-top: 120px;
  height: 1286px;
  overflow: hidden;
  .page {
    width: 100%;
    > span {
      height: 92px;
      padding: 10px;
      box-sizing: border-box;
      display: block;
      line-height: 72px;
      font-size: 28px;
      color: #333;
      font-weight: 700;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background: white;
      padding: 14px 20px 0;
      height: auto;
      li {
        width: 32.8%;
        height: 214px;
        text-align: center;
        img {
          width: 140px;
          height: 140px;
          display: block;
          margin: 0 auto;
        }
        span {
          display: block;
          color: #333;
          height: 70px;
          margin-top: 4px;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
