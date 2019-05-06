<template>
  <div class="userInfo">
    <div class="my_header shadow">
      <div class="user_info">
        <div class="avatar_wrap">
          <div class="avatar">
            <div
              class="image_info"
              style="background: url('https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png') 0px 0px / 100% 100% no-repeat;"
            ></div>
          </div>
          <div class="hor-tips" style="z-index: -1;">
            <div class="real_name"></div>
            <div class="login line1">京享值493</div>
            <div class="login line1 goto_arrow">小白信用64.6</div>
          </div>
        </div>
        <div class="personal_wrap">
          <div class="name line1">
            <span class="line1">张三</span>
            <span class="my_header_v4_name_edit"></span>
            <div class="vip v2"></div>
          </div>
          <span class="pin line1">用户名：张三</span>
        </div>
        <div class="account_wrap">
          <div class="account_wrap_content">
            <span
              class="account-icon"
              style="background: url('https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png') 0px 0px / 100% 100% no-repeat;"
            ></span>账号管理
          </div>
        </div>
        <div
          class="plus_account move"
          style="background: url('https://img11.360buyimg.com/jdphoto/s100x18_jfs/t20647/287/1260001649/632/de55fa7f/5b235f3cNbe6fe972.png') 8px 4px/50px 10px #333 no-repeat
            ;"
        >
          <div class="plus_account_text">年卡特惠价</div>
        </div>
      </div>
    </div>
    <div class="edit_nick_alert_mask" hidden="hidden"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.userInfo {
  height: 217px;
  padding: 19px;
  background-color: #fff;
  .my_header {
    height: 217px;
    border-radius: 12px;
    background: -webkit-linear-gradient(left, #eb3c3c, #ff7459);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#eb3c3c),
      to(#ff7459)
    );
    background: linear-gradient(90deg, #eb3c3c, #ff7459);
  }
  .my_header.shadow {
    box-shadow: 2px 6px 8px rgba(228, 57, 60, 0.5);
    .user_info {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 218px;
      .avatar_wrap {
        width: 113px;
        height: 113px;
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        .avatar {
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid hsla(0, 0%, 100%, 0.4);
          border-radius: 120px;
          .image_info {
            width: 113px;
            height: 113px;
          }
        }
        .hor-tips {
          position: absolute;
          left: 4.2rem;
          bottom: -12px;
          z-index: 1;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          width: 7.5rem;
          .real_name {
            border-radius: 30px;
            display: inline-block;
            width: 100px;
            position: relative;
            margin-right: 0.125rem;
          }
          .login {
            display: inline-block;
            font-size: 18px;
            color: #fff;
            background: #c8483f;
            border-radius: 20px;
            text-align: center;
            margin-top: 19px;
            height: 30px;
            margin-right: 9.5px;
            line-height: 32px;
            padding: 0 15px;
          }
          .line1 {
            height: 28px;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .goto_arrow {
            height: 28px;
            line-height: 25px;
            position: relative;
            padding-right: 28px !important;
          }
          .goto_arrow::after {
            display: block;
            content: "";
            width: 8px;
            height: 8px;
            border-top: 2px solid hsla(0, 0%, 100%, 0.7);
            border-left: 2px solid hsla(0, 0%, 100%, 0.7);
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            position: absolute;
            right: 12px;
            top: 10px;
          }
        }
      }
      .personal_wrap {
        position: absolute;
        left: 170px;
        top: 40%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        .name {
          font-size: 28px;
          color: #fff;
        }
        .name.line1 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .my_header_v4_name_edit {
            display: inline-block;
            margin: 0 0 0 8px;
            width: 22px;
            height: 22px;
            vertical-align: middle;
            background: url("../images/userinfo_1.png") no-repeat;
            background-size: 22px;
          }
          .vip {
            display: inline-block;
            position: relative;
            margin: 0 10px 0 26px;
            padding: 0 12px 0 20px;
            height: 28px;
            line-height: 28px;
            vertical-align: middle;
            border-top-right-radius: 24px;
            border-bottom-right-radius: 24px;
            background-color: #c8483f;
            font-size: 24px;
            color: #fff;
          }
          .vip::before {
            position: absolute;
            width: 40px;
            height: 40px;
            left: -20px;
            top: 48%;
            margin-top: -20px;
            background: url(//wq.360buyimg.com/fd/base/img/my/icon_vip.png) 0 0/200px
              40px no-repeat;
          }
          .vip.v2::before {
            position: absolute;
            content: "";
            left: -20px;
            top: 48%;
            margin-top: -20px;
            background: url(//wq.360buyimg.com/fd/base/img/my/icon_vip.png)
              no-repeat;
            background-position: -40px 0;
            background-size: 200px;
          }
          .vip.v2::after {
            content: "\94DC\724C";
          }
        }
        .pin {
          display: block;
          margin-top: 8px;
          width: 4.625rem;
          font-size: 24px;
          color: hsla(0, 0%, 100%, 0.7);
        }
        .pin.line1 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .account_wrap {
        position: absolute;
        right: 30px;
        top: 0;
        height: 1rem;
        line-height: 1rem;
        overflow: hidden;
        .account_wrap_content {
          color: rgba(76, 0, 0, 0.7);
          font-size: 24px;
          padding-left: 30px;
          position: relative;
          height: 1rem;
          .account-icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            position: relative;
            top: 4px;
            right: 4px;
          }
        }
      }
      .plus_account {
        position: absolute;
        right: -0.05rem;
        bottom: -0.2rem;
        padding: 0.45rem 0.375rem 0.375rem 0.2rem;
        -webkit-transform: rotate(11deg);
        transform: rotate(11deg);
        box-shadow: -0.025rem -0.025rem 0.15rem #c6934d;
        border-top-left-radius: 0.1rem;
        background-position: 16px 8px;
      }
      .plus_account.move {
        bottom: -0.325rem;
        padding-bottom: 0.5rem;
        -webkit-animation: black_plus_card 0.8s linear 6 alternate;
        animation: black_plus_card 0.8s linear 6 alternate;
        .plus_account_text {
          position: relative;
          padding: 0 0.2rem 0 0.125rem;
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.175rem;
          color: #cead68;
          border-radius: 0.3rem;
          background-color: hsla(0, 0%, 85.1%, 0.1) !important;
        }
        .plus_account_text::before {
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border-radius: 0.3rem;
          pointer-events: none;
          border: 0.025rem solid #535353;
          content: "";
        }
        .plus_account_text::after {
          position: absolute;
          display: block;
          width: 0.075rem;
          height: 0.075rem;
          right: 0.1rem;
          top: 0.1rem;
          -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
          border-top: 0.025rem solid #cead68;
          border-left: 0.025rem solid #cead68;
          content: "";
        }
      }
    }
  }
}
</style>
