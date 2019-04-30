<template>
    <div class="cate">
        <div class="cateleft wrapper">
            <ul classs="ful content">
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
.cate{
    height:calc(100% - 206px);
}
.cateleft{
    width: 170px;
    height:100%;
    overflow: hidden;
    overflow-y:auto;
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
