<template>
    <div class="cateleft">
        <div class="l-content">
            <ul>
                <li v-for="(item,index) in cateList" :key="index">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {getCate} from '@/api/index.js'
// import BScroll from 'better-scroll'
export default {
  data () {
    return {
      cateList: null
    }
  },
  async mounted () {
    this.cateList = await getCate()
  }
}
</script>
<style scoped lang="less">
.l-content{
    width: 170px;
    height:100%;
    ul{
        width:100%;
        li{
            width: 100%;
            height: 92px;
            font-size: 28px;
            line-height: 92px;
            text-align: center;
            color: #333;
        }
    }
}
</style>
