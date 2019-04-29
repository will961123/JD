<template>
    <div class="h_cate">
        <ul class="cate_list">
            <li v-for="(item, index) in cateList" :key="index">
                <img :src="item.img" />
                <span>{{item.name}}</span>
            </li>
        </ul>
        <div class="cate_news">
            <img :src="jdImg" />
            <ul>
                <li class="ellipsis">推荐：华为p30pro 元件成本曝光</li>
            </ul>
            <span class="news_more">更多</span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cateList: [
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp', name: '京东超市'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png.webp', name: '海囤全球'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp', name: '京东服饰'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp', name: '京东生鲜'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp', name: '京东到家'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp', name: '充值缴费'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp', name: '9.9元拼'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/33021/21/6849/15049/5cbef2caEc4a79b52/68a19b1919062188.png.webp', name: '领劵'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp', name: '赚钱'},
        {img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp', name: '全部'}
      ],
      jdImg: '//m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg'
    }
  }
}
</script>

<style lang="less" scoped>
    .h_cate{
        width:100%;
        .cate_list{
            display:flex;
            flex-wrap:wrap;
            width:100%;
            li{
                display:flex;
                align-items:center;
                flex-direction:column;
                width:20%;
                img{
                    width:80px;
                    margin-top:20px;
                }
                span{
                    display:block;
                    margin-top:12px;
                    font-size:12px;/*px*/
                    color:#666;
                }
            }
        }
        .cate_news{
            width:100%;
            height:60px;
            display:flex;
            align-items:center;
            img{
                width:146px;
                margin-left:20px;
            }
            ul{
                margin-left:16px;
                width:500px;
                color:#181818;
                li{
                    width:100%;
                }
            }
            .news_more{
                font-size:12px;
                color:#181818;
            }
        }
    }
    .ellipsis{
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;/*超出部分文字以...显示*/
    }
</style>
