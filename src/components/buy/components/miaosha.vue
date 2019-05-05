<template>
  <div class="miaosha">
    <div class="miao-top">
      <span>京东秒杀</span>
    </div>
    <div class="miao-bottom">
      <div class="skill">
        <span class="jdskill">京东秒杀</span>
        <span class="jdchang">16点场</span>
        <ul>
          <li>
            <span>{{Time.hour}}:</span>
          </li>
          <li>
            <span>{{Time.minute}}:</span>
          </li>
          <li class="last">
            <span>{{Time.second}}</span>
          </li>
        </ul>
      </div>
      <div class="Miao">
        <ul>
          <li v-for="(item,index) in miaoList" :key="index">
            <img :src="item.img">
            <span>{{item.price}}</span>
            <i>{{item.sprice}}</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import getTime from '@/utils/miaosha'
import { getMiaoSha } from '@/api'
export default {
  data () {
    return {
      Time: {
        hour: '00',
        minute: '00',
        second: '00'
      },
      miaoList: null
    }
  },
  created () {
    setInterval(() => {
      this.Time = getTime('2019-05-05 23:59')
    }, 1000)
  },
  async mounted () {
    this.miaoList = await getMiaoSha()
  }
}
</script>
<style scoped>
.miao-top span {
  display: block;
  text-align: center;
  position: relative;
  margin: 30px 0;
  font-size: 24px;
  color: #999;
}
.miao-top span::before {
  display: inline-block;
  content: "";
  width: 280px;
  height: 2px;
  background: #ccc;
  position: absolute;
  top: 14px;
  left: 20px;
}
.miao-top span::after {
  display: inline-block;
  content: "";
  width: 280px;
  height: 2px;
  background: #ccc;
  position: absolute;
  top: 14px;
  right: 20px;
}
.miao-bottom {
  margin: 0 0 20px 20px;
  background: white;
}
.skill{
    padding-top:20px;
}
.miao-bottom .skill .jdskill {
  display: inline-block;
  font-size: 32px;
  color: #333;
  margin: 0 20px 0 30px;
  font-weight: 700;
}
.miao-bottom .skill .jdchang {
  display: inline-block;
  color: #999;
  font-size: 24px;
}
.miao-bottom .skill ul {
  display: inline-block;
}
.miao-bottom .skill ul li {
  display: inline-block;
  border-radius: 2px solid #666;
  /* box-shadow: 0 1px 2px hsla(0,0%,67%,.2); */
}
.miao-bottom .skill ul li span {
  color: red;
  font-size: 20px;
}
.Miao ul{
    display:flex;
    width: 100%;
    overflow-x: auto;
}
.Miao ul li{
    padding: 20px 20px;
}
.Miao ul li img {
  width: 164px;
  height: 164px;
}
.Miao ul li span{
    font-size: 32px;
    margin-top: 5px;
   color:red;
}
.Miao ul li i{
    display: block;
    font-size: 12px;
    color: #ccc;
    line-height: 1;
    text-decoration: line-through;
}
</style>
