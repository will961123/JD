<template>
    <div class="price">
        <div class="price-left">
            ￥
            <span>5999</span>
            .00
        </div>
        <div class="price-right">
            <span class="sp1" >降价提醒</span>
            <span class="sp2 " @click="change">关注</span>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    change () {
      var sp = document.querySelector('.sp2')
      if (sp.className === 'sp2 red') {
        sp.className = 'sp2'
      } else {
        sp.className = 'sp2 red'
      }
    }
  }
}
</script>
<style scoped lang="less">
.price{
    background: white;
    padding: 32px 20px 0;
    font-size: 24px;
    height: 70px;
    .price-left{
        float: left;
        color: red;
        letter-spacing: 0.001rem;
        span{
            font-size: 44px;
            font-weight: bold;
        }
    }
    .price-right{
        float:right;
        .sp1{
            display: inline-block;
            position: relative;
            top: 28px;
            right: 10px;
            &::after{
                content: "";
                background-image: url("images/money.png");
                background-repeat: no-repeat;
                background-size:30px 30px;
                display: block;
                width:30px;
                height: 30px;
                position: absolute;
                top: -40px;
                left: 20px;
            }
        }
        .sp2{
            display:inline-block;
            position: relative;
            top: 28px;
            &::after{
                content: "";
                background-image: url("images/xuebi.png");
                background-position: -100px -6px;
                background-repeat: no-repeat;
                background-size:2.6rem 2.5rem;
                display: block;
                width:40px;
                height: 40px;
                position: absolute;
                top: -40px;
                left: 8px;
            }
            &.red::after{
                 content: "";
                background-image: url("images/xuebi.png");
                background-position: -100px -46px;
                background-repeat: no-repeat;
                background-size:2.6rem 2.5rem;
                display: block;
                width:40px;
                height: 40px;
                position: absolute;
                top: -40px;
                left: 8px;
            }
        }
    }
}
</style>
