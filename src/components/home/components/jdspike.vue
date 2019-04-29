<template>
  <div class="jdspike">
    <div class="newPerson">
      <div class="newPerson-container">
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
              <li class="last">
                <span>{{leftTime.second}}</span>
              </li>
            </ul>
          </div>
          <div class="tit_more_link">
            <a href="javascript::">更多秒杀</a>
            <img src="../images/spike_jt.png" alt>
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
import getLeftTime from '@/utils/jdspiketime'
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
      contentList: [
        {
          img:
            'http://img14.360buyimg.com/n1/s150x150_jfs/t1/35005/34/5144/149501/5cbe7918E44ba5d30/7fc0adfb066375a5.jpg.dpg',
          rprice: 5299,
          sprice: 7999
        },
        {
          img:
            'http://img14.360buyimg.com/n1/s150x150_jfs/t1/11497/38/10594/154589/5c81e33bEf1bf4472/ad7c8017327d5e0e.jpg.dpg',
          rprice: 144.9,
          sprice: 268
        },
        {
          img:
            'http://img14.360buyimg.com/n1/s150x150_jfs/t1/31137/14/13027/155768/5cb9344cE77cc2697/b3e82d55bfe016ac.jpg.dpg',
          rprice: 19.9,
          sprice: 65
        },
        {
          img:
            'http://img14.360buyimg.com/n1/s150x150_jfs/t1/40376/26/1936/196106/5cbeda43Ef4cd8ff0/5bce806f2a34a085.jpg.dpg',
          rprice: 19.9,
          sprice: 52.8
        },
        {
          img:
            'http://img14.360buyimg.com/n1/s150x150_jfs/t1/34832/16/2297/188304/5cb5b093Ed4767bca/5ec513629e03442d.jpg.dpg',
          rprice: 2339,
          sprice: 4280
        },
        {
          img:
            'http://img14.360buyimg.com/n1/s150x150_jfs/t16954/147/1043719425/125505/9d0fd091/5ab8c5cdN1c216d78.jpg.dpg',
          rprice: 14647,
          sprice: 14795
        }
      ]
    }
  },
  async created () {
    this.timer = setInterval(() => {
      this.leftTime = getLeftTime('2019-04-29 23:59')
    }, 1000)
    this.$nextTick(() => {
      var width = this.$refs.li[0].offsetWidth * this.contentList.length
      this.$refs.myul.style.width = width + 'px'
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
    display: flex;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    .newPerson-container > a {
      width: 100%;
      height: 100px;
      flex: 1;
    }
  }
}
.spike {
  width: 100%;
  box-shadow: 0 1px 1px #f2f2f2;
  background: #fff;
  font-size: 0;
  overflow: hidden;
  .spike_content {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 0;
    .title_wrap {
      display: flex;
      flex: 1;
      background: url("../images/jdspike_bg.png") no-repeat;
      background-size: contain;
      .tit_time ul {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .tit_time ul li {
        font-size: 0;
        line-height: 25px;
      }
      .tit_time ul li span {
        width: 19px;
        height: 25px;
        font-size: 12px;
        text-align: center;
        display: inline-block;
        background: #323232;
        border-radius: 5px;
        color: white;
      }
      .tit_time ul li i {
        font-size: 12px;
        margin: 0 5px;
      }
      .tit_time ul li.last span {
        background: #f3344a;
      }
    }
    .spike_c_wrap {
      overflow-x: auto;
    }
    .spike_c_wrap ul {
      /* display: flex; */
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
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .spike_c_wrap li > .r-price {
      font-size: 13px;
      color: #f3344a;
    }
    .spike_c_wrap li > .s-price {
      font-size: 13px;
      color: #bababa;
      text-decoration: line-through;
      display: block;
    }
  }
}
</style>
