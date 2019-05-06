<template>
    <div class="shopHot">
        <ul class="ul">
            <li class="li" v-for="(item,index) in shopList" :key="index">
                <img class="img" :src="item.img"/>
                <p class="p" >{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { getShopHot } from '@/api/index.js'
export default {
  data () {
    return {
      shopList: null
    }
  },
  async created () {
    this.shopList = await getShopHot()
  }
}
</script>
<style scoped lang="less">
.ul {
  width: calc(100% - 32px);
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px 0;
  .li {
    width: 20%;
    .img {
      width: 72px;
      height: 72px;
      display: block;
      margin: 20px auto;
    }
    .p {
      font-size: 24px;
      color: #666;
      text-align: center;
    }
  }
}
</style>
