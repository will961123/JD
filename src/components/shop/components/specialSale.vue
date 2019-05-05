<template>
  <div class="specialSale">
    <div class="pinEntries">
      <div class="pin99">
        <h1>
          <a href="javascript::">
            <span></span>
            <em>9.9元</em>拼
          </a>
        </h1>
        <div class="pin99_item">
          <a href="javascript::">
            <img
              src="//img12.360buyimg.com/evalpic/s240x240_jfs/t1/43519/10/1096/101104/5cc51cdcE7ce7e96d/ce83761ff5be4d64.jpg"
            >
            <h2>
              <span class="text1">
                ￥
                <em>9</em>
                <i>.9</i>
              </span>
              <span class="text2">￥49</span>
            </h2>
            <p>
              <span>已拼3134件</span>
            </p>
          </a>
        </div>
        <div class="sale_item">
          <a href="javascript::">
            <img
              src="//img12.360buyimg.com/evalpic/s240x240_jfs/t1/22805/10/8561/197691/5c76b717Ef013b47c/6b19a1ffcd1b45df.jpg"
            >
            <h2>
              <span class="text1">
                ¥
                <em>9</em>
                <i>.9</i>
              </span>
              <span class="text2">¥49</span>
            </h2>
            <p>
              <span>已拼3134件</span>
            </p>
          </a>
        </div>
      </div>
      <div class="ss_sale">
        <h1>
          <a href="javascript::">
            <span></span>
            <em>名品</em>特卖
          </a>
        </h1>
        <div class="pin99_item">
          <a href="javascript::">
            <img
              src="//img12.360buyimg.com/evalpic/s240x240_jfs/t1/42335/31/1388/100949/5cc6611aE69147216/4dfc91b1d136fc1f.jpg"
            >
            <img
              class="sale_logo"
              src="//img12.360buyimg.com/evalpic/s240x240_jfs/t1/38825/9/3756/6556/5cc660f1E631f6ed1/27d7578d48e0606f.jpg"
              alt
            >
            <p>
              <span>已拼3134件</span>
            </p>
          </a>
        </div>
        <div class="sale_item">
          <a href="javascript::">
            <img
              src="//img12.360buyimg.com/evalpic/s240x240_jfs/t1/22805/10/8561/197691/5c76b717Ef013b47c/6b19a1ffcd1b45df.jpg"
            >
            <img
              class="sale_logo"
              src="//img14.360buyimg.com/evalpic/s240x240_jfs/t1/43907/38/1183/5556/5cc5541cE0467062f/83c648929fbbd2f6.jpg"
              alt
            >
            <p>
              <span>已拼3134件</span>
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="sale_banner">
      <img src="//img20.360buyimg.com/mcoss/jfs/t1/40214/21/4210/48535/5cc80cf5Effbf9264/81f68f193a1c38e4.png" alt="">
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.specialSale {
  width: 100%;
  background: #f0f0f0;
  .pinEntries {
    overflow: hidden;
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
    display: flex;
    h1 {
      width: 100%;
      margin-bottom: 0.15rem;
      font-size: 32px;
      color: #151515;
      line-height: 0.6rem;
      font-weight: 700;
      a {
        color: #333;
        em {
          font-style: normal;
          color: #e93b3d;
          font-weight: 700;
        }
      }
    }
    img {
      display: block;
      width: 152px;
      height: 152px;
    }
    div {
      flex: 1;
      width: 50%;
      height: 4.25rem;
      padding-top: 0.2875rem;
      padding-left: 0.375rem;
    }
    .pin99 {
      width: 100%;
      border-right: 1px solid #f0f0f0;
      p {
        color: #999;
        font-size: 0.3rem;
        white-space: nowrap;
      }
      div {
        float: left;
      }

      .sale_item {
        padding-top: 0;
        padding-left: 0;
        width: 152px;
        height: 100%;
        margin-right: 15px;
        float: left;
        text-align: center;
        h2 {
          width: 100%;
          display: block;
          cursor: pointer;
          font-size: 28px;
          font-weight: 400;
          margin-top: 7px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          span.text1 {
            color: #e93b3d;
            font-size: 0.3rem;
            font-weight: 700;
            white-space: nowrap;
            em {
              font-size: 32px;
              font-style: normal;
            }
          }
          span.text2 {
            font-size: 22px;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
      .pin99_item {
        padding-top: 0;
        padding-left: 0;
        width: 152px;
        margin-right: 15px;
        float: left;
        text-align: center;
        h2 {
          display: block;
          cursor: pointer;
          font-size: 28px;
          font-weight: 400;
          margin-top: 7px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          span.text1 {
            color: #e93b3d;
            font-size: 0.3rem;
            font-weight: 700;
            em {
              font-size: 32px;
              font-style: normal;
            }
          }
          span.text2 {
            font-size: 22px;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
    }
    .ss_sale {
      width: 100%;
      p {
        color: #999;
        font-size: 0.3rem;
        white-space: nowrap;
      }
      div {
        float: left;
      }

      .sale_item {
        padding-top: 0;
        padding-left: 0;
        width: 152px;
        margin-right: 15px;
        float: left;
        text-align: center;
        a {
          img.sale_logo {
            display: block;
            background-color: #fff;
            width: 1.4rem;
            height: 0.7rem;
            margin: 0 auto;
          }
        }
      }
      .pin99_item {
        padding-top: 0;
        padding-left: 0;
        width: 152px;
        margin-right: 15px;
        float: left;
        text-align: center;
        a {
          img.sale_logo {
            display: block;
            background-color: #fff;
            width: 1.4rem;
            height: 0.7rem;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .sale_banner{
    margin: 0 auto;
    width: 9.2rem;
    height: 2.6rem;
    padding-top: 10px;
    background-color: #f7f7f7;
    img{
      width: 100%!important;
      height: auto!important;
    }
  }
}
</style>
