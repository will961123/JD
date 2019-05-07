<template>
    <div class="bottom">
        <ul>
            <li><i class="iconfont icon-kefu"></i><span>联系客服</span></li>
            <li><i class="iconfont icon-dian"></i><span>进店</span></li>
            <li><i class="iconfont icon-buy"></i><span>购物车</span></li>
            <li class="buy buycar">加入购物车</li>
            <li class="buy nowbuy">立即购买</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .bottom{
        width: 100%;
        height: 100px;
        position: fixed;
        bottom: 0;
        background: #fff;
        z-index: 100;
        ul{
            width: 100%;
            display: flex;
            height: 100%;
            color: #666;
            li{
                width: 14%;
                display: flex;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                &.buy{
                    width: 29%;
                    color: #fff;
                    font-size: 28px;
                }
                i{
                    font-size: 46px;
                }
                span{
                    font-size: 20px;
                }
                &.buycar{
                    background: rgb(255,150,0)
                }
                &.nowbuy{
                    background: rgb(228,57,60)
                }
            }
        }
    }
</style>
