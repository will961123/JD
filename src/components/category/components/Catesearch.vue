<template>
    <div class="head ">
        <img class="img1" src="../images/cateleft.png">
        <div class="searchbox">
            <img class="jd" src="../images/jingdong.png"/>
            <img class="search" src="../images/search.png"/>
            <input type="text" placeholder="电子琴"/>
        </div>
        <div class="login">
            <p><img src="../images/cateright.png"/></p>
        </div>
    </div>
</template>
<style scoped lang="less">
.head{
    position: fixed;
    top:0;
    height: 104px;
    z-index: 2;
    width: 100%;
    border-bottom: 2px solid #ddd;
}
.head .img1{
    margin: 28px 0 0 40px;
    width: 40px;
    height: 40px;
}
.searchbox{
    display: flex;
    position: relative;
    top: -50px;
    left:120px;
}
.searchbox .jd{
    width: 40px;
    height:35px;
    position: absolute;
    top: 15px;
    left:30px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 2px solid #999;
}
.searchbox .search{
    position: absolute;
    top:13px;
    left: 100px;
    width: 30px;
    height: 30px;
}
.searchbox input{
    height:60px;
    padding-left: 136px;
    padding-right: 20px;
    border-radius: 40px;

}
.head .login{
    position: relative;
    right: -210px;
    top: 26px;
    font-size: 30px;
    color: white;
     top:-108px;
    left: 640px;
    p img{
        width:60px;
    }
}
</style>
