<template>
    <div class="today-buy">
        <div class="buy-head">
            今日<strong>必拼</strong>
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
                            <img :src="item.img" />
                            <p><span class="item-form">{{item.form}}</span><span class="item-price">￥<strong>{{item.price}}</strong></span></p>
                            <p class="item-state">{{item.state}}</p>
                        </li>
                    </ul>
                </swiper-slide>

             </swiper>
             <div class="swiper-pagination2" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
import getTime from '../../../utils/time'
export default {
  mounted () {
    setInterval(() => {
      this.date = getTime('2019-5-5 18:00:00')
    }, 1000)
  },
  data () {
    return {
      date: {
        hours: '',
        minutes: '',
        seconds: ''
      },
      swiperSlides: [
        [
          {'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/42642/40/1498/195993/5cc6a439E827056ce/cfce9834d1a4ff4f.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img14.360buyimg.com/evalpic/s240x240_jfs/t1/43519/10/1096/101104/5cc51cdcE7ce7e96d/ce83761ff5be4d64.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼2215件'},
          {'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/20033/1/13846/145456/5ca1cb51Edaa61859/8f829d9d11a95da8.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼2.3万件'}
        ],
        [
          {'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/32842/4/7763/192083/5c9adecaE730db63f/60635a7ab638b002.png!q70.webp', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/24018/9/14904/119306/5cada591E2b232f87/22824f3b850717ac.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/26260/18/14269/268886/5ca5b6aeEc9251a7a/e8b3afd4d1c61088.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'}
        ],
        [
          {'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/34361/5/8888/130503/5cce3fb9E4c7521cd/97a2c93cac59f6de.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t24937/131/498228633/238856/5f89f528/5b72950bNe6b22934.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/40385/9/1535/212831/5cbd7a2aE586469ed/f6e82017e52b55db.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'}
        ],
        [
          {'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/43796/2/1787/246390/5cc7d7c6E638541ef/277fdeb6b8312214.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/1425/36/11242/498119/5bd00ff1Eb5773c71/406cc5d611edbb98.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/36591/19/7488/63120/5cc7d4aeE9517a377/59e5bae329b5b170.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'}
        ],
        [
          {'img': '//img14.360buyimg.com/evalpic/s240x240_jfs/t1/16677/4/15461/268106/5cb028ecE18e2411f/7dc04f643b1fc9ef.png!q70.webp', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/20303/22/15611/363054/5cb33332Eb571aef8/245f301d7feed301.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'},
          {'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/30911/23/11264/126440/5cb4451dE9a879856/3b39420028b2f977.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件'}
        ]
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true,
        speed: 400
      }
    }
  }
}
</script>

<style lang="less" scoped>
.today-buy{
    width:100%;
    padding:22px 30px;
    padding-bottom:40px;
    background:#fff;
    box-sizing:border-box;
    .buy-head{
        font-size:32px;
        font-weight:bold;
        color:#333;
        strong{
            color:#e4393c;
        }
        .timing-text{
            font-size:12px;
            font-weight:normal;
            color:#999;
        }
        .timing-date{
            font-size:12px;
            font-weight:normal;
            color:#e4393c;
            span{
                width:30px;
                height:36px;
                line-height:36px;
                text-align:center;
                background:url('http://wq.360buyimg.com/fd/h5/wxsq_dev/tuan/images/ping_today_timing@2x_2110f7b1.png');
                margin-left:10px;
            }
        }
        .head-more{
            font-size:28px;
            font-weight:normal;
            color:#999;
            float:right;
            &:after{
                content:'';
                display:inline-block;
                vertical-align:middle;
                margin-bottom:5px;
                width:20px;
                height:20px;
                background:url('../images/right.png') center center;
            }
        }
    }
}
.slide-content-list{
    margin-top:20px;
    display:flex;
    align-items:space-between;
    li{
        text-align:center;
        width:calc(100%/3);
        img{
            width:216px;
        }
        .item-form{
            font-size:24px;
            color:#333;
        }
        .item-price{
            font-size: 24px;
            color:#ea3b3e;
            strong{
                font-size:32px;
            }
        }
        .item-state{
            color:#999;
        }
    }
}
.buy-slider{
    position:relative;
    .swiper-pagination2{
        position:absolute;
        left:40%;
        span{

        }
    }
}
</style>
