<template>
  <div class="today-buy">
    <div class="buy-head">
      今日
      <strong>必拼</strong>
      <span class="timing-text">距离22点场结束</span>
      <span class="timing-date">
        <span class="date-hour">{{date.hours}}</span>
        <span class="date-minute">{{date.minutes}}</span>
        <span class="date-second">{{date.seconds}}</span>
      </span>
      <a href="javascript:;" class="head-more">查看更多</a>
    </div>
    <div class="buy-slider">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <ul class="slide-content-list">
            <li v-for="(item, i) in slide" :key="i">
              <img :src="item.img">
              <p>
                <span class="item-form">{{item.form}}</span>
                <span class="item-price">
                  ￥
                  <strong>{{item.price}}</strong>
                </span>
              </p>
              <p class="item-state">{{item.state}}</p>
            </li>
          </ul>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { getTodayPin } from '@/api'
import getTime from '../../../utils/time'
export default {
  async mounted () {
    this.swiperSlides = await getTodayPin()
    setInterval(() => {
      this.date = getTime('2019-5-6 22:00:00')
    }, 1000)
  },
  data () {
    return {
      date: {
        hours: '',
        minutes: '',
        seconds: ''
      },
      swiperSlides: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // loop: true,
        speed: 400
      }
    }
  }
}
</script>

<style lang="less" scoped>
.today-buy {
  width: 100%;
  padding: 22px 30px;
  padding-bottom: 40px;
  background: #fff;
  box-sizing: border-box;
  .buy-head {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    strong {
      color: #e4393c;
    }
    .timing-text {
      font-size: 12px;
      font-weight: normal;
      color: #999;
    }
    .timing-date {
      font-size: 12px;
      font-weight: normal;
      color: #e4393c;
      span {
        width: 30px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: url("http://wq.360buyimg.com/fd/h5/wxsq_dev/tuan/images/ping_today_timing@2x_2110f7b1.png");
        margin-left: 10px;
      }
    }
    .head-more {
      font-size: 28px;
      font-weight: normal;
      color: #999;
      float: right;
      &:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 5px;
        width: 20px;
        height: 20px;
        background: url("../images/right.png") center center;
      }
    }
  }
}
.slide-content-list {
  margin-top: 20px;
  display: flex;
  align-items: space-between;
  li {
    text-align: center;
    width: calc(100% / 3);
    img {
      width: 216px;
    }
    .item-form {
      font-size: 24px;
      color: #333;
    }
    .item-price {
      font-size: 24px;
      color: #ea3b3e;
      strong {
        font-size: 32px;
      }
    }
    .item-state {
      color: #999;
    }
  }
}
.buy-slider {
  position: relative;
  .swiper-pagination {
    position: absolute;
    left: 40%;
  }
}
</style>
