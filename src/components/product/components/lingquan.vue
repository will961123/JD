<template>
    <div class="lingquan">
        <span class="sp1">领券</span>
        <span class="sp2"><a href="javascript:;">满5000减400</a></span>
        <span class="sp3"><a href="javascript:;">新用户专享</a></span>
        <span class="sp4">共四张</span>
        <span class="sp5"></span>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.lingquan{
    background: white;
    padding: 0 20px 0;
    display: flex;
    line-height: 84px;
}
.sp1{
    font-size: 24px;
    color:#999;
    margin-right:16px;
}
.sp2{
    position: relative;
    display: inline-block;
    // height:16px;
}
.sp2 a{
    position: relative;
    display: inline-block;
    margin-right: 10px;
    padding: 0 18px 0 24px;
    border-top: 1px solid #e4393c;
    border-bottom: 1px solid #e4393c;
    height: 32px;
    line-height: 32px;
    color: #e4393c;
    font-size: 10px;
    &::before{
        content: "";
        display: inline-block;
        position: absolute;
        background-image: url("images/quan.png");
        background-size: 30px 30px;
        background-repeat: no-repeat;
        width: 18px;
        height: 30px;
        left: 0px;
    }
    &::after{
        content: "";
        display: inline-block;
        position: absolute;
        background-image: url("images/quan.png");
        background-position:-22px 0;
        background-size: 30px 30px;
        background-repeat: no-repeat;
        width: 18px;
        height: 30px;
        right: -10px;
    }
}
.sp3 a{
    position: relative;
    display: inline-block;
    margin-right: 10px;
    padding: 0 18px 0 24px;
    border-top: 1px solid #e4393c;
    border-bottom: 1px solid #e4393c;
    height: 32px;
    line-height: 32px;
    color: #e4393c;
    font-size: 10px;
    &::before{
        content: "";
        display: inline-block;
        position: absolute;
        background-image: url("images/quan1.png");
        background-size: 30px 30px;
        background-repeat: no-repeat;
        width: 18px;
        height: 30px;
        left: 0px;
    }
    &::after{
        content: "";
        display: inline-block;
        position: absolute;
        background-image: url("images/quan1.png");
        background-position:-22px 0;
        background-size: 30px 30px;
        background-repeat: no-repeat;
        width: 18px;
        height: 30px;
        right: -10px;
    }
}
.sp4{
    display: inline-block;
    margin-left:140px;
    color: #999;
}
.sp5{
    display: inline-block;
    background-image: url("images/xuebi1.png");
    background-size: 30px ;
    background-repeat: no-repeat;
    width: 40px;
    height:12px;
   position: relative;
   top: 34px;
   left: 16px;
}
</style>
