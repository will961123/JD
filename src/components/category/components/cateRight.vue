<template>
  <div ref="myRight" class="cateRight">
    <div v-for="(item, index) in contentList" :key="index" class="cateOne">
      <h4>{{item.title}}</h4>
      <ul class="cateOneUl">
        <li v-for="(list, indexs) in item.content" :key="indexs">
          <a href="javascript:;">
            <img :src="list.img" :alt="list.name">
          </a>
          <span>{{list.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentList: [
        {
          title: '热门分类',
          content: [
            {
              name: '轻薄本',
              img:
                '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
            },
            {
              name: '游戏本',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
            },
            {
              name: '机械键盘',
              img:
                '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
            },
            {
              name: '组装电脑',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg'
            },
            {
              name: '移动硬盘',
              img:
                '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg'
            },
            {
              name: '显卡',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg'
            },
            {
              name: '游戏台式机',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg'
            },
            {
              name: '家用打印机',
              img:
                '//img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg'
            },
            {
              name: '吃鸡装备',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t16210/272/2297735843/7874/66447aee/5a9fa34bNff4ef403.jpg'
            },
            {
              name: '曲屏显示器',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg'
            }
          ]
        },
        {
          title: '电脑整机',
          content: [
            {
              name: '笔记本',
              img:
                '//img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg'
            },
            {
              name: '平板电脑',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg'
            },
            {
              name: '一体机',
              img:
                '//img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg'
            },
            {
              name: '台式机',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg'
            },
            {
              name: '笔记本配件',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg'
            },
            {
              name: '游戏台式机',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg'
            },
            {
              name: '商用台式机',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg'
            },
            {
              name: '游戏本',
              img:
                '//img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg'
            },
            {
              name: '平板电脑配件',
              img:
                '//img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg'
            },
            {
              name: '轻薄本',
              img:
                '//img20.360buyimg.com/focus/s140x140_jfs/t12499/273/957225674/6892/8281d4a7/5a17b962Nf77d9f6c.jpg'
            },
            {
              name: '二合一平板',
              img:
                '//img10.360buyimg.com/focus/s140x140_jfs/t11944/224/2479637242/6222/ac9759/5a17b93dN89330bb3.jpg'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$refs.myRight.style.height = '500px'
  }
}
</script>

<style lang="less" scoped>
.cateRight {
  width: 100%;
  height: calc(1200px - 190px);
  background: white;
  overflow-y: auto;
  .cateOne {
    margin: 40px 14px 0 14px;
    h4 {
      font-size: 28px;
      color: #333;
    }
    .cateOneUl {
      width: 100%;
      padding: 17px 20px 0 20px;
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;
      box-sizing: border-box;
      li {
        width: 33%;
        // text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 140px;
          height: 140px;
          // display: block;
          // margin: 0 auto;
        }
      }
    }
  }
}
</style>
