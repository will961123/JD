<template >
  <div class="daily">
    <img
      src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/36112/14/6116/23804/5cc29af1Ed0956b56/87d57b0070cca315.png!q70.jpg.dpg"
      alt
    >
    <div class="button">
      <div class="lattice">
        <p class="txt1">免息星球</p>
        <p class="txt2">白条免息购</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/n1/s150x150_jfs/t1/34840/24/3223/15768/5cbd65d3E685eddad/0e188bc8da7f5680.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">品牌秒杀</p>
        <p class="txt2">低价抢大牌</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/n1/s150x150_jfs/t1/21261/29/6933/278615/5c662637E6c79dfbe/90971d426f489c15.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">闪购</p>
        <p class="txt2">大牌限时特卖</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/n1/s150x150_jfs/t1/22571/30/5857/60351/5c45308eE5fbda21e/62d4d2e6418d794d.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">拍拍二手</p>
        <p class="txt2">大牌包五折起</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/mobilecms/s150x150_jfs/t18184/284/245723/39588/47c2cb6b/5a56fd19N80f5a210.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">排行榜</p>
        <p class="txt2">专属购物指南</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/n1/s150x150_jfs/t1/3545/14/11034/563231/5bcd4858Ed3b26a01/9adc3fee7bd4ad8f.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">发现好货</p>
        <p class="txt2">探索新生活</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/n1/s150x150_jfs/t1/36184/31/1878/481922/5cb466e1Eb2a89b5a/4c3ad194071e9ec3.png!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">会卖专辑</p>
        <p class="txt2">好物大集合</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/n1/s150x150_jfs/t2608/232/4216696250/49944/13a6b14d/57aecc7aNc9b9112b.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
      <div class="lattice">
        <p class="txt1">新品首发</p>
        <p class="txt2">华为P30</p>
        <div>
          <img
            class="picture"
            src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/16097/29/12819/62040/5c9add4cE1b45f5ea/e48679e904c29d30.jpg!q70.jpg.dpg"
            alt
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
* {
  background: #f6f6f6;
}
.daily > img {
  width: 100%;
}
.button {
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
}
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
.lattice {
  width: 24%;
  background: white;
  margin: 0 0.5%;
}
.lattice > p {
  text-align: left;
}
.txt1 {
  font-size: 30px;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(20%, #e74c3c),
    color-stop(40%, #f4d03f),
    color-stop(60%, #ff2a2a),
    color-stop(80%, #f139d2),
    to(#a569bd)
  );
  background-image: -webkit-linear-gradient(
    left,
    #e74c3c 20%,
    #f4d03f 40%,
    #ff2a2a 60%,
    #f139d2 80%,
    #a569bd 100%
  );
  background-image: linear-gradient(
    to right,
    #e74c3c 20%,
    #f4d03f 40%,
    #ff2a2a 60%,
    #f139d2 80%,
    #a569bd 100%
  );
}
.txt2 {
  font-size: 16px;
  background: transparent;
  /* background-image:
          -webkit-gradient( linear, left top, right top,
          color-stop(0, #f22),
          color-stop(0.15, #f2f),
           color-stop(0.3, #f22),
          color-stop(0.45, #2ff),
          color-stop(0.6, #f22),
          color-stop(0.75, #2f2),
          color-stop(0.9, #ff2),
          color-stop(1, #f22) );
          color: transparent;
           -webkit-background-clip: text;-moz-background-clip: text;-ms-background-clip: text */
}
.picture {
  width: 100%;
  overflow: hidden;
  text-align: center;
}
</style>
