<template>
    <div class="head ">
        <img class="img1" src="../images/cateleft.png">
        <div class="searchbox">
            <img class="jd" src="../images/jingdong.png"/>
            <img class="search" src="../images/search.png"/>
            <input type="text" placeholder="电子琴"/>
        </div>
        <span><img src="../images/cateright.png"/></span>
         <div class="bom"></div>
    </div>
</template>
<style scoped lang="less">
.head{
    width:375px;
    height: 104px;
    padding-top: 26px;
    padding-left: 30px;
    position: relative;
}
.head .img1{
    width:40px;
    height: 40px;
    float: left;
}
.searchbox{
    width:364px;
    float: left;
    position: relative;
    top: -40px;
    left: 90px;
}
.searchbox .jd{
    width: 40px;
    height: 35px;
    position: absolute;
     top: 15px;
  left: 30px;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid #999;
}
.searchbox .search{
    width: 30px;
    height:30px;
    position: absolute;
     top: 13px;
  left: 100px;
}
.searchbox input{
    width: 100%;
    height: 60px;
    border-radius:40px;
    padding-left: 136px;
}
.head span{
    display: inline-block;
    position: absolute;
    right: -4.04rem;
    top: 26px;
}
.bom{
    width: 750px;
    height: 2px;
    background: #ddd;
    position: absolute;
    bottom:0px;
    left: 0px;
}
</style>
