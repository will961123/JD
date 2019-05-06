<template>
    <div class="login">
        <div class="login-header">
            <span class="header-back" @click="goBack"><img src="../images/back.png" /></span>
            <span class="header-title">京东登录</span>
        </div>
        <div class="login-content">
            <div class="input-wrap">
                <input id="user" ref="user" type="text" name="user" @focus='user_show_close = true' @blur='user_show_close = false' placeholder='用户名/邮箱/已验证手机'/>
                <span v-show="user_show_close" class="user-close" @click="clearUser"><img src='../images/close.png' /></span>
            </div>
            <div class="input-wrap">
                <input id="pwd" ref="pwd" type="password" name="pwd" @focus='pwd_show_close = true' @blur='pwd_show_close = false' placeholder='请输入密码'/>
                <span v-show="pwd_show_close" class="pwd-close" @click="clearPwd"><img src="../images/close.png" /></span>
                <span class="pwd-eye"><img src="../images/eye_close.png" /></span>
                <span class="forget-pwd">忘记密码</span>
            </div>
            <a class="cont-login" href="javascript:;">登录</a>
            <a class="cont-yijian" href="javascript:;">一键登录</a>
            <div class="others">
                <span>短信验证码登录</span>
                <span>手机快速注册</span>
            </div>
            <div class="other-login">
                <p>其他登录方式</p>
                <div class="other-login-cont">
                    <div>
                        <a href="javascript:;">
                            <img src='../images/qq.png' />
                            <span>QQ</span>
                        </a>
                        <a href="javascript:;">
                            <img src="../images/weixin.png" />
                            <span>微信</span>
                        </a>
                    </div>
                </div>
            </div>
            <p class="secrect">登录即代表您已同意<a href="#">京东隐私政策</a></p>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      user_show_close: false,
      pwd_show_close: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    clearUser () {
      this.$refs.user.value = ''
    },
    clearPwd () {
      this.$refs.pwd.value = ''
    }
  }
}
</script>

<style lang="less" scoped >
.login{
    background:#fff;
    .login-header{
        position:relative;
        width:100%;
        height:88px;
        line-height:88px;
        background:#fff;
        text-align:center;
        .header-back{
            position:absolute;
            left:30px;
            top:10px;
            img{
                width:40px;
                height:40px;
                color:#222;
            }
        }
        .header-title{
            font-size:34px;
            color:#222;
        }
    }
    .login-content{
        background:#fff;
        padding:0 50px 0 30px;
        .input-wrap{
            position:relative;
            width:100%;
            height:100px;
            line-height:100px;
            padding:20px 0;
            margin:10px 0;
            border-bottom:1px solid #eee;
            input{
                height:60px;
                line-height:60px;
                font-size:32px;
            }
            .user-close{
                position:absolute;
                right:0;
                img{
                    width:32px;
                }
            }
            #user{
                width:calc(100% - 32px);
            }
            #pwd{

            }
            .pwd-close{
                position:absolute;
                left:420px;
                img{
                    width:32px;
                }
            }
            .pwd-eye{
                position:absolute;
                left:480px;
                img{
                    width:36px;
                }
            }
            .forget-pwd{
                font-size:28px;
                color:#222;
                float:right;
                &:before{
                    content:'';
                    display:inline-block;
                    width:2px;
                    height:24px;
                    background:#aaa;
                    position:relative;
                    left:-20px;
                }
            }
        }
        .cont-login{
            display:block;
            width:650px;
            height:100px;
            background:#FFBFB4;
            color:#fff;
            font-size:32px;
            line-height:100px;
            text-align:center;
            border-radius:50px;
            margin:0 auto;
            margin-top:40px;
        }
        .cont-yijian{
            display:block;
            width:650px;
            height:100px;
            background:#fff;
            color:#f10000;
            font-size:32px;
            line-height:100px;
            text-align:center;
            border-radius:50px;
            border:2px solid red;
            box-sizing:border-box;
            margin:0 auto;
            margin-top:20px;
        }
        .others{
            width:100%;
            margin:40px 0 0 0;
            display:flex;
            justify-content:space-between;
            color:#999;
            font-size:28px;
        }
        .other-login{
            margin-top:100px;
            text-align:center;
            font-size:24px;
            color:#ccc;
            div{
                padding:40px 0;
                a{
                    display:inline-block;
                    margin-left:40px;
                    color:#999;
                    text-align:center;
                    img{
                        display:block;
                        margin-bottom:10px;
                    }
                }
            }
        }
    }
    .secrect{
        text-align:center;
        color:#999;
    }
}
</style>
