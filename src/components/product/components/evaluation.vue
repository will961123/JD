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
      <div class="evamin">
        <ul>
          <li class="eval" v-for="(item,index) in minevas" :key='index'>
            <div class="evaltop">
              <img class="evalimg" :src="item.avatar" alt="">
              <span class="usename">{{item.usname}}</span>
              <span class="plus"></span>
              <span class="star" v-for="(item,index) in 5" :key=index></span>
              <span class="pubtime">{{item.pubtime}}</span>
            </div>
            <div class="evalbottom">
              <p>{{item.mintxt}}</p>
              <div class="pubimg">
                <img  v-for="(item,index) in item.pubimg" :key="index" :src="item" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="evafoot">
      <div class="evaff">
        <p>查看全部评价</p>
      </div>
    </div>
  </div>
</template>
<script>
import {getEvacat, getMineva} from '@/api'
export default {
  data () {
    return {
      evacats: null,
      minevas: null
    }
  },
  async created () {
    // console.log(await getEvacat())
    this.evacats = await getEvacat()
    this.minevas = await getMineva()
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
    .evamin{
      ul li{
        height:420px;
        padding:10px 0;
        .evaltop{
          height:50px;
          line-height:50px;
          display:flex;
          position:relative;
          .evalimg{
            width:50px;
            border-radius:50%;
          }
          .usename{
            display:inline-block;
            margin-left:20px;
            color:#333;
            vertical-align: middle;
          }
          .plus{
            display:inline-block;
            width:56px;
            height:20px;
            line-height:50px;
            margin:16px 2px 0 4px;
            background:#aaa url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAUBAMAAAAuMzNdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTEFBQUFBQf/xk+3hi9rPg1ZVSm9sVcO6eYuGYaykb5uVaGO9T/MAAAACdFJOUwCAmytOGAAAAKpJREFUKM9jEFLCAxgY8coyCOGVZcQrC9SsbOLiUaSkbATkgwgg1gxxaYfIMoG46u4ososnqTVPQsgqbUWRdVZSSm1Ckp2CIhucBLMXIrsCRbYksghZVhPVXqVZIW1wWWNjU1Q3KympNRchmQwVVDUDMpyUgNYmB2HKalkqKRU3KYWB1WDIKoUUqQEd3DJNafIiVFkTF5cgJe0QF6B7tINdomGuwhfOAyILAK7aWHYLoiY4AAAAAElFTkSuQmCC);
            background-size:cover;
            vertical-align:middle;
            background-repeat:no-repeat;
          }
          .star{
              display:inline-block;
              width:20px;
              height:20px;
              margin:16px 2px 0 2px;
              background:#fff url(../image/star.png);
              background-size:cover;
              background-repeat:no-repeat;
          }
          .pubtime{
            position:absolute;
            right:20px;
            color:#999;
          }
        }
        .evalbottom{
          p{
             display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            font-size:28px;
            color:#333;
            margin:5px 0;
          }
          .pubimg{
            display:flex;
            overflow-x:scroll;
            img{
              padding:10px 10px 10px 0;
            }
          }
        }
      }
    }
  }
  .evafoot{
    padding:20px;
    text-align:center;
    background-color:#fff;
    .evaff{
      height:50px;
      width:200px;
      margin:auto;
      border:2px solid gray;
      border-radius:40px;
      line-height:50px;
      background:url(../image/right.png) right no-repeat;
      background-size:36px 30px;
      color:#333;
    }
  }
}

</style>
