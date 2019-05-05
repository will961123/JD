<template>
    <div class="miaosha">
        <div class="miao-top">
            <span>京东秒杀</span>
        </div>
        <div class="miao-bottom">
            <div class="skill">
                <div>京东秒杀</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.miao-top span{
    display: block;
    text-align: center;
    position: relative;
    margin:30px 0;
    font-size: 24px;
    color:#999;
}
.miao-top span::before{
    display: inline-block;
    content: "";
    width: 280px;
    height:2px;
    background: #ccc;
    position: absolute;
    top: 14px;
    left: 20px;
}
.miao-top span::after{
    display: inline-block;
    content: "";
    width: 280px;
    height:2px;
    background: #ccc;
    position: absolute;
    top: 14px;
    right: 20px;
}
.miao-bottom{
    margin: 0 0 20px 20px;
}
</style>
