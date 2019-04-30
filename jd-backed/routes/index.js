var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* 首页banner后台 */
router.get('/hbanner', function (req, res, next) {
  var arr = [
    'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31684/39/15532/76068/5cc2bcceEb95db222/d33ac18d7125f6b4.jpg!cr_1125x549_0_72!q70.jpg.dpg',
    'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31222/36/14172/175722/5cc571d2Eca6d9c76/13856003860b149b.jpg!cr_1125x549_0_72!q70.jpg.dpg',
    'http://imgcps.jd.com/ling4/2922989/54mb5aW25Lmz5ZOB5Zeo5bm05Y2O/5q2j5ZOB6YCf6YCS/p-5c17126882acdd181dd53ce8/2f338d07/cr_1125x549_0_72/s1125x690/q70.jpg',
    'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/40090/24/2226/592956/5cbfd422E1ef9a1e3/2d3b42cb73b9197d.jpg!cr_1125x549_0_72!q70.jpg.dpg',
    'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg',
    'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/43438/32/1423/98127/5cc64813E702e27ad/3c300d36168e9e2e.jpg!cr_1125x549_0_72!q70.jpg.dpg'
  ]
  res.send(arr)
})

/* 首页分类后台 */
router.get('/hcate', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var arr = [
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp', name: '京东超市' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png.webp', name: '海囤全球' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp', name: '京东服饰' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp', name: '京东生鲜' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp', name: '京东到家' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp', name: '充值缴费' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp', name: '9.9元拼' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/33021/21/6849/15049/5cbef2caEc4a79b52/68a19b1919062188.png.webp', name: '领劵' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp', name: '赚钱' },
    { img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp', name: '全部' }
  ]
  res.send(arr)
})

/* 首页京东秒杀后台 */
router.get('/hjdspk', function (req, res, netx) {
  var arr = [
    {
      img:
        'http://img14.360buyimg.com/n1/s150x150_jfs/t1/35005/34/5144/149501/5cbe7918E44ba5d30/7fc0adfb066375a5.jpg.dpg',
      rprice: 5299,
      sprice: 7999
    },
    {
      img:
        'http://img14.360buyimg.com/n1/s150x150_jfs/t1/11497/38/10594/154589/5c81e33bEf1bf4472/ad7c8017327d5e0e.jpg.dpg',
      rprice: 144.9,
      sprice: 268
    },
    {
      img:
        'http://img14.360buyimg.com/n1/s150x150_jfs/t1/31137/14/13027/155768/5cb9344cE77cc2697/b3e82d55bfe016ac.jpg.dpg',
      rprice: 19.9,
      sprice: 65
    },
    {
      img:
        'http://img14.360buyimg.com/n1/s150x150_jfs/t1/40376/26/1936/196106/5cbeda43Ef4cd8ff0/5bce806f2a34a085.jpg.dpg',
      rprice: 19.9,
      sprice: 52.8
    },
    {
      img:
        'http://img14.360buyimg.com/n1/s150x150_jfs/t1/34832/16/2297/188304/5cb5b093Ed4767bca/5ec513629e03442d.jpg.dpg',
      rprice: 2339,
      sprice: 4280
    },
    {
      img:
        'http://img14.360buyimg.com/n1/s150x150_jfs/t16954/147/1043719425/125505/9d0fd091/5ab8c5cdN1c216d78.jpg.dpg',
      rprice: 14647,
      sprice: 14795
    }
  ]
  res.send(arr)
})

/* 首页东家小院后台 */
router.get('/hdyard', function (req, res, next) {
  var arr = {
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
  res.send(arr)
})

/* 首页每日逛后台 */
router.get('/hgdaily', function (req, res, next) {
  var arr = [
    {
      p1: '免息星球',
      p2: '白条免息购',
      img:
        '//m.360buyimg.com/n1/s150x150_jfs/t1/34840/24/3223/15768/5cbd65d3E685eddad/0e188bc8da7f5680.jpg!q70.jpg.dpg'
    },
    {
      p1: '品牌秒杀',
      p2: '低价抢大牌',
      img:
        '//m.360buyimg.com/n1/s150x150_jfs/t1/21261/29/6933/278615/5c662637E6c79dfbe/90971d426f489c15.jpg!q70.jpg.dpg'
    },
    {
      p1: '闪购',
      p2: '大牌限时特卖',
      img:
        '//m.360buyimg.com/n1/s150x150_jfs/t1/22571/30/5857/60351/5c45308eE5fbda21e/62d4d2e6418d794d.jpg!q70.jpg.dpg'
    },
    {
      p1: '拍拍二手',
      p2: '大牌包五折起',
      img:
        '//m.360buyimg.com/mobilecms/s150x150_jfs/t18184/284/245723/39588/47c2cb6b/5a56fd19N80f5a210.jpg!q70.jpg.dpg'
    },
    {
      p1: '排行榜',
      p2: '专属购物指南',
      img:
        '//m.360buyimg.com/n1/s150x150_jfs/t1/3545/14/11034/563231/5bcd4858Ed3b26a01/9adc3fee7bd4ad8f.jpg!q70.jpg.dpg'
    },
    {
      p1: '发现好货',
      p2: '探索新生活',
      img:
        '//m.360buyimg.com/n1/s150x150_jfs/t1/36184/31/1878/481922/5cb466e1Eb2a89b5a/4c3ad194071e9ec3.png!q70.jpg.dpg'
    },
    {
      p1: '会卖专辑',
      p2: '好物大集合',
      img:
        '//m.360buyimg.com/n1/s150x150_jfs/t2608/232/4216696250/49944/13a6b14d/57aecc7aNc9b9112b.jpg!q70.jpg.dpg'
    },
    {
      p1: '新品首发',
      p2: '华为P30',
      img:
        '//m.360buyimg.com/mobilecms/s150x150_jfs/t1/16097/29/12819/62040/5c9add4cE1b45f5ea/e48679e904c29d30.jpg!q70.jpg.dpg'
    }
  ]
  res.send(arr)
})

/* 首页为你推荐后台 */
router.get('/hforyou', function (req, res, next) {
  var arr = [
    {
      img:
        '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/25412/23/4475/215607/5c3307ceEaa25c981/24091a833b803f74.jpg!q70.dpg',
      infor:
        '德国家用 304不锈钢 菜板厨房长方形双面两用大砧板切菜板案板占板面板擀面板刀板不发霉 加大(460X300mm)送防滑垫:三口以上家庭使',
      price: '128',
      similar: '看相似'
    },
    {
      img:
        '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/4697/5/13519/63602/5bd80c0bE463d5b6b/b627f2c2c04af37e.jpg!q70.dpg',
      infor:
        '飞利浦（PHILIPS）男士电动剃须刀便携式剃胡刀胡须刀刮胡刀PQ182/16',
      price: '89',
      similar: '看相似'
    },
    {
      img:
        '//img12.360buyimg.com/mobilecms/s372x372_jfs/t25456/309/408828474/237465/516bbe31/5b6e5289N5f550032.jpg!q70.dpg',
      infor: '大一（DAYI）家用办公全钢入墙保管柜大型60cm保管箱深邃黑密码款',
      price: '688',
      similar: '看相似'
    },
    {
      img:
        '//img12.360buyimg.com/mobilecms/s372x372_jfs/t24148/269/2677968209/453964/94ead7ad/5b8a36d3Nd5bc6701.jpg!q70.dpg',
      infor:
        '美的（Midea）电压力锅5升双胆电高压锅 一键排气 七段调压 开盖收汁 WQC50A5',
      price: '279.6',
      similar: '看相似'
    },
    {
      img:
        '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/26685/20/14017/103537/5ca46c49E34128541/c5949cdd4ee55fa8.jpg!q70.dpg',
      infor:
        'IKSNAIL 【行李箱24寸防刮铝框】铝框拉杆箱 万向轮24寸男女行李箱商务20寸轻巧便利旅行箱 玫瑰金 22寸',
      price: '208',
      similar: '看相似'
    },
    {
      img:
        '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/21051/8/2362/249945/5c1c5c1bE33b5149e/4ac2f02e1ec55088.jpg!q70.dpg',
      infor:
        '南极人 男士内裤男平角裤纯色95%精梳棉质中腰男式四角内裤u凸短裤头4条礼盒装NHT9999 混色4条XL',
      price: '46.5',
      similar: '看相似'
    },
    {
      img:
        '//img13.360buyimg.com/mobilecms/s372x372_jfs/t18931/170/1175039838/193413/352c6e00/5abe097fNb68e8152.jpg!q70.dpg',
      infor:
        'EPOCH艾保克 夜光手表全自动机械男表 氚气自发光H3防水镂空腕表 A款 钢色绿灯钢带白盘',
      price: '1499',
      similar: '看相似'
    },
    {
      img:
        '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/36999/21/5957/417092/5cc18a0fE379803aa/76173b3cdb7bc1be.jpg!q70.dpg',
      infor:
        '亿色(ESR) iphone xr手机壳苹果xr手机外壳 超薄防摔硅胶软边透明玻璃全包抖音款手机套 琉璃剔透白',
      price: '49.9',
      similar: '看相似'
    },
    {
      img:
        '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/20729/6/11849/171953/5c9351daE2e50cd61/f364f7af05490d9b.jpg!q70.dpg',
      infor:
        '康麦斯（K-Max）牌美国原装进口深海鱼油胶囊卵磷脂胶囊组合 调节血脂 中老年营养保 鱼油200粒+卵磷脂200粒组合装',
      price: '438',
      similar: '看相似'
    },
    {
      img:
        '//img10.360buyimg.com/mobilecms/s372x372_jfs/t22912/226/1778016670/136315/68021208/5b6a4856N34be1638.jpg!q70.dpg',
      infor:
        '小芸豆 欧式梳妆台卧室电视柜现代简约化妆柜多功能化妆桌小户型网红公主型化妆台 韩式田园韩式618',
      price: '1698',
      similar: '看相似'
    }
  ]
  res.send(arr)
})

/* 分类页左边部分列表 */
router.get('/cateleft', function (req, res, next) {
  var arr = [
    {
      id: 0,
      title: '热门推荐'
    },
    {
      id: 1,
      title: '手机数码'
    },
    {
      id: 2,
      title: '家用电器'
    },
    {
      id: 3,
      title: '电脑办公'
    },
    {
      id: 4,
      title: '计生情趣'
    },
    {
      id: 5,
      title: '美妆护肤'
    },
    {
      id: 6,
      title: '个户情趣'
    },
    {
      id: 7,
      title: '汽车生活'
    },
    {
      id: 8,
      title: '京东超市'
    },
    {
      id: 9,
      title: '男鞋'
    },
    {
      id: 10,
      title: '京东超市'
    },
    {
      id: 11,
      title: '个人用品'
    },
    {
      id: 12,
      title: '电脑办公'
    },
    {
      id: 13,
      title: '京东超市'
    },
    {
      id: 14,
      title: '电脑办公'
    },
    {
      id: 15,
      title: '电脑办公'
    },
    {
      id: 16,
      title: '电脑办公'
    },
    {
      id: 17,
      title: '电脑办公'
    },
    {
      id: 18,
      title: '电脑办公'
    }, {
      id: 19,
      title: '电脑办公'
    }
  ]
  res.send(arr)
})

/* 分类页右侧数据 */
router.get('/cateright', function (req, res, next) {
  var arr = [
    [
      {
        title: '热门分类',
        content: [
          {
            name: '轻薄本',
            img:
              '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
          },
          {
            name: '游戏本',
            img:
              '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
          },
          {
            name: '机械键盘',
            img:
              '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
          },
          {
            name: '组装电脑',
            img:
              '//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg'
          },
          {
            name: '移动硬盘',
            img:
              '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg'
          },
          {
            name: '显卡',
            img:
              '//img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg'
          },
          {
            name: '游戏台式机',
            img:
              '//img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg'
          },
          {
            name: '家用打印机',
            img:
              '//img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg'
          },
          {
            name: '吃鸡装备',
            img:
              '//img20.360buyimg.com/focus/s140x140_jfs/t16210/272/2297735843/7874/66447aee/5a9fa34bNff4ef403.jpg'
          },
          {
            name: '曲屏显示器',
            img:
              '//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg'
          }
        ]
      },
      {
        title: '电脑整机',
        content: [
          {
            name: '笔记本',
            img:
              '//img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg'
          },
          {
            name: '平板电脑',
            img:
              '//img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg'
          },
          {
            name: '一体机',
            img:
              '//img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg'
          },
          {
            name: '台式机',
            img:
              '//img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg'
          },
          {
            name: '笔记本配件',
            img:
              '//img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg'
          },
          {
            name: '游戏台式机',
            img:
              '//img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg'
          },
          {
            name: '商用台式机',
            img:
              '//img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg'
          },
          {
            name: '游戏本',
            img:
              '//img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg'
          },
          {
            name: '平板电脑配件',
            img:
              '//img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg'
          },
          {
            name: '轻薄本',
            img:
              '//img20.360buyimg.com/focus/s140x140_jfs/t12499/273/957225674/6892/8281d4a7/5a17b962Nf77d9f6c.jpg'
          },
          {
            name: '二合一平板',
            img:
              '//img10.360buyimg.com/focus/s140x140_jfs/t11944/224/2479637242/6222/ac9759/5a17b93dN89330bb3.jpg'
          }
        ]
      }
    ],
    []
  ]
  res.send(arr)
})

module.exports = router
