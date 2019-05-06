<template>
  <div class="welfare">
    <div class="welfare_head">
      <div class="welfare_title">
        新用户福利
        <i class="dot"></i>
        专属优惠礼包
      </div>
      <a href="javascript::" class="mod_coupon_get">一键领取</a>
    </div>
    <div class="welfare_area">
      <div class="mod_coupon type_dong">
        <div class="mod_coupon_info">
          <p class="c_type">东券</p>
          <div class="c_conent">
            <span class="yen">¥</span>
            <span class="num">6</span>
          </div>
          <div class="c_desc">全品类可用</div>
        </div>
        <div class="mod_coupon_more">满120可用</div>
      </div>
      <div class="mod_coupon type_dong">
        <div class="mod_coupon_info">
          <p class="c_type">东券</p>
          <div class="c_conent">
            <span class="yen">¥</span>
            <span class="num">9</span>
          </div>
          <div class="c_desc">全品类可用</div>
        </div>
        <div class="mod_coupon_more">满150可用</div>
      </div>
      <div class="mod_coupon type_yun">
        <div class="mod_coupon_info">
          <p class="c_type">运券</p>
          <div class="c_conent">
            <span class="yen yun">¥</span>
            <span class="num yn">8</span>
          </div>
          <div class="c_desc">运费券</div>
        </div>
        <div class="mod_coupon_more ym">满0可用</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.welfare {
  padding: 15px 10px;
  background: #fff;
  font-family: JDZH-Regular;
  .welfare_head {
    display: flex;
    justify-content: space-between;
    .welfare_title {
      // width: 223px;
      // height: 30px;
      position: relative;
      padding: 0 30px;
      font-size: 30px;
      color: #333;
      line-height: 55px;
      .dot {
        position: relative;
        padding: 0 10px 0 7px;
      }
      .dot::after {
        position: absolute;
        content: "";
        width: 3px;
        height: 3px;
        background: #333;
        border-radius: 50%;
        top: 50%;
        // margin-top: -2px;
      }
    }
    .mod_coupon_get {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      height: 55px;
      color: #fff;
      font-size: 28px;
      line-height: 54px;
      background-image: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#e93b3d),
        to(#ff9574)
      );
      background-image: -webkit-linear-gradient(right, #e93b3d, #ff9574);
      background-image: linear-gradient(-90deg, #e93b3d, #ff9574);
      box-shadow: 0 10px 20px 0 rgba(233, 59, 61, 0.2);
      border-radius: 30px;
      padding: 0 22px;
    }
    .welfare_title::before {
      position: absolute;
      content: "";
      width: 22px;
      height: 31px;
      background: url("../images/welfare_bg1.png") no-repeat;
      background-size: 12px;
      left: 0;
      top: 7px;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    .welfare_title::after {
      position: absolute;
      content: "";
      width: 22px;
      height: 31px;
      background: url("../images/welfare_bg1.png") no-repeat;
      background-size: 12px;
      top: 20px;
      left: 390px;
    }
  }
  .welfare_area {
    height: 128px;
    margin-top: 12px;
    display: flex;
    .mod_coupon {
      flex: 1;
      width: 100%;
      height: 128px;
      position: relative;
      margin-right: 3px;
      overflow: hidden;
      margin-top: 24px;
      .mod_coupon_info {
        height: 74px;
        padding: 0 16px;
        overflow: hidden;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        border-top: 1px solid #f7f7f7;
        p.c_type {
          position: absolute;
          z-index: 0;
          width: 72px;
          height: 72px;
          line-height: 72px;
          border: 2px solid #eee;
          border-radius: 50%;
          top: -22px;
          left: -8px;
          color: #eee;
          text-align: center;
          font-size: 28px;
        }
        .c_conent {
          color: #6ed1d3;
          position: relative;
          line-height: 1;
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          max-width: 62px;
          vertical-align: bottom;
          overflow: hidden;
          .yen {
            position: absolute;
            color: #6ed1d3;
            left: 0;
            bottom: 10px;
            font-size: 24px;
          }
          .num {
            padding-left: 20px;
            font-weight: 700;
            font-size: 48px;
            position: relative;
            top: 28px;
            display: block;
            max-width: 104px;
          }
        }
        .c_desc {
          position: relative;
          padding-left: 6px;
          line-height: 24px;
          height: 24px;
          margin-top: 42px;
          font-size: 20px;
          color: #999;
        }
      }
      .mod_coupon_more {
        padding: 0 10px;
        line-height: 24px;
        color: #fff;
        background-image: -webkit-linear-gradient(
          269deg,
          #73d2d4 2%,
          #53c7ca 99%
        );
      }
    }
    .mod_coupon::before {
      position: absolute;
      content: "";
      width: 6px;
      height: 128px;
      top: 0;
      z-index: 3;
      left: 0;
      background: url("../images/welfare_bg2.png") no-repeat;
      background-size: 6px 128px;
    }
    .mod_coupon::after {
      position: absolute;
      content: "";
      width: 6px;
      height: 128px;
      top: 0;
      z-index: 3;
      right: 0;
      background: url("../images/welfare_bg3.png") no-repeat;
      background-size: 6px 128px;
    }
  }
}
.yen.yun{
  color: #7ea7ce!important;
}
.num.yn{
  color: #7ea7ce!important;
}
.mod_coupon_more.ym{
  background: #7ea7ce!important;
}
</style>
