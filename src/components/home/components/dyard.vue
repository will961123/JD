<template>
  <!-- 东家小院 -->
  <div class="dyard">
    <img
      src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/35491/32/3909/24646/5cc29b10Ef41f5d1c/7114cc48ed7edaa0.png!q70.jpg.dpg"
      alt
    >
    <div class="sp0">
      <ul>
        <li class="one" v-for="(item,index) in dyard1" :key="index">
          <span class="wa">{{item.title}}</span>
          <span class="wd">{{item.sub}}</span>
          <img :src="item.img1" alt>
          <img :src="item.img2" alt>
        </li>
        <li class="two" v-for="(item,index) in dyard2" :key="index">
          <span class="wz">{{item.title}}</span>
          <span class="wd">{{item.sub}}</span>
          <img :src="item.img" alt>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /* dyard: null */
      dyard1: [
        {
          title: '乒乓健将',
          sub: '你来我往斗智斗勇',
          img1:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t26980/161/1454785636/269078/699b0ef/5bea7eb7N269193ab.jpg!q70.jpg.dpg',
          img2:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/37419/11/2801/163234/5cb839c3E990eda6d/e6140f888b03f2b5.jpg!q70.jpg.dpg'
        },
        {
          title: '流行风尚',
          sub: '探索夏日的路易威登',
          img1:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t3655/290/233986194/86343/809eb218/5807109fN84c3c6af.jpg!q70.jpg.dpg',
          img2:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t19828/270/315026457/78508/fd8e1291/5af00978N64948101.jpg!q70.jpg.dpg'
        }
      ],
      dyard2: [
        {
          title: '休闲春光',
          sub: '广场生活',
          img:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t23233/299/1493167730/232149/f059623a/5b612e00N576c1901.jpg!q70.jpg.dpg'
        },
        {
          title: '初夏清爽',
          sub: '初夏抢鲜购',
          img:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t30292/48/522142398/65088/6bdcb7a1/5bf6075cNac63c261.jpg!q70.jpg.dpg'
        },
        {
          title: '运动汇',
          sub: '大牌好物',
          img:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/32913/17/10087/214440/5cac5e88E508cbd6e/d0da028b76d4971c.jpg!q70.jpg.dpg'
        },
        {
          title: '少年派',
          sub: '少年游',
          img:
            'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/22189/13/14232/374596/5ca7fca4E7be4f797/3e25d7035903c754.jpg!q70.jpg.dpg'
        }
      ]
    }
  }
  /* async created () {
    this.adyard = await dyard(),
  } */
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
