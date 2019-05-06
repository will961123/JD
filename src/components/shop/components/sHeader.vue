<template>
  <div>
    <div class="headerBox">
      <span class="fanhui"></span>
      <p>京东拼购</p>
      <span class="more"></span>
    </div>
    <div class="searchbox">
      <div class="search">
        <img src="https://img11.360buyimg.com/jdphoto/jfs/t1/20446/16/15033/13722/5cab4598E57d199ef/ed95ad7d467d2095.gif" alt>
        <input type="text" placeholder="去京东拼购搜索 沐浴露">
      </div>
    </div>
    <div class="catebox">
      <a href="javascript:;" class="first">
        <p :class="currentIndex===-1?'on':''" @click="changeFirst">精选</p>
      </a>
      <div class="catediv">
        <ul ref="myul" class="cateul">
          <li @click="changeIdx(index)" ref="myli" class="cateli" v-for="(item, index) in cateList" :key="index">
            <a href="javascript:;">
              <p :class="index===currentIndex?'on':''">{{item}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getShopToplist} from '@/api'
export default {
  data () {
    return {
      currentIndex: null,
      cateList: []
    }
  },
  async mounted () {
    this.currentIndex = this.$store.state.shopListIndex
    this.cateList = await getShopToplist()
    var that = this
    this.$nextTick(function () {
      that.$refs.myul.style.width =
      that.$refs.myli[0].getBoundingClientRect().width * 17 + 'px'
    })
  },
  methods: {
    changeIdx (index) {
      this.currentIndex = index
      this.$store.dispatch('changeShopList', index)
      console.log(this.$store.state.shopListIndex)
    },
    changeFirst () {
      this.currentIndex = -1
      this.$store.dispatch('changeShopList', -1)
      console.log(this.$store.state.shopListIndex)
    }
  }
}
</script>

<style lang="less" scoped>
.headerBox {
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 24px;
  height: 88px;
  font-size: 32px;
  color: #333;
  line-height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(207, 204, 204); /* no */
  span {
    display: block;
    width: 40px;
    height: 40px;
    background-size: cover;
  }
  .fanhui {
    background: url(../images/fanhui.png) no-repeat;
  }
  .more {
    background: url(../images/more.png) no-repeat;
  }
}
.searchbox {
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  .search {
    flex: 1;
    margin: 0 20px;
    background: #f2f2f7;
    border-radius: 28px;
    display: flex;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
      margin-left: 20px;
    }
    input {
      width: 80%;
      height: 56px;
      border: none;
      background: #f2f2f7;
      padding-left: 50px;
      background: url(../images/search.png) 10px 50% no-repeat;
      &::placeholder {
        color: #b5bec5;
      }
    }
  }
}
.catebox {
  width: 100%;
  color: #666;
  font-size: 28px;
  height: 80px;
  line-height: 80px;
  box-sizing: border-box;
  .first {
    margin: 0 20px;
    color: #666;
    float: left;
    box-sizing: border-box;
    p {
      height: 80px;
      box-sizing: border-box;
      line-height: 76px;
    }
  }
  .on {
    border-bottom: 6px solid red;
    color: red;
  }
  .catediv {
    overflow-x: auto;
    .cateul {
      .cateli {
        float: left;
        line-height: 76px;
        a {
          color: #666;
          p {
            margin: 0 20px;
          }
        }
      }
    }
  }
}
</style>
