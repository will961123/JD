<template >
  <div class="daily">
    <img
      src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/36112/14/6116/23804/5cc29af1Ed0956b56/87d57b0070cca315.png!q70.jpg.dpg"
      alt
    >
    <div class="button">
      <div v-for="(item, index) in gdList" :key="index" class="lattice">
        <p class="txt1">{{item.p1}}</p>
        <p class="txt2">{{item.p2}}</p>
        <div>
          <img class="picture" :src="item.img" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gethGdaily } from '@/api'
export default {
  data () {
    return {
      gdList: []
    }
  },
  async created () {
    this.gdList = await gethGdaily()
  }
}
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
