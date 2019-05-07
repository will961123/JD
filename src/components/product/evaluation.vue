<template>
  <div class="evaluation">
    <div class="evaheardr">
       <h3 class="evtxt">评价</h3>
      <p class="evok">好评
        <span class="evoknub">99%</span>
      </p>
      <p class="article">共&nbsp;
        <span>327万+</span>&nbsp;条
      </p>
       <div class="evrimg">
      </div>
    </div>
    <div class="evafoots">
      <div class="evacat">
        <ul>
          <li class="cats" v-for="(item,index) in evacats" :key=index>{{item}}</li>
        </ul>
      </div>
      <div class="evamin"></div>
    </div>
  </div>
</template>
<script>
import {getEvacat} from '@/api'
export default {
  data () {
    return {
      evacats: null
    }
  },
  async created () {
    console.log(await getEvacat())
    this.evacats = await getEvacat()
  }
}
</script>
<style scoped lang="less">
.evaluation{
  background-color:#e8e8ed;
  .evaheardr{
    position:relation;
    background-color:white;
    height:88px;
    width:100%;
    padding:20px;
    display:flex;
    line-height:88px;
    color:#666;
    h3.evtxt{
      font-size:32px;
      color:#333;
      font:system;
    }
    .evok{
      font-size:12px;
        position:absolute;
        left:104px;
        color:#e4393c;
      }
    .article{
      position:absolute;
      right:80px;
    }
    .evaheardr>.evrimg{
      // position:absolute;
      // right:10px;
      // top:50%;
      width:100px;
      height:100px;
      border:2px solid gray;
      // background-image:url('image/right.png') no-repeat;
    }
  }
  .evafoots{
    background-color:white;
    margin-top:2px;
    color:#666;
    padding:0 20px;
    .evacat{
      height:142px;
      padding:28px 6px 0 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      ul .cats{
        display:inline-block;
        padding:0 10px;
        height:50px;
        line-height:50px;
        font-size:24px;
        font-family: -apple-system,Helvetica,sans-serif;
        background-color:#fdf0f0;
        margin:0 20px 20px 0;
        border-radius:6px;
      }
    }
  }
}

</style>
