<template>
  <div class="r-content wrapper">
    <!-- banner -->
    <ul class="ful content">
      <li>
        <img
          src="//img11.360buyimg.com/mcoss/jfs/t14026/352/1775685408/39507/1dfb9518/5a28efe9N353f6584.jpg"
          alt
        >
      </li>
      <li v-for="(fitem,findex) in 10" :key="findex">
        <p>热门分类</p>
        <ul class="sul">
          <li v-for="(item,index) in 3" :key="index">
            <img
              src="//img12.360buyimg.com/focus/s140x140_jfs/t13804/331/788425953/5641/fb956619/5a13fd8fN4e9177a5.jpg"
              alt
            >
            <span>抢尖货</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cateRight: null
    };
  }
  //   async mounted () {
  //     this.cateList = await getCate()
  //   }
};
</script>
<style scoped lang="less">
.r-content {
  height: 100%;
  width: calc(100% - 80px);
  float: left;
  padding-left: 10px;
}
.r-content img {
  width: 100%;
}

.ful li p {
  font-size: 13px;
  font-weight: 600;
}
.sul {
  width: 100%;
  display: flex;
  padding-top: 10px;
}
.sul li {
  flex: 1;
  width: calc(100% / 3);
  text-align: center;
}
.sul li img {
  width: 68px;
  display: block;
  margin: 0 auto;
}
</style>
