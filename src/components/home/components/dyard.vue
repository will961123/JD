<template>
  <!-- 东家小院 -->
  <div class="dyard">
    <img
      src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/35491/32/3909/24646/5cc29b10Ef41f5d1c/7114cc48ed7edaa0.png!q70.jpg.dpg"
      alt
    >
    <div class="sp0">
      <ul>
        <li class="one" v-for="(item,index) in dyard.dyard1" :key="index">
          <span class="wa">{{item.title}}</span>
          <span class="wd">{{item.sub}}</span>
          <img :src="item.img1" alt>
          <img :src="item.img2" alt>
        </li>
        <li class="two" v-for="(item,tindex) in dyard.dyard2" :key="tindex+10">
          <span class="wz">{{item.title}}</span>
          <span class="wd">{{item.sub}}</span>
          <img :src="item.img" alt>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gethDyard } from '@/api'
export default {
  data () {
    return {
      /* dyard: null */
      dyard: {
        dyard1: [],
        dyard2: []
      }
    }
  },
  async created () {
    this.dyard = await gethDyard()
  }
}
</script>

<style scoped>
.dyard {
  background: #f6f6f6;
}
.dyard img {
  width: 100%;
}
.sp0 ul {
  display: flex;
  flex-wrap: wrap;
}
.sp0 ul li {
  width: 23%;
  margin: 2px;
  background: white;
  align-items: center;
}
.sp0 ul li span {
  display: flex;
}
.sp0 .one {
  width: 48%;
  margin: 2px 2px;
  padding: 1px 5px;
  flex-wrap: nowrap;
}
.one img {
  width: 45%;
  margin: 2px 5px;
  flex-wrap: nowrap;
}
.one .wa {
  font-size: 35px;
  padding: 0 5px;
  color: #1878fb;
}
.one .wf {
  clear: both;
}
.sp0 .two {
  margin: 2px 2.5px;
  padding: 1px 5px;
}
.two .wz {
  font-size: 35px;
  color: black;
}
.sp0 .wd {
  font-size: 25px;
  color: #666771;
}
</style>
