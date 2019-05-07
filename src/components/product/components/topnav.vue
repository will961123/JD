<template>
    <div class="topnav" :style="s<500?'background:rgba(255,255,255,0)':'background:white'">
        <div :class="s<500?'change':'icon'" class="icon" @click="goBack">
            <div :style="s<500?'opacity:1':'opacity:0'" class="bg"></div>
            <i class="iconfont icon-back"></i>
        </div>
        <ul class="center" :style="s<500?'opacity:0':'opacity:1'">
            <li>商品</li>
            <li>评价</li>
            <li>详情</li>
            <li>推荐</li>
        </ul>
        <div :class="s<500?'change':'icon'" class="righticon icon">
             <div :style="s<500?'opacity:1':'opacity:0'" class="bg2"></div>
            <i class="iconfont icon-more"></i>
        </div>
    </div>
</template>

<script>
import gcss from '@/gcss/fonts.css'
export default {

  props: ['s'],
  components: {
    gcss
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.dispatch('changeShowFooter', true)
    }
  }
}
</script>

<style lang="less" scoped>
    .topnav{
        width: 100%;
        height: 88px;
        line-height: 88px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        z-index:99;
        .change{
             color: white;
        }
        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            text-align: center;
            .bg{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                position: absolute;
                left: 14px;
                top: 14px;
                background: black;
            }
            .bg2{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                position: absolute;
                right: 10px;
                top: 14px;
                background: black;
            }
        i{
            font-size: 40px;
             position: relative;
             z-index: 2;
        }
        }
        .center{
            margin: 0 72px;
            flex: 1;
            display: flex;
            li{
                flex: 1;
                text-align: center;
                font-size: 28px;
            }
        }
    }
</style>
