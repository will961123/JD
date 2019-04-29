<template>
  <div class="jdspike">
    <div class="newPerson">
      <div class="newPerson-container">
        <div class="ncc">
          <div class="ncc-c">
            <a href="javascript::">
              <img
                src="http://m.360buyimg.com/mobilecms/s376x240_jfs/t1/34428/28/5156/115947/5cc2d753E129beb34/5d4a5c2ac7e3dd34.png!q70.jpg.dpg"
                alt
              >
            </a>
            <a href="javascript::">
              <img
                src="http://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
                alt
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="spike">
      <div class="spike_content">
        <div class="title_wrap">
          <img src="../images/jdspike.png" alt>
          <strong class="tit_clock" style="font-color:#000000">14点场</strong>
          <div class="tit_time">
            <ul>
              <li>
                <span>{{leftTime.hour}}</span>
                <i>:</i>
              </li>
              <li>
                <span>{{leftTime.minute}}</span>
                <i>:</i>
              </li>
              <li>
                <span>{{leftTime.second}}</span>
                <i></i>
              </li>
            </ul>
          </div>
          <div class="tit_more_link">
            <a href="javascript::">更多秒杀</a>
            <i class="more_icon"></i>
          </div>
        </div>
        <div class="spike_c_wrap">
          <ul ref="myul">
            <li ref="li" v-for="(item,index) in contentList" :key="index">
              <img :src="item.img" alt>
              <p>{{item.con}}</p>
              <span class="r-price">￥{{item.rprice}}</span>
              <span class="s-price">￥{{item.sprice}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getLeftTime from '@/utils/jdspike.js'
import { gethJdspk } from '@/api'
export default {
  data () {
    return {
      //   contentList: null,
      leftTime: {
        hour: '00',
        minute: '00',
        second: '00'
      },
      timer: null,
      contentList: []
    }
  },
  async created () {
    this.contentList = await gethJdspk()
    this.timer = setInterval(() => {
      this.leftTime = getLeftTime('2019-04-29 23:59')
    }, 1000)
    this.$nextTick(() => {
      var w = Math.ceil(
        this.$refs.li[0].getBoundingClientRect().width * this.contentList.length
      )
      this.$refs.myul.style.width = w + 'px'
    })
  },
  destroyed () {
    this.timer = null
  }
}
</script>
<style lang="less" scoped>
.newPerson {
  width: 100%;
  background-color: #f6f6f6;
  overflow: hidden;
  font-size: 0;
  .newPerson-container {
    width: 94%;
    height: 240px;
    font-size: 0;
    margin-bottom: 0.3rem;
    margin-right: 0.3rem;
    margin-left: 0.3rem;

    .ncc {
      width: 100%;
      height: 100%;

      .ncc-c {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;

        a {
          flex: 1;
          width: calc(100% / 2);
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.spike {
  width: 100%;
  box-shadow: 0 1px 1px #f2f2f2;
  background: #f6f6f6;
  font-size: 0;
  overflow: hidden;
  .spike_content {
    background: #fff;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 0;
    .title_wrap {
      display: flex;
      background: url("../images/jdspike_bg.png") no-repeat;
      background-size: contain;
      strong.tit_clock {
        font-size: 24px;
        line-height: 68px;
        color: #232326;
        font-weight: 700;
        display: inline-block;
        text-align: center;
      }

      .tit_time {
        height: 50px;
        line-height: 50px;
      }
      .tit_time ul {
        width: 100%;
        justify-content: center;
        margin: 5px 5px;
        display: flex;
      }
      .tit_time ul li {
        font-size: 0;
      }
      .tit_time ul li span {
        font-size: 16px;
        text-align: center;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
        color: #000;
      }
      .tit_time ul li i {
        font-size: 24px;
        margin: 0 2px;
      }
      .tit_more_link {
        flex: 1;
        position: relative;
        text-decoration-color: none;
        font-size: 20px;
        text-align: right;
        padding-right: 20px;
        cursor: pointer;
        line-height: 68px;
        i.more_icon {
          display: inline-block;
          width: 22px;
          height: 22px;
          background: url("../images/spike_jt.png") no-repeat;
          background-size: cover;
          position: absolute;
          right: 16px;
          top: 22px;
        }

        a {
          display: block;
          float: right;
          margin-right: 22px;
          color: #f23030;
        }
        .img {
          display: block;
          float: right;
          width: 22px;
          height: 22px;
        }
      }
    }
    .spike_c_wrap {
      overflow-x: auto;
      margin-top: 10px;
    }
    .spike_c_wrap ul {
      font-size: 0;
    }
    .spike_c_wrap li {
      width: 116px;
      padding: 0 10px;
      display: inline-block;
    }
    .spike_c_wrap li img {
      width: 100%;
    }
    .spike_c_wrap li p {
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .spike_c_wrap li > .r-price {
      margin-top: 20px;
      display: block;
      font-weight: 900;
      text-align: center;
      line-height: 52px;
      font-family: JDZhengHT-EN-Bold;
      font-size: 26px;
      color: #f3344a;
    }
    .spike_c_wrap li > .s-price {
      text-align: center;
      font-size: 22px;
      color: #bababa;
      text-decoration: line-through;
      display: block;
      line-height: 44px;
    }
  }
}
.title_wrap > img {
  width: 138px;
  height: 54px;
  margin-top: 10px;
  margin-right: 12px;
  margin-left: 0.45rem;
}
</style>
