var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  })
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
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp',
      name: '京东超市'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png.webp',
      name: '海囤全球'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
      name: '京东服饰'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp',
      name: '京东生鲜'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
      name: '京东到家'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
      name: '充值缴费'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
      name: '9.9元拼'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/33021/21/6849/15049/5cbef2caEc4a79b52/68a19b1919062188.png.webp',
      name: '领劵'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
      name: '赚钱'
    },
    {
      img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp',
      name: '全部'
    }
  ]
  res.send(arr)
})

/* 首页京东秒杀后台 */
router.get('/hjdspk', function (req, res, netx) {
  var arr = [{
    img: 'http://img14.360buyimg.com/n1/s150x150_jfs/t1/35005/34/5144/149501/5cbe7918E44ba5d30/7fc0adfb066375a5.jpg.dpg',
    rprice: 5299,
    sprice: 7999
  },
  {
    img: 'http://img14.360buyimg.com/n1/s150x150_jfs/t1/11497/38/10594/154589/5c81e33bEf1bf4472/ad7c8017327d5e0e.jpg.dpg',
    rprice: 144.9,
    sprice: 268
  },
  {
    img: 'http://img14.360buyimg.com/n1/s150x150_jfs/t1/31137/14/13027/155768/5cb9344cE77cc2697/b3e82d55bfe016ac.jpg.dpg',
    rprice: 19.9,
    sprice: 65
  },
  {
    img: 'http://img14.360buyimg.com/n1/s150x150_jfs/t1/40376/26/1936/196106/5cbeda43Ef4cd8ff0/5bce806f2a34a085.jpg.dpg',
    rprice: 19.9,
    sprice: 52.8
  },
  {
    img: 'http://img14.360buyimg.com/n1/s150x150_jfs/t1/34832/16/2297/188304/5cb5b093Ed4767bca/5ec513629e03442d.jpg.dpg',
    rprice: 2339,
    sprice: 4280
  },
  {
    img: 'http://img14.360buyimg.com/n1/s150x150_jfs/t16954/147/1043719425/125505/9d0fd091/5ab8c5cdN1c216d78.jpg.dpg',
    rprice: 14647,
    sprice: 14795
  }
  ]
  res.send(arr)
})

/* 首页东家小院后台 */
router.get('/hdyard', function (req, res, next) {
  var arr = {
    dyard1: [{
      title: '乒乓健将',
      sub: '你来我往斗智斗勇',
      img1: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t26980/161/1454785636/269078/699b0ef/5bea7eb7N269193ab.jpg!q70.jpg.dpg',
      img2: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/37419/11/2801/163234/5cb839c3E990eda6d/e6140f888b03f2b5.jpg!q70.jpg.dpg'
    },
    {
      title: '流行风尚',
      sub: '探索夏日的路易威登',
      img1: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t3655/290/233986194/86343/809eb218/5807109fN84c3c6af.jpg!q70.jpg.dpg',
      img2: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t19828/270/315026457/78508/fd8e1291/5af00978N64948101.jpg!q70.jpg.dpg'
    }
    ],
    dyard2: [{
      title: '休闲春光',
      sub: '广场生活',
      img: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t23233/299/1493167730/232149/f059623a/5b612e00N576c1901.jpg!q70.jpg.dpg'
    },
    {
      title: '初夏清爽',
      sub: '初夏抢鲜购',
      img: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t30292/48/522142398/65088/6bdcb7a1/5bf6075cNac63c261.jpg!q70.jpg.dpg'
    },
    {
      title: '运动汇',
      sub: '大牌好物',
      img: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/32913/17/10087/214440/5cac5e88E508cbd6e/d0da028b76d4971c.jpg!q70.jpg.dpg'
    },
    {
      title: '少年派',
      sub: '少年游',
      img: 'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/22189/13/14232/374596/5ca7fca4E7be4f797/3e25d7035903c754.jpg!q70.jpg.dpg'
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
      img: '//m.360buyimg.com/n1/s150x150_jfs/t1/34840/24/3223/15768/5cbd65d3E685eddad/0e188bc8da7f5680.jpg!q70.jpg.dpg'
    },
    {
      p1: '品牌秒杀',
      p2: '低价抢大牌',
      img: '//m.360buyimg.com/n1/s150x150_jfs/t1/21261/29/6933/278615/5c662637E6c79dfbe/90971d426f489c15.jpg!q70.jpg.dpg'
    },
    {
      p1: '闪购',
      p2: '大牌限时特卖',
      img: '//m.360buyimg.com/n1/s150x150_jfs/t1/22571/30/5857/60351/5c45308eE5fbda21e/62d4d2e6418d794d.jpg!q70.jpg.dpg'
    },
    {
      p1: '拍拍二手',
      p2: '大牌包五折起',
      img: '//m.360buyimg.com/mobilecms/s150x150_jfs/t18184/284/245723/39588/47c2cb6b/5a56fd19N80f5a210.jpg!q70.jpg.dpg'
    },
    {
      p1: '排行榜',
      p2: '专属购物指南',
      img: '//m.360buyimg.com/n1/s150x150_jfs/t1/3545/14/11034/563231/5bcd4858Ed3b26a01/9adc3fee7bd4ad8f.jpg!q70.jpg.dpg'
    },
    {
      p1: '发现好货',
      p2: '探索新生活',
      img: '//m.360buyimg.com/n1/s150x150_jfs/t1/36184/31/1878/481922/5cb466e1Eb2a89b5a/4c3ad194071e9ec3.png!q70.jpg.dpg'
    },
    {
      p1: '会卖专辑',
      p2: '好物大集合',
      img: '//m.360buyimg.com/n1/s150x150_jfs/t2608/232/4216696250/49944/13a6b14d/57aecc7aNc9b9112b.jpg!q70.jpg.dpg'
    },
    {
      p1: '新品首发',
      p2: '华为P30',
      img: '//m.360buyimg.com/mobilecms/s150x150_jfs/t1/16097/29/12819/62040/5c9add4cE1b45f5ea/e48679e904c29d30.jpg!q70.jpg.dpg'
    }
  ]
  res.send(arr)
})

/* 首页为你推荐后台 */
router.get('/hforyou', function (req, res, next) {
  var arr = [
    {
      img: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/25412/23/4475/215607/5c3307ceEaa25c981/24091a833b803f74.jpg!q70.dpg',
      infor: '德国家用 304不锈钢 菜板厨房长方形双面两用大砧板切菜板案板占板面板擀面板刀板不发霉 加大(460X300mm)送防滑垫:三口以上家庭使',
      price: '128',
      similar: '看相似'
    },
    {
      img: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/4697/5/13519/63602/5bd80c0bE463d5b6b/b627f2c2c04af37e.jpg!q70.dpg',
      infor: '飞利浦（PHILIPS）男士电动剃须刀便携式剃胡刀胡须刀刮胡刀PQ182/16',
      price: '89',
      similar: '看相似'
    },
    {
      img: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t25456/309/408828474/237465/516bbe31/5b6e5289N5f550032.jpg!q70.dpg',
      infor: '大一（DAYI）家用办公全钢入墙保管柜大型60cm保管箱深邃黑密码款',
      price: '688',
      similar: '看相似'
    },
    {
      img: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t24148/269/2677968209/453964/94ead7ad/5b8a36d3Nd5bc6701.jpg!q70.dpg',
      infor: '美的（Midea）电压力锅5升双胆电高压锅 一键排气 七段调压 开盖收汁 WQC50A5',
      price: '279.6',
      similar: '看相似'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/26685/20/14017/103537/5ca46c49E34128541/c5949cdd4ee55fa8.jpg!q70.dpg',
      infor: 'IKSNAIL 【行李箱24寸防刮铝框】铝框拉杆箱 万向轮24寸男女行李箱商务20寸轻巧便利旅行箱 玫瑰金 22寸',
      price: '208',
      similar: '看相似'
    },
    {
      img: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/21051/8/2362/249945/5c1c5c1bE33b5149e/4ac2f02e1ec55088.jpg!q70.dpg',
      infor: '南极人 男士内裤男平角裤纯色95%精梳棉质中腰男式四角内裤u凸短裤头4条礼盒装NHT9999 混色4条XL',
      price: '46.5',
      similar: '看相似'
    },
    {
      img: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t18931/170/1175039838/193413/352c6e00/5abe097fNb68e8152.jpg!q70.dpg',
      infor: 'EPOCH艾保克 夜光手表全自动机械男表 氚气自发光H3防水镂空腕表 A款 钢色绿灯钢带白盘',
      price: '1499',
      similar: '看相似'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/36999/21/5957/417092/5cc18a0fE379803aa/76173b3cdb7bc1be.jpg!q70.dpg',
      infor: '亿色(ESR) iphone xr手机壳苹果xr手机外壳 超薄防摔硅胶软边透明玻璃全包抖音款手机套 琉璃剔透白',
      price: '49.9',
      similar: '看相似'
    },
    {
      img: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/20729/6/11849/171953/5c9351daE2e50cd61/f364f7af05490d9b.jpg!q70.dpg',
      infor: '康麦斯（K-Max）牌美国原装进口深海鱼油胶囊卵磷脂胶囊组合 调节血脂 中老年营养保 鱼油200粒+卵磷脂200粒组合装',
      price: '438',
      similar: '看相似'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/s372x372_jfs/t22912/226/1778016670/136315/68021208/5b6a4856N34be1638.jpg!q70.dpg',
      infor: '小芸豆 欧式梳妆台卧室电视柜现代简约化妆柜多功能化妆桌小户型网红公主型化妆台 韩式田园韩式618',
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
      title: '京东超市'
    },
    {
      id: 7,
      title: '汽车生活'
    },
    {
      id: 8,
      title: '个护清洁'
    },
    {
      id: 9,
      title: '男装'
    },
    {
      id: 10,
      title: '男鞋'
    },
    {
      id: 11,
      title: '女装'
    },
    {
      id: 12,
      title: '户外运动'
    },
    {
      id: 13,
      title: '内衣搭配'
    },
    {
      id: 14,
      title: '男装'
    },
    {
      id: 15,
      title: '男鞋'
    },
    {
      id: 16,
      title: '女装'
    },
    {
      id: 17,
      title: '男装'
    },
    {
      id: 18,
      title: '男鞋'
    },
    {
      id: 19,
      title: '女装'
    }
  ]
  res.send(arr)
})

/* 分类页右侧数据 */
router.get('/cateright', function (req, res, next) {
  var arr = [
    // 1-3
    [
      {
        'title': '热门分类',
        'content': [{
          'name': '手机',
          'img': '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
        },
        {
          'name': '耳机',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png'
        },
        {
          'name': '华为',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png'
        },
        {
          'name': '电饭煲',
          'img': '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png'
        },
        {
          'name': '电磁炉',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png'
        },
        {
          'name': '路由器',
          'img': '//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png'
        },
        {
          'name': '避孕套',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png'
        },
        {
          'name': '口红',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png'
        },
        {
          'name': '吹风机',
          'img': '//img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png'
        },
        {
          'name': '三只松鼠',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png'
        },
        {
          'name': '洗衣液',
          'img': '//img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png'
        },
        {
          'name': '保温杯',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png'
        },
        {
          'name': '微波炉',
          'img': '//img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png'
        },
        {
          'name': '洗发水',
          'img': '//img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png'
        },
        {
          'name': '卫生巾',
          'img': '//img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png'
        }
        ]
      },
      {
        'title': '家电热搜',
        'content': [{
          'name': '冰箱',
          'img': '//img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png'
        },
        {
          'name': '洗衣机',
          'img': '//img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'
        },
        {
          'name': '电视',
          'img': '//img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'
        }
        ]
      }
    ],
    [
      {
        'title': '热门品牌',
        'content': [
          {
            'name': '小米',
            'img': '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png'
          },
          {
            'name': '华为',
            'img': '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg'
          },
          {
            'name': '荣耀',
            'img': '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg'
          },
          {
            'name': 'iPhone',
            'img': '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg'
          },
          {
            'name': 'vivo',
            'img': '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png'
          },
          {
            'name': 'OPPO',
            'img': '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png'
          },
          {
            'name': '魅族',
            'img': '//img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg'
          },
          {
            'name': '三星',
            'img': '//img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png'
          },
          {
            'name': '一加',
            'img': '//img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg'
          },
          {
            'name': '360手机',
            'img': '//img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg'
          },
          {
            'name': '锤子手机',
            'img': '//img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg'
          },
          {
            'name': '努比亚',
            'img': '//img12.360buyimg.com/focus/s140x140_jfs/t15085/289/2395028996/2546/1e7e1f7b/5a9fa5e7Nc5cc0f6b.jpg'
          }
        ]
      },
      {
        'title': '手机通讯',
        'content': [{
          'name': '老人机',
          'img': '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg'
        },
        {
          'name': '手机',
          'img': '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg'
        },
        {
          'name': '全面屏手机',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg'
        },
        {
          'name': '游戏手机',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg'
        },
        {
          'name': '拍照手机',
          'img': '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg'
        },
        {
          'name': '对讲机',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg'
        },
        {
          'name': '女性手机',
          'img': '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg'
        }
        ]
      },
      {
        'title': '运营商',
        'content': [{
          'name': '合约机',
          'img': '//img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png'
        },
        {
          'name': '选号卡',
          'img': '//img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png'
        },
        {
          'name': '办套餐',
          'img': '//img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg'
        }
        ]
      }
    ],
    [
      {
        'title': '厨房小店',
        'content': [{
          'name': '电水壶/热水瓶',
          'img': '//img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg'
        },
        {
          'name': '电压力锅',
          'img': '//img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg'
        },
        {
          'name': '电饭煲',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg'
        },
        {
          'name': '电磁炉',
          'img': '//img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg'
        },
        {
          'name': '微波炉',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg'
        },
        {
          'name': '电饼铛',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg'
        },
        {
          'name': '豆浆机',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg'
        },
        {
          'name': '多用途锅',
          'img': '//img11.360buyimg.com/focus/s140x140_jfs/t13192/9/990491166/2453/36169f1b/5a17f1ccN019c7fda.jpg'
        },
        {
          'name': '料理机',
          'img': '//img13.360buyimg.com/focus/s140x140_jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg'
        },
        {
          'name': '榨汁机/原汁机',
          'img': '//img13.360buyimg.com/focus/s140x140_jfs/t13264/165/968827574/9255/7d10ad8c/5a17f224N9756f6e5.jpg'
        }
        ]
      },
      {
        'title': '个护健康',
        'content': [{
          'name': '电吹风',
          'img': '//img14.360buyimg.com/focus/s140x140_jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png'
        },
        {
          'name': '剃须刀',
          'img': '//img14.360buyimg.com/focus/s140x140_jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg'
        },
        {
          'name': '理发器',
          'img': '//img10.360buyimg.com/focus/s140x140_jfs/t11125/324/2448652642/4268/cd0fff76/5a17c201N6f968e89.jpg'
        },
        {
          'name': '足浴盆',
          'img': '//img10.360buyimg.com/focus/s140x140_jfs/t11209/303/2393582425/2406/d7c577aa/5a17c1eeNb9958e28.jpg'
        }
        ]
      }
    ],
    // 4-6
    [
      {
        title: '热门分类',
        content: [{
          name: '轻薄本',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
        },
        {
          name: '游戏本',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
        },
        {
          name: '机械键盘',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
        },
        {
          name: '组装电脑',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg'
        },
        {
          name: '移动硬盘',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg'
        },
        {
          name: '显卡',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg'
        },
        {
          name: '游戏台式机',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg'
        },
        {
          name: '家用打印机',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg'
        },
        {
          name: '吃鸡装备',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16210/272/2297735843/7874/66447aee/5a9fa34bNff4ef403.jpg'
        },
        {
          name: '曲屏显示器',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg'
        }
        ]
      },
      {
        title: '电脑整机',
        content: [{
          name: '笔记本',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg'
        },
        {
          name: '平板电脑',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg'
        },
        {
          name: '一体机',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg'
        },
        {
          name: '台式机',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg'
        },
        {
          name: '笔记本配件',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg'
        },
        {
          name: '游戏台式机',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg'
        },
        {
          name: '商用台式机',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg'
        },
        {
          name: '游戏本',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg'
        },
        {
          name: '平板电脑配件',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg'
        },
        {
          name: '轻薄本',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12499/273/957225674/6892/8281d4a7/5a17b962Nf77d9f6c.jpg'
        },
        {
          name: '二合一平板',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t11944/224/2479637242/6222/ac9759/5a17b93dN89330bb3.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '热卖产品',
        content: [{
          name: '避孕套',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12967/337/1391919620/4957/c230e379/5a1fa4dfN13635e0b.jpg'
        },
        {
          name: '飞机杯',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12577/223/1408990949/3151/b6d3f3c2/5a1fa4c9N1722220b.jpg'
        },
        {
          name: '润滑液',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16204/157/99115190/1594/56b918ba/5a27dd39Nb291d7b4.jpg'
        },
        {
          name: '振动棒',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t7711/193/4061075422/3307/ca2e16f0/5a1fa4d3N73ba4e26.jpg'
        },
        {
          name: '情趣内衣',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12031/188/1751903538/3665/5002167a/5a27dd3dN8c2a767c.jpg'
        },
        {
          name: '充气娃娃',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13879/252/1741535676/2857/17a878cc/5a27dd43N3f71897a.jpg'
        }
        ]
      },
      {
        title: '男用器具',
        content: [{
          name: '狼牙套',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t15697/270/117263048/3424/d9ac82b4/5a27dd0fNe2bc9933.jpg'
        },
        {
          name: '延时环',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12844/238/1716863106/4896/66ecb649/5a27dd15N3c319e6e.jpg'
        },
        {
          name: '名器',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13363/207/1378105912/4445/5d6a8da8/5a1fa4a4Nbe0dd20a.jpg'
        },
        {
          name: '实体娃娃',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13633/192/1750068170/3097/be361c7f/5a27dd19Na55905bf.jpg'
        },
        {
          name: '飞机杯',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13069/337/1417186237/3300/4269f51f/5a1fa4aaN5c41ddec.jpg'
        },
        {
          name: '倒模',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12874/255/15949646/3234/2ac08cca/5a1fa480Nb25ec042.jpg'
        },
        {
          name: '后庭',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t15187/337/235838504/2416/5831d5d6/5a27dd09N6e341de3.jpg'
        },
        {
          name: '情趣游戏',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t15517/83/118691147/2248/2ab34c4f/5a27dcf3Nc3c95962.jpg'
        },
        {
          name: '充气娃娃',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t14548/326/252090716/3444/d65a0e4/5a27dd0eN06ceb604.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '当季主推',
        content: [{
          name: '美白',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19531/110/2538137867/14848/c3ec84ac/5afd3cc5N8aa4b7c8.jpg'
        },
        {
          name: '防晒',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t17560/320/2504739891/10347/f04150c4/5afd3cbeN77d00886.jpg'
        },
        {
          name: '控油',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
        },
        {
          name: '明星同款面膜',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19759/351/2599036909/13944/24601ad4/5afd3d66Nbb817b81.jpg'
        },
        {
          name: '显白口红',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t20356/99/118471868/26414/e301e0b7/5afd3d61Ne42d8f0d.jpg'
        },
        {
          name: '小美盒',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19453/253/2549990863/33320/e0515773/5afd3d5cN85837566.jpg'
        }
        ]
      },
      {
        title: '面部护肤',
        content: [{
          name: '护肤礼盒',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t20959/91/124730120/12985/5284a79e/5afd3d41N088429d4.jpg'
        },
        {
          name: '深层清洁',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t22396/17/121051148/28089/c4acdb0f/5afd3d3bN75fa18d3.jpg'
        },
        {
          name: '敏感肌',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t20929/77/121480668/32196/9a7ba672/5afd3d35N2a6ee1be.jpg'
        },
        {
          name: '卸妆',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t20917/65/125245513/25087/e5ba4ace/5afd3d2eNd15c7aa0.jpg'
        },
        {
          name: '洁面',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t20383/58/124335317/14873/8e3616ff/5afd3d27Ne9bbcfbf.jpg'
        },
        {
          name: '爽肤水/化妆水',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18874/59/2559251858/5489/71cbf3ce/5afd3d21N7fc7e6b4.jpg'
        },
        {
          name: '乳液/面霜',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18103/87/2517823758/30777/deea9adf/5afd3d1cN8cd5e8cc.jpg'
        },
        {
          name: '精华/肌底液',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19432/52/2545941083/41798/3ba421cf/5afd3d11Nc13f1029.jpg'
        },
        {
          name: '眼霜',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19678/73/2552924985/24992/eb27e199/5afd3d16N945cdc81.jpg'
        }
        ]
      }
    ],
    // 7~9
    [
      {
        title: '畅销推荐',
        content: [{
          name: '个护馆',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t21343/109/200166835/32189/655b48ef/5b03c73fN69e0c2b7.jpg'
        },
        {
          name: '清洁馆',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg'
        },
        {
          name: '进口清洁',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t20482/61/128269126/48485/836a6d71/5afd574eNb1ad35ae.jpg'
        },
        {
          name: '卫生棉条',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t18214/1/2613174758/15599/5ed2de47/5afd5747N2fc58c3e.jpg'
        },
        {
          name: '湿厕纸',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t20365/251/116787241/43845/fa0bc54d/5afd5740Na342fa77.jpg'
        },
        {
          name: '走珠/止汗露',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18676/160/2579989694/9033/3c4632ba/5afd5735Nfd44dcdd.jpg'
        },
        {
          name: '花露水',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t22123/187/137040009/6892/6b0cbf68/5afd572dN7ed9c341.jpg'
        },
        {
          name: '驱蚊用品',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t20293/233/118774843/46835/4e4eaf16/5afd5727N9f7271c7.jpg'
        },
        {
          name: '本色纸',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t17062/178/2600012755/33321/1ad5ca0b/5afd571fN18ed0cd5.jpg'
        },
        {
          name: '免洗洗手液',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16840/96/2521969144/9603/65ca0871/5afd571aN43e80da5.jpg'
        }
        ]
      },
      {
        title: '明星品牌',
        content: [{
          name: '得宝',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t19159/296/2561042023/49706/b5b9a38c/5afd5700N355dfa7d.jpg'
        },
        {
          name: '施华蔻专业',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19489/212/2660233176/26301/ba832bb4/5b03ca93Nb4f64094.jpg'
        },
        {
          name: '舒洁',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19819/28/553421672/50589/7cfc13ea/5afd56f2Nf2b8ca84.jpg'
        },
        {
          name: '馥绿德雅',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17248/264/2595778521/6813/3309b403/5afd56ecN8257b620.jpg'
        },
        {
          name: '3M',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t18997/159/2614761718/41736/d0533a04/5afd56e7N9961fe19.jpg'
        },
        {
          name: '吕',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19420/348/2539781815/6961/35348d70/5afd56e1N98a273a3.jpg'
        },
        {
          name: '当妮',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18196/253/2567807998/53005/61c50fea/5afd56dcNc16970a8.jpg'
        },
        {
          name: 'LG',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t21079/224/118757583/10390/664c2986/5afd56d5N4a00680d.jpg'
        },
        {
          name: '橘子工坊',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21721/134/120751456/39440/5d9584de/5afd56cfNaabd3f8c.jpg'
        },
        {
          name: '花王',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t20101/223/562289297/12695/938bfb8/5afd56caNdb42ae94.jpg'
        },
        {
          name: '汉高',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t19918/356/561154349/62704/6ca0c356/5afd56b8N1bd6906e.jpg'
        },
        {
          name: '玛尔斯',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19318/209/2602710979/6648/57bd4e7c/5afd56afN495321fb.jpg'
        }
        ]
      },
      {
        title: '纸品湿巾',
        content: [{
          name: '抽纸',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t21769/101/124948952/48248/832ede7b/5afd568bN971e6358.jpg'
        },
        {
          name: '卷纸',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t22387/82/128171200/41534/fde69788/5afd5686N67808fa9.jpg'
        },
        {
          name: '手帕纸',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t18637/64/2549852710/37258/79908eff/5afd5681N00604b0d.jpg'
        },
        {
          name: '湿巾',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t22297/74/124765074/42169/447f046a/5afd567cNfc430327.jpg'
        },
        {
          name: '厨房纸巾',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19225/80/2534738713/47306/263604a4/5afd5678N54ce98af.jpg'
        }
        ]
      },
      {
        title: '女性护理',
        content: [{
          name: '进口卫生巾',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19702/170/2637035856/53602/b3d52749/5b03c41bN72fa8f49.jpg'
        },
        {
          name: '卫生巾',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19681/290/2527845655/17373/8fa138c2/5afd563eNd9dfefa2.jpg'
        },
        {
          name: '卫生护垫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18127/332/2572577399/15408/6055b08/5afd563aNa79b47b4.jpg'
        },
        {
          name: '私处护理',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t18943/294/2522212188/10711/74553b18/5afd5635N4c315dce.jpg'
        }
        ]
      },
      {
        title: '衣物清洁',
        content: [{
          name: '洗衣液',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19987/98/558215522/32047/351256ff/5afd562dN5db3a834.jpg'
        },
        {
          name: '洗衣粉',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19462/104/2571598475/45478/9f7da5fa/5afd5627Ne5de5630.jpg'
        },
        {
          name: '洗衣皂',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21628/34/123674554/43500/dd39a8fa/5afd5622N45d600ba.jpg'
        },
        {
          name: '柔顺剂',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t18544/152/2609888412/32404/c9527c0f/5afd55faNa530f00e.jpg'
        },
        {
          name: '凝珠',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t20965/49/131053014/59271/c0533e1f/5afd55f4Na480a545.jpg'
        },
        {
          name: '除菌液',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t18367/201/2501678110/38390/7617d219/5afd55efN699a9345.jpg'
        }
        ]
      },
      {
        title: '家庭清洁',
        content: [{
          name: '洗洁精',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t18433/53/2532228382/29889/e1387b5c/5afd5586N7f9ba945.jpg'
        },
        {
          name: '消毒液',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19027/97/2581588567/48688/665a7663/5afd5581Nd2eeec39.jpg'
        },
        {
          name: '油污净',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t18658/258/2480489533/11269/7da282ac/5afd5b63Na1183476.jpg'
        },
        {
          name: '洁厕剂',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19114/59/2604474272/45896/7b35bd96/5afd556bNa5eec222.jpg'
        },
        {
          name: '除湿干燥剂',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16765/283/2561851137/36053/8350e507/5afd5565Nf00ec7be.jpg'
        }
        ]
      },
      {
        title: '洗发护发',
        content: [{
          name: '进口洗发水',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21517/44/203247372/26977/b52d91d0/5b03c48bNe06feb68.jpg'
        },
        {
          name: '洗发水',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t16846/245/2583886575/9376/d24e63cb/5afd554eN8fc3776a.jpg'
        },
        {
          name: '护发素',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t17701/31/2532797830/12007/a4af1c3e/5afd5548Ncdf39713.jpg'
        },
        {
          name: '发膜/精油',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t17350/26/2574061368/8918/fe462b16/5afd5541Nd0d2a089.jpg'
        },
        {
          name: '洗护套装',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t21418/329/136024742/20093/cd707128/5afd553bN8075c11b.jpg'
        },
        {
          name: '旅行套装',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t20776/109/131863332/17080/d56a0194/5afd5536Ne0c20616.jpg'
        }
        ]
      },
      {
        title: '发型设计',
        content: [{
          name: '进口染发',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19921/283/641055923/30819/17816fc8/5b03c4edN0293de4d.jpg'
        },
        {
          name: '造型',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19723/106/2560766009/6347/6080ffc3/5afd552aNd7d0b91f.jpg'
        },
        {
          name: '染发',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t21934/229/123334440/15585/ca009d11/5afd5522Nd55c3db9.jpg'
        },
        {
          name: '烫发',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17062/210/2612623125/8453/6e50eb1/5afd551eN93e59df8.jpg'
        },
        {
          name: '假发',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18463/295/2549595995/8360/4faa89b7/5afd5518N3ca7a401.jpg'
        },
        {
          name: '美发工具',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t20440/47/128875611/17639/84bdc840/5afd5513N63fb05bb.jpg'
        }
        ]
      },
      {
        title: '身体护理',
        content: [{
          name: '进口沐浴露',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t21892/274/217406252/26431/5fd60e42/5b03c653Nde350f5a.jpg'
        },
        {
          name: '沐浴露',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t20701/96/209105998/23881/dd74771e/5b03c72eNb5aacdaf.jpg'
        },
        {
          name: '香皂',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t17215/352/2622299547/16734/bac5a131/5afd5502Nf40a3adf.jpg'
        },
        {
          name: '浴盐',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t21718/198/117863030/9195/74c5a809/5afd54faNf1fe657c.jpg'
        },
        {
          name: '护手霜',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t21244/264/114225784/15357/3ba45a5c/5afd54f3N449f5147.jpg'
        },
        {
          name: '脱毛膏/工具',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t16750/97/2578880190/4870/7e7841c7/5afd54edN440c4f1c.jpg'
        },
        {
          name: '男士洗液',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19468/145/2579322903/5560/3273faf7/5afd54e4N628b3a7f.jpg'
        },
        {
          name: '润肤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t21691/178/119690497/7769/f72006f8/5afd54d5N68aa22d0.jpg'
        },
        {
          name: '精油',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t22270/158/129352763/7887/d556f009/5afd54c6N469e8a8d.jpg'
        },
        {
          name: '手膜/足膜',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t22399/146/123296437/15657/faedbfbf/5afd54bfNc34196f9.jpg'
        },
        {
          name: '美颈',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t17494/3/2556643261/9278/1f1db232/5afd54b1N529ab54e.jpg'
        },
        {
          name: '美胸',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t18124/272/2527140035/5820/25843950/5afd54abN71ee4bcf.jpg'
        },
        {
          name: '身体护理套装',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19486/77/2530339313/13232/958fce1d/5afd54a6Nca72e456.jpg'
        }
        ]
      },
      {
        title: '口腔护理',
        content: [{
          name: '进口牙膏',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19876/2/637557546/23939/63bf594c/5b03c6f3N208f158d.jpg'
        },
        {
          name: '牙膏',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t21709/123/122452202/11282/d3edbcd9/5afd5488N55584ee6.jpg'
        },
        {
          name: '牙刷',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t20131/362/126324506/7570/25c9cf01/5afd5480Ne350e657.jpg'
        },
        {
          name: '牙线/牙线棒',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21859/125/124128973/13401/bc1d5345/5afd547bN1a1fc36f.jpg'
        },
        {
          name: '牙贴',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t22117/98/133319209/19987/c1187729/5afd5474Nc701fb7b.jpg'
        },
        {
          name: '牙粉',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16819/126/2534285097/11610/55ac454e/5afd546bN27c05a25.jpg'
        },
        {
          name: '假牙清洁',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t18814/256/2629829638/22748/9c4777f8/5afd5464N404defd5.jpg'
        },
        {
          name: '漱口水',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t18268/223/2565676410/10145/6887ef16/5afd545eNdbaea1e6.jpg'
        },
        {
          name: '口喷',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t22102/77/122022394/8918/37f7713c/5afd5454N092841af.jpg'
        }
        ]
      },
      {
        title: '清洁工具',
        content: [{
          name: '拖把',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t17941/2/2535332698/24917/14a0feee/5afd5421Nd372f042.jpg'
        },
        {
          name: '垃圾袋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t18769/229/2589911314/45558/4c81e6d8/5afd5419Nb94c25df.jpg'
        },
        {
          name: '垃圾桶',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19255/280/2541925874/45344/9e64db12/5afd5414Nb7959be9.jpg'
        },
        {
          name: '扫把',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t22141/30/129055155/25348/7d3d6880/5afd540fN9e8ce7ca.jpg'
        },
        {
          name: '脸盆/水桶',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t20311/84/130146107/23953/34191d35/5afd540aNe43c3b40.jpg'
        },
        {
          name: '抹布/百洁布',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19468/364/2568165364/41541/68bf2b38/5afd5404N063a997a.jpg'
        },
        {
          name: '手套/鞋套/围裙',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21556/83/125761257/39986/6c21f126/5afd53ffN669c9d7b.jpg'
        },
        {
          name: '清洁刷具',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21106/103/143965304/25758/19e2ee6d/5afd53faN71843d91.jpg'
        },
        {
          name: '一次性清洁用品',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t21568/70/121334743/40181/1541ac83/5afd53eaN07f163e9.jpg'
        }
        ]
      },
      {
        title: '驱蚊驱虫',
        content: [{
          name: '杀蟑',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t17407/139/2630394382/46387/c7a93f9a/5afd53e3N37baa82d.jpg'
        },
        {
          name: '驱鼠',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t20968/63/126209561/70712/37832654/5afd53ddN777c317a.jpg'
        },
        {
          name: '灭蚁',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t20971/59/120673409/42910/dd224b8a/5afd53d7Nf05b1a34.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '热卖推荐',
        content: [{
          name: '机油',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t12934/187/1360887703/3624/2773362c/5a1fb8f6N7d4de465.jpg'
        },
        {
          name: '汽车坐垫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13861/165/1416050485/4023/7a99270b/5a1fb902N806b102c.jpg'
        },
        {
          name: '洗车水枪',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12775/362/1793763591/8646/9054789/5a28b10cN62861b9b.jpg'
        },
        {
          name: '行车记录仪',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12901/240/1394851486/8943/454985f7/5a1fb8fcNb81047cc.jpg'
        },
        {
          name: '轮胎',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12508/203/1731926315/5258/efc05e60/5a28b101Ne8ebee02.jpg'
        },
        {
          name: '应急救援',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t15556/93/149991245/6163/3387b1e9/5a28b106N59344f7a.png'
        }
        ]
      },
      {
        title: '全部车型',
        content: [{
          name: '全部车型',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t1/8473/10/11628/10657/5c2dbb1cE47193b77/7f241ac8f7889f1d.jpg'
        },
        {
          name: '大众',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t1/9840/16/11639/17257/5c2dba16E8de6ef2a/b4183d6f61a3cc7d.jpg'
        },
        {
          name: '日产',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29923/3/3983/10680/5c2dba1eEedd1bb07/9247922649b54d4f.jpg'
        },
        {
          name: '丰田',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t1/14600/17/4110/8646/5c2dba26E73f41fef/780a4ace76c4ef0b.jpg'
        },
        {
          name: '奥迪',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t1/20898/17/4012/8445/5c2dba2dEe1e47052/88025b2f8a3db243.jpg'
        },
        {
          name: '斯柯达',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t1/28703/6/3981/13957/5c2dba45E83f19186/4d0151e9e7e4339e.jpg'
        },
        {
          name: '凯迪拉克',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t1/11453/36/4857/10519/5c2dba4cE7a14795e/121dbd0a81825ba1.jpg'
        },
        {
          name: '名爵',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t1/20359/29/3972/11650/5c2dba51E4a1d501d/92f55a0ead318176.jpg'
        },
        {
          name: '二手车',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t1/23427/14/4078/12094/5c2dba57Ec642cfba/5aba4c49135df8d1.jpg'
        },
        {
          name: '奥迪Q5L',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t1/25344/18/4032/10180/5c2dba5cEf14408f8/7c7935f09b2c80cb.jpg'
        },
        {
          name: '轩逸',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t1/8485/11/11631/7335/5c2dba62Eb87567b9/1c81c420bd0cbc2d.jpg'
        },
        {
          name: '迈腾',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t1/15567/16/4031/8798/5c2dba68E01a7fb14/ae668e176faeae21.jpg'
        }
        ]
      },
      {
        title: '汽车装饰',
        content: [{
          name: '香水',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13759/326/1785480674/5074/ee5e11b5/5a28ae70N2103e1ad.jpg'
        },
        {
          name: '功能小件',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12031/185/1786124151/4188/4fbcefa1/5a28ae4aNc332a72c.jpg'
        },
        {
          name: '挂件',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t14563/22/263252417/4276/1685f17/5a28ae7cN14672d9f.jpg'
        },
        {
          name: '车贴',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16231/145/125924495/8318/b0a5af3e/5a28ae6dNbf8afd0d.jpg'
        },
        {
          name: '车钥匙扣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15562/128/151306023/5669/a6f309c5/5a28ae93Nbd3a7965.jpg'
        },
        {
          name: '车衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15379/29/278452727/7734/e1b9d130/5a28ae5aN98fe0b9b.jpg'
        },
        {
          name: '车身装饰件',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t15544/115/145409852/6600/97483c30/5a28ae20N34461e66.jpg'
        },
        {
          name: '头枕腰靠',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12583/257/1424307664/3966/97f9ef9e/5a1fb88cN34faafa3.jpg'
        },
        {
          name: '脚垫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13558/280/1399434919/6271/78dd6573/5a1fb894Nc897f859.jpg'
        },
        {
          name: '方向盘套',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16423/215/131062453/8070/c711537e/5a28aea0N7af6bf25.jpg'
        },
        {
          name: '座垫座套',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13519/285/1392060463/6297/5fae6c1f/5a1fb899Nb3443228.jpg'
        },
        {
          name: '炭包/净化剂',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12829/44/1779550237/5321/8e2f3d05/5a28ae7cN20404195.jpg'
        },
        {
          name: '扶手箱',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13657/356/1757783714/5103/598ae62d/5a28ae82N504ac8dc.jpg'
        },
        {
          name: '雨眉',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13078/50/1778005408/5790/8a6d0d64/5a28ae59N22d853cf.jpg'
        },
        {
          name: '遮阳/雪挡',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14863/70/275582573/5863/248a3f1b/5a28ae6eNb762e067.jpg'
        },
        {
          name: '后备箱垫',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15349/194/244306114/5635/3f5a463b/5a28ae6cN06d8cc96.jpg'
        },
        {
          name: '行李架/箱',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13150/17/1760591829/4365/fe14f4be/5a28ae61N7f8f6567.jpg'
        },
        {
          name: '踏板',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14170/17/1750695410/5296/94ba6c25/5a28ae63N6907c7e8.jpg'
        }
        ]
      },
      {
        title: '美容清洗',
        content: [{
          name: '毛巾掸子',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13771/348/1795045462/2101/2bda7fa5/5a28aeb0Na5fe4e35.jpg'
        },
        {
          name: '车蜡',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12004/25/1783042437/5806/616369c8/5a28aec7N79fdf965.jpg'
        },
        {
          name: '补漆笔',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16099/205/78831984/2225/60b553eb/5a28aeb0N4506c877.jpg'
        },
        {
          name: '清洁剂',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t14935/325/267760917/4118/afd00ce5/5a28aecaN768ebd0c.jpg'
        },
        {
          name: '玻璃水',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t12715/298/1405099616/3387/25a26330/5a1fb8a0N16f3c4c8.jpg'
        },
        {
          name: '洗车水枪',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t14029/295/1407967263/5905/84225f11/5a1fb8a5Ndce3bc9a.jpg'
        },
        {
          name: '洗车配件',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12655/10/1745900547/2390/7412cf2a/5a28ae93N47c04444.jpg'
        },
        {
          name: '洗车机',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12781/349/1412442353/3384/d1141386/5a1fb8abN74454957.jpg'
        },
        {
          name: '镀晶镀膜',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13402/244/1755048828/2329/ff48b7a3/5a28ae9eN0e0d518c.jpg'
        },
        {
          name: '底盘装甲',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12301/336/1763842936/2725/dcb7ec53/5a28aeb5N9101722c.jpg'
        },
        {
          name: '汽车贴膜',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13897/34/1795082987/4366/d620529e/5a28aec2N38d4edad.jpg'
        }
        ]
      },
      {
        title: '车载电器',
        content: [{
          name: '车载充电器',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13120/234/1430829795/2613/71a128ac/5a1fb8d2N53bbd2ba.jpg'
        },
        {
          name: '车载影音',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16009/169/139891622/3304/fc0d3aa4/5a28af18N58a860d2.jpg'
        },
        {
          name: '车载吸尘器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12859/303/1767137526/4646/5604f297/5a28af63N96093470.jpg'
        },
        {
          name: '行车记录仪',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12709/153/1391603259/4200/cffde7ca/5a1fb8d8Nec239440.jpg'
        },
        {
          name: '倒车雷达',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13483/284/1797719351/4493/652fbe79/5a28af7dN193b42d2.jpg'
        },
        {
          name: '车载电器配件',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12868/357/1789898584/3125/b7129c1d/5a28af37N7e845bae.jpg'
        },
        {
          name: '车载蓝牙',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13069/106/1777037925/3254/730b096/5a28af8eN8ea0527d.jpg'
        },
        {
          name: '逆变器',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16468/11/126989101/3833/666e2171/5a28af4cN3c45de83.jpg'
        },
        {
          name: '导航仪',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15559/197/150160286/4180/eb63333/5a28af76Na536ce46.jpg'
        },
        {
          name: '车载净化器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13798/153/1786906064/2534/353f50db/5a28af69Ndceb2c4f.jpg'
        },
        {
          name: '车载生活电器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15148/355/283891285/2287/f1b2a8a/5a28af32N9edd6163.jpg'
        },
        {
          name: '车机导航',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12445/352/1400583521/2808/f265274c/5a1fb8ccNc70d25f5.jpg'
        },
        {
          name: '安全预警仪',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13666/275/1787641785/4758/37d354aa/5a28af6eNeea7197b.jpg'
        },
        {
          name: '应急电源',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13297/328/1797220076/3205/21e1ccb2/5a28af51N289374f3.jpg'
        },
        {
          name: '汽车音响',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13909/195/1739333054/4211/9df117ac/5a28af5bN88ae73d3.jpg'
        },
        {
          name: '车载冰箱',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t14659/96/296441048/3472/fcf57b43/5a28af56N0e0c1047.jpg'
        },
        {
          name: '对讲电台',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14125/314/1764298249/2331/5b04902d/5a28af83Nd51234b9.jpg'
        },
        {
          name: '智能驾驶',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16171/358/36053646/2556/cbed37df/5a28af87Ndc6b55ae.jpg'
        }
        ]
      },
      {
        title: '维修保养',
        content: [{
          name: '雨刷',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14110/128/1794506186/3303/eea90382/5a28aec5Ne425914d.jpg'
        },
        {
          name: '添加剂',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t12982/344/1362492420/4302/4c0f74a6/5a1fb8b4N19ad1bca.jpg'
        },
        {
          name: '防冻液',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16540/330/130514054/12069/95c44e67/5a28aefbN02da5d33.jpg'
        },
        {
          name: '滤清器',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12490/335/1739415266/3110/2c3d09c3/5a28af03N07cb55ad.jpg'
        },
        {
          name: '车灯',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t16090/311/113413633/3443/b0a1bdfe/5a28af10Nd511ffdd.jpg'
        },
        {
          neme: '轮胎',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12619/8/1412949255/2805/d742996f/5a1fb8baNbe801af8.jpg'
        },
        {
          neme: '蓄电池',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12475/328/1793519538/3709/a8304a7c/5a28aef4N004a0d07.jpg'
        },
        {
          neme: '刹车片/盘',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15214/193/274548195/3255/a9333caf/5a28aef7N05d04baf.jpg'
        },
        {
          neme: '火花塞',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14668/261/268602675/2789/10a1e817/5a28af1aN3b2757cd.jpg'
        },
        {
          neme: '轮毂',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15370/262/285003205/4050/555e6e8/5a28af0bNe7504197.jpg'
        },
        {
          neme: '维修配件',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12793/133/1771242864/3813/23e34620/5a28af05N66f07996.jpg'
        },
        {
          neme: '汽修工具',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12280/328/1780073746/4890/e9598c34/5a28aed6Ne7048664.jpg'
        },
        {
          neme: '改装配件',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t14707/81/321199285/2634/e3cc0499/5a28aed4N3c5ea973.jpg'
        },
        {
          neme: '正时皮带',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15841/167/157843162/3914/6ad382d5/5a28aeefNe427e09c.jpg'
        },
        {
          neme: '汽车喇叭',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t14773/170/274667667/3560/93c6fc19/5a28aee2Nb121ce32.jpg'
        },
        {
          neme: '机油',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12508/233/1395849766/11705/1fcbfbee/5a1fb8c0Nc032bfba.jpg'
        },
        {
          neme: '减震器',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16309/291/123892973/1964/b4a25276/5a28aeffNca84e133.jpg'
        },
        {
          neme: '汽车玻璃',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t15847/116/153996247/1915/cb6457c8/5a28aee4N6d58092c.jpg'
        }
        ]
      },
      {
        title: '安全自驾',
        content: [{
          name: '充气泵',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t12052/73/1403537398/6420/6cdab9b3/5a1fb87eN492a80d1.jpg'
        },
        {
          name: '胎压监测',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12607/279/1434843620/5174/4193569e/5a1fb883N2b7cae26.jpg'
        },
        {
          name: '储物箱',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t7666/126/4293816903/3695/ea27e6ce/5a28ae2bN42b8fce6.jpg'
        },
        {
          name: '应急救援',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16504/187/343184/7861/6f3b0acd/5a28ae41Ne66a694c.jpg'
        },
        {
          name: '自驾野营',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12493/22/1772407355/3901/e286b50/5a28ae34N27003782.jpg'
        },
        {
          name: '车载床',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16123/62/83517748/5520/ee46f113/5a28ae45Ndf989349.jpg'
        },
        {
          name: '防盗设备',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14146/21/1778772054/6668/223e656b/5a28ae39N7312afd9.jpg'
        },
        {
          name: '保温箱',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12655/225/1771786042/8355/577c5e8f/5a28ae27Na951b751.jpg'
        },
        {
          name: '灭火器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13984/192/1422847813/5163/36b1368c/5a1fb879N5ba11fd1.jpg'
        }

        ]
      },
      {
        title: '摩托车',
        content: [{
          name: '摩托车头盔',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t14581/93/272460507/5965/614ef46a/5a28addeN258ae607.jpg'
        },
        {
          name: '摩托车配件',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13942/109/1758550963/1822/dcac801b/5a28adf3N21a5cbb8.jpg'
        },
        {
          name: '摩托车',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13048/205/1421698063/2625/e9550dbc/5a1fb85fNcd4cd883.jpg'
        },
        {
          name: '豪爵摩托',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13954/109/1403915152/5396/bad96a75/5a1fb853Ncc712498.jpg'
        },
        {
          name: '五羊本田摩托',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12025/44/1405522589/6235/99f09982/5a1fb858N81a5f98f.jpg'
        },
        {
          name: '摩托车装备',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13405/180/1730865936/5159/87868482/5a28adf9N02752fbc.jpg'
        }
        ]
      },
      {
        title: '汽车服务',
        content: [{
          name: '保养维修',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14044/152/1397921810/4336/115112a3/5a1fb872Nd04e9dc9.jpg'
        },
        {
          name: '清洗美容',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12196/294/1407194755/3353/dd879ec0/5a1fb86dN0d5ba26d.jpg'
        },
        {
          name: '功能升级',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13663/196/1399478600/3202/6a7e8ec1/5a1fb867Ndaa4c0aa.jpg'
        },
        {
          name: '改装服务',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13780/141/1769890332/2745/d3794275/5a28ae21N015e1cc6.jpg'
        },
        {
          name: 'ETC',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12121/116/1826260526/10120/e28d50b8/5a28ae1dNccdca100.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '个护清洁',
        content: [{
          name: '纸品湿巾',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg'
        },
        {
          name: '衣物清洁',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12136/32/190594635/3030/39a660be/5a057ef3N4b20576c.jpg'
        },
        {
          name: '洗发护发',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12046/51/196865136/2542/dd0cb394/5a057eeaNe24e73fb.jpg'
        },
        {
          name: '家庭清洁',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg'
        },
        {
          name: '口腔护理',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t11596/91/1612970162/2450/608966a4/5a057efdN543407fa.jpg'
        },
        {
          name: '一次性用品',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t7282/295/4716826036/4665/da4c4dd2/5a057ed7N507ef94b.jpg'
        }
        ]
      },
      {
        title: '休闲零食',
        content: [{
          name: '休闲零食',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg'
        },
        {
          name: '坚果炒货',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t11461/336/1331406760/15773/60c49ab7/59ffd6d0Ncb29412d.png'
        },
        {
          name: '糖巧',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t11890/195/1248876103/12648/403ce46a/59ffd6b9Nc88344b5.png'
        },
        {
          name: '饼干蛋糕',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11500/115/1293305736/3233/7bb2056a/59ffd6ccNb9875d1d.jpg'
        },
        {
          name: '肉干肉脯',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t11749/28/952474396/2583/64b85652/59fc31b6N4feb7d84.jpg'
        },
        {
          name: '蜜饯果干',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t11275/128/1281544342/3341/64f437e/59ffd6fbN047718c7.jpg'
        },
        {
          name: '无糖食品',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t7570/153/3996735769/2714/a58d5793/59ffd6ffN95ab2f9b.jpg'
        }
        ]
      },
      {
        title: '水饮茗茶',
        content: [{
          name: '牛奶制品',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13120/365/181384138/2502/3eb53542/5a056b11N78c98876.jpg'
        },
        {
          name: '茗茶',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12181/363/183823010/2568/e92c4fe7/5a056b66Ne82a1269.jpg'
        },
        {
          name: '饮用水',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13309/261/184399972/3734/830948b1/5a0569bdN28dfb4c9.jpg'
        },
        {
          name: '成人奶粉',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12670/113/174191651/3245/1cc36ac6/5a056b6cN3b68c208.jpg'
        },
        {
          name: '饮料',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t7516/287/4519159825/3304/56011181/5a056afaN5db50aa8.jpg'
        },
        {
          name: '咖啡奶茶',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11491/1/1626234598/3499/92c24af5/5a056b14N6404e9ff.jpg'
        },
        {
          name: '冲饮谷物',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t14080/138/185079854/2956/b464265a/5a056b7aN919c5f27.jpg'
        },
        {
          name: '蜂蜜/柚子茶',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12043/48/185384379/3589/9bfccb6c/5a056b72Nc867599a.jpg'
        }
        ]
      },
      {
        title: '家居用品',
        content: [{
          name: '厨具',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t11752/101/1638319353/2874/c10cce77/5a058fb9Ncf8c0a7d.jpg'
        },
        {
          name: '女士内裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t11476/251/1649188972/2550/74e2eaef/5a058fe2N0110e541.jpg'
        },
        {
          name: '毛巾浴巾',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12028/314/184912884/3052/b3a30cf7/5a058ffcN7568d47a.jpg'
        },
        {
          name: '男袜',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t11404/234/1669889518/2261/2ab6200a/5a058fd7Nca78ace0.jpg'
        },
        {
          name: '女袜',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12517/41/189740623/2878/9efb544e/5a058fccN60cc0b78.jpg'
        },
        {
          name: '浴室用品',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12901/340/182237035/3038/549a612e/5a058f98Nd9f9d618.jpg'
        },
        {
          name: '文胸',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12955/64/172063752/1876/271495d9/5a058fc4N15c3857f.jpg'
        }
        ]
      },
      {
        title: '车载电器',
        content: [{
          name: '车载充电器',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13120/234/1430829795/2613/71a128ac/5a1fb8d2N53bbd2ba.jpg'
        },
        {
          name: '车载影音',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16009/169/139891622/3304/fc0d3aa4/5a28af18N58a860d2.jpg'
        },
        {
          name: '车载吸尘器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12859/303/1767137526/4646/5604f297/5a28af63N96093470.jpg'
        },
        {
          name: '行车记录仪',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12709/153/1391603259/4200/cffde7ca/5a1fb8d8Nec239440.jpg'
        },
        {
          name: '倒车雷达',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13483/284/1797719351/4493/652fbe79/5a28af7dN193b42d2.jpg'
        },
        {
          name: '车载电器配件',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12868/357/1789898584/3125/b7129c1d/5a28af37N7e845bae.jpg'
        },
        {
          name: '车载蓝牙',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13069/106/1777037925/3254/730b096/5a28af8eN8ea0527d.jpg'
        },
        {
          name: '逆变器',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16468/11/126989101/3833/666e2171/5a28af4cN3c45de83.jpg'
        },
        {
          name: '导航仪',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15559/197/150160286/4180/eb63333/5a28af76Na536ce46.jpg'
        },
        {
          name: '车载净化器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13798/153/1786906064/2534/353f50db/5a28af69Ndceb2c4f.jpg'
        },
        {
          name: '车载生活电器',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15148/355/283891285/2287/f1b2a8a/5a28af32N9edd6163.jpg'
        },
        {
          name: '车机导航',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12445/352/1400583521/2808/f265274c/5a1fb8ccNc70d25f5.jpg'
        },
        {
          name: '安全预警仪',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13666/275/1787641785/4758/37d354aa/5a28af6eNeea7197b.jpg'
        },
        {
          name: '应急电源',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13297/328/1797220076/3205/21e1ccb2/5a28af51N289374f3.jpg'
        },
        {
          name: '汽车音响',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13909/195/1739333054/4211/9df117ac/5a28af5bN88ae73d3.jpg'
        },
        {
          name: '车载冰箱',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t14659/96/296441048/3472/fcf57b43/5a28af56N0e0c1047.jpg'
        },
        {
          name: '对讲电台',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14125/314/1764298249/2331/5b04902d/5a28af83Nd51234b9.jpg'
        },
        {
          name: '智能驾驶',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16171/358/36053646/2556/cbed37df/5a28af87Ndc6b55ae.jpg'
        }
        ]
      },
      {
        title: '维修保养',
        content: [{
          name: '雨刷',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14110/128/1794506186/3303/eea90382/5a28aec5Ne425914d.jpg'
        },
        {
          name: '添加剂',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t12982/344/1362492420/4302/4c0f74a6/5a1fb8b4N19ad1bca.jpg'
        },
        {
          name: '防冻液',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t16540/330/130514054/12069/95c44e67/5a28aefbN02da5d33.jpg'
        },
        {
          name: '滤清器',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t12490/335/1739415266/3110/2c3d09c3/5a28af03N07cb55ad.jpg'
        },
        {
          name: '车灯',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t16090/311/113413633/3443/b0a1bdfe/5a28af10Nd511ffdd.jpg'
        },
        {
          neme: '轮胎',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12619/8/1412949255/2805/d742996f/5a1fb8baNbe801af8.jpg'
        },
        {
          neme: '蓄电池',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12475/328/1793519538/3709/a8304a7c/5a28aef4N004a0d07.jpg'
        },
        {
          neme: '刹车片/盘',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15214/193/274548195/3255/a9333caf/5a28aef7N05d04baf.jpg'
        },
        {
          neme: '火花塞',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t14668/261/268602675/2789/10a1e817/5a28af1aN3b2757cd.jpg'
        },
        {
          neme: '轮毂',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15370/262/285003205/4050/555e6e8/5a28af0bNe7504197.jpg'
        },
        {
          neme: '维修配件',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12793/133/1771242864/3813/23e34620/5a28af05N66f07996.jpg'
        },
        {
          neme: '汽修工具',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12280/328/1780073746/4890/e9598c34/5a28aed6Ne7048664.jpg'
        },
        {
          neme: '改装配件',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t14707/81/321199285/2634/e3cc0499/5a28aed4N3c5ea973.jpg'
        },
        {
          neme: '正时皮带',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15841/167/157843162/3914/6ad382d5/5a28aeefNe427e09c.jpg'
        },
        {
          neme: '汽车喇叭',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t14773/170/274667667/3560/93c6fc19/5a28aee2Nb121ce32.jpg'
        },
        {
          neme: '机油',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12508/233/1395849766/11705/1fcbfbee/5a1fb8c0Nc032bfba.jpg'
        },
        {
          neme: '减震器',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16309/291/123892973/1964/b4a25276/5a28aeffNca84e133.jpg'
        },
        {
          neme: '汽车玻璃',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t15847/116/153996247/1915/cb6457c8/5a28aee4N6d58092c.jpg'
        }
        ]
      },
      {
        title: '摩托车',
        content: [{
          name: '摩托车头盔',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t14581/93/272460507/5965/614ef46a/5a28addeN258ae607.jpg'
        },
        {
          name: '摩托车配件',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13942/109/1758550963/1822/dcac801b/5a28adf3N21a5cbb8.jpg'
        },
        {
          name: '摩托车',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13048/205/1421698063/2625/e9550dbc/5a1fb85fNcd4cd883.jpg'
        },
        {
          name: '豪爵摩托',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13954/109/1403915152/5396/bad96a75/5a1fb853Ncc712498.jpg'
        },
        {
          name: '五羊本田摩托',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12025/44/1405522589/6235/99f09982/5a1fb858N81a5f98f.jpg'
        },
        {
          name: '摩托车装备',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13405/180/1730865936/5159/87868482/5a28adf9N02752fbc.jpg'
        }
        ]
      },
      {
        title: '汽车服务',
        content: [{
          name: '保养维修',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14044/152/1397921810/4336/115112a3/5a1fb872Nd04e9dc9.jpg'
        },
        {
          name: '清洗美容',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12196/294/1407194755/3353/dd879ec0/5a1fb86dN0d5ba26d.jpg'
        },
        {
          name: '功能升级',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13663/196/1399478600/3202/6a7e8ec1/5a1fb867Ndaa4c0aa.jpg'
        },
        {
          name: '改装服务',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13780/141/1769890332/2745/d3794275/5a28ae21N015e1cc6.jpg'
        },
        {
          name: 'ETC',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12121/116/1826260526/10120/e28d50b8/5a28ae1dNccdca100.jpg'
        }
        ]
      }
    ],
    // 10-12
    [
      {
        title: '热卖选购',
        content: [{
          name: '夹克',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg'
        },
        {
          name: 'T恤',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg'
        },
        {
          name: '针织衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg'
        },
        {
          name: '衬衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg'
        },
        {
          name: '卫衣',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg'
        },
        {
          name: '风衣',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg'
        },
        {
          name: '牛仔裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg'
        },
        {
          name: '休闲裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg'
        },
        {
          name: '自营男装',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg'
        }
        ]
      },
      {
        title: '男士内搭',
        content: [{
          name: '新品T恤',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t17641/277/1305218449/8776/e5182bbe/5ac47ffaN8a7b2e14.png'
        }, {
          name: '短袖T恤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t18436/155/1324938407/6646/1a66cfa0/5ac47fffNe7a93aca.jpg'
        }, {
          name: '新品衬衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19030/113/1250466624/3376/b981fe07/5ac48007Nb30b2118.jpg'
        }, {
          name: '短袖衬衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16786/289/1311106267/4182/c345e2ef/5ac4800eN78bdf977.jpg'
        },
        {
          name: '新品卫衣',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t17824/6/1287333457/6576/aeae36f6/5ac48017N9347122f.jpg'
        }, {
          name: '连帽卫衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16987/129/1278260758/4740/58f780b2/5ac4801bN5bd994fa.jpg'
        },
        {
          name: '潮牌卫衣',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19366/130/1283276181/8302/a9d5eb82/5ac48021Ne7b57893.jpg'
        },
        {
          name: '长袖T恤',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18988/341/1273630612/8382/4109693d/5ac47fa6Nd128653e.jpg'
        },
        {
          name: '长袖衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18310/26/1273827800/2024/a6774615/5ac47fdaN6069d640.jpg'
        },
        {
          name: '免烫衬衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19750/102/1313789327/2597/1536d07c/5ac47fdeNbebe151e.jpg'
        },
        {
          name: '针织衫',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19270/191/1278480597/3933/bc516fa7/5ac47fe7N2718dc4b.jpg'
        }, {
          name: 'POLO衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17149/171/1334340006/3690/4e8b276a/5ac47ff1N20a0a421.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '热卖分类',
        content: [{
          name: '休闲鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12970/248/784792784/3062/9cc4be84/5a13957cN60262247.jpg'
        }, {
          name: '皮鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t11089/341/2234800375/3425/8950afe8/5a139577N054caadb.jpg'
        }, {
          name: '男靴',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13225/243/786727983/5634/d19769f6/5a139554N4c666839.jpg'
        }, {
          name: '帆布鞋',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg'
        }, {
          name: '板鞋',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg'
        }, {
          name: '自营鞋靴',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12985/234/771522231/6499/d3fc17ef/5a13955fN0af349c3.jpg'
        }, {
          name: '新品推荐',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18736/325/1285877732/4829/519f1c1c/5ac479f5Ne0b09e66.jpg'
        }]
      }, {
        title: '流行男鞋',
        content: [{
          name: '休闲鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13807/314/786063079/2610/c0e7de7b/5a139490Nc7fa0e4a.jpg'
        }, {
          name: '休闲户外鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12889/167/800455171/2803/81e2a0ef/5a139431Nb7ff4008.jpg'
        }, {
          name: '凉鞋',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t11824/310/2093755858/3582/469cedf4/5a139411N2cd65a08.jpg'
        }, {
          name: '功能鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13780/219/751655881/2924/ade4fd33/5a139431N4e649769.jpg'
        }, {
          name: '豆豆鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13561/339/767385863/4182/707daf17/5a13945aN18bb6107.jpg'
        }, {
          name: '商务休闲鞋',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13138/355/835254734/2223/adb0cd95/5a139489N23c871c6.jpg'
        }, {
          name: '传统布鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11803/345/2212661587/2218/85b38b81/5a139422N611a859c.jpg'
        }, {
          name: '板鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t11608/19/2161730920/5152/2fca75c0/5a13945cN82a4c505.jpg'
        }, {
          name: '正装鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13552/146/765573445/2431/4311417d/5a13947dN5d024b9f.jpg'
        }, {
          name: '增高鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11524/266/2251412452/3733/5935ecbd/5a139440N023ac2b2.jpg'
        }, {
          name: '拖鞋/人字拖',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13234/118/798001202/2581/6e6cc64d/5a139429N8c5c158d.jpg'
        }, {
          name: '男靴',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13810/253/776987983/5634/d19769f6/5a13946cNa011ca58.jpg'
        }, {
          name: '乐福鞋',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13036/184/750618513/5315/27749ec8/5a13945aN0c00392c.jpg'
        }, {
          name: '帆布鞋',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t14044/257/783366361/3748/3d98f985/5a139451N8d193f3b.jpg'
        }, {
          name: '工装鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12208/123/779741933/3594/a525bdff/5a13942fNfc1f3bb3.jpg'
        }, {
          name: '鞋配件',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12502/2/786527218/2504/49d81455/5a139351N42847264.jpg'
        }, {
          name: '雨鞋/雨靴',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12448/91/793144855/2913/5338be51/5a139359N8bc8ebbd.jpg'
        }, {
          name: '定制鞋',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t11653/185/2188705091/2427/1d7001c0/5a139415Nac3157d5.jpg'
        }]
      }],
    [
      {
        title: '热卖选购',
        content: [{
          name: '早春新品',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16828/262/724741631/2535/ba1020b7/5a9fb675N29136079.jpg'
        }, {
          name: '连衣裙',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg'
        }, {
          name: '衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18130/206/667191027/4173/bf767ab4/5a9fb67fN3834e3c9.jpg'
        }, {
          name: 'T恤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg'
        }, {
          name: '牛仔裤',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg'
        }, {
          name: '卫衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg'
        }, {
          name: '针织衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11794/114/2228059199/2529/60e8b474/5a12b21eN10fd877c.jpg'
        }, {
          name: '牛仔外套',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16375/270/2298165642/4388/99ff4997/5a9fb689Nc0bd43f4.jpg'
        }, {
          name: '自营女装',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13384/36/731966283/4383/871c7195/5a12b20aNeb8e3e2d.jpg'
        }]
      }, {
        title: '上装',
        content: [{
          name: '打底衫',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg'
        }, {
          name: '短外套',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg'
        }, {
          name: '百搭衬衫',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg'
        }, {
          name: '风衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
        }, {
          name: '长袖T恤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
        }, {
          name: '卫衣',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
        }, {
          name: '小西装',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19156/326/678660620/3005/436c3bc0/5a9fc007N3ef48a88.jpg'
        }, {
          name: '宽松卫衣',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15667/299/2238226291/4404/19e817ba/5a9fbff4N02a4be7b.jpg'
        }, {
          name: '雪纺衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15157/330/2467589403/6327/a53fc93/5a9fc00dN205f4cc7.jpg'
        }, {
          name: '长袖衬衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19723/352/684172430/6158/801dfc66/5a9fbfc2N85844dd0.jpg'
        }, {
          name: '字母T恤',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg'
        }, {
          name: '棒球衫',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t17245/317/695141729/3579/69cca106/5a9fbfe6N60e7552b.jpg'
        }, {
          name: '白衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14266/108/2448202334/2099/c038057b/5a9fbfc7N33c2ad32.jpg'
        }, {
          name: '针织衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19132/3/704890448/3460/dd1b10d7/5a9fbff9Nadff76ec.jpg'
        }, {
          name: '连帽卫衣',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18223/92/697465593/4089/d86e35c9/5a9fbfefN8a66a14c.jpg'
        }, {
          name: '半高领针织',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19300/1/682216747/2622/f4390db4/5a9fc001N69a37487.jpg'
        }]
      }],
    // 13-14
    [
      {
        'title': '运动热门购',
        'content': [
          { 'name': '跑步鞋', 'img': '//img30.360buyimg.com/focus/s140x140_jfs/t13993/246/156269250/8757/12386c/5a1fb5e7N12a676b6.jpg' },
          { 'name': '体育用品', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t12313/239/1414060687/10293/ca8ad748/5a1fb5e1Nd80abbc2.jpg' },
          { 'name': '鱼竿鱼线', 'img': '//img10.360buyimg.com/focus/s140x140_jfs/t14857/15/278809348/9274/471af69b/5a28a1cbN31dc4638.jpg' },
          { 'name': '山地车', 'img': '//img12.360buyimg.com/focus/s140x140_jfs/t12256/40/1732819447/8543/fbd86360/5a28a1c1N59fcfd07.jpg' },
          { 'name': '篮球鞋', 'img': '//img14.360buyimg.com/focus/s140x140_jfs/t14251/57/273900758/6114/905ba6f4/5a28a1c6Nf348ad99.jpg' },
          { 'name': '跑步机', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t14425/134/260129361/6373/1652f8da/5a28a1d8N132b23ae.jpg' },
          { 'name': '足球鞋', 'img': '//img12.360buyimg.com/focus/s140x140_jfs/t15955/30/148996016/7549/c8ef04b6/5a28a1dcN41f94944.jpg' },
          { 'name': '冲锋衣裤', 'img': '//img20.360buyimg.com/focus/s140x140_jfs/t12262/75/1430212632/7910/cafe32a7/5a1fb5dbN1b8d927a.jpg' }
        ]
      },
      {
        'title': '健身训练',
        'content': [
          { 'name': '仰卧板/收腹机', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t12628/6/1754416208/2433/a08f9900/5a27e63aNc3f81cfb.jpg' },
          { 'name': '哑铃', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t13321/210/1412509830/3035/a09e6c43/5a1fb54dNc8ade0cc.jpg' },
          { 'name': '其他器械', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t14278/128/244801323/2902/b1ba65fd/5a27e617Nf1d7fbb2.jpg' }
        ]
      }
    ],
    [
      {
        'title': '内衣配饰',
        'content': [
          { 'name': '内衣馆', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t16150/44/2324422460/7691/5b32064a/5a9fac31N41dea2e0.jpg' },
          { 'name': '大牌文胸', 'img': '//img14.360buyimg.com/focus/s140x140_jfs/t11533/246/2280103259/9386/6933199f/5a15214dNbf54520c.jpg' },
          { 'name': '自营内衣', 'img': '//img20.360buyimg.com/focus/s140x140_jfs/t12850/93/849533335/10330/7fdd04a9/5a15213fN09318254.jpg' },
          { 'name': '内衣爆款', 'img': '//img20.360buyimg.com/focus/s140x140_jfs/t11740/78/2314676437/4215/a56b7f6a/5a152146N3051a63d.jpg' },
          { 'name': '女士围巾', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t14365/252/779942291/2641/6f49b88f/5a38c43eN7beb8890.jpg' },
          { 'name': '配饰馆', 'img': '//img12.360buyimg.com/focus/s140x140_jfs/t12670/112/2276556764/4046/3fb6acb2/5a38c444N8b95d4c1.jpg' }
        ]
      },
      {
        'title': '内裤',
        'content': [
          { 'name': '男士内裤', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t12538/310/864919269/6647/41520471/5a15147bN74c49044.jpg' },
          { 'name': '女士内裤', 'img': '//img10.360buyimg.com/focus/s140x140_jfs/t12862/195/820653102/5281/33322b68/5a151484N7d472a83.jpg' },
          { 'name': '平角内裤', 'img': '//img10.360buyimg.com/focus/s140x140_jfs/t13141/156/856372705/8217/cf9a81e8/5a15141bN693b9da4.jpg' },
          { 'name': '蕾丝内裤', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t11326/68/2313427984/5200/6f2d749e/5a1512a6Nac606ead.jpg' },
          { 'name': '无痕内裤', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t11326/68/2313427984/5200/6f2d749e/5a1512a6Nac606ead.jpg' },
          { 'name': '低腰内裤', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t14194/304/860436894/6536/e1914cf2/5a1512baNb75597d1.jpg' },
          { 'name': '三角内裤', 'img': '//img10.360buyimg.com/focus/s140x140_jfs/t12880/82/810004296/4172/a5fb6b74/5a15142aN471bc5ff.jpg' },
          { 'name': '中腰内裤', 'img': '//img13.360buyimg.com/focus/s140x140_jfs/t13306/317/861414554/6573/4a853d68/5a1512acN653b02f4.jpg' },
          { 'name': '高腰内裤', 'img': '//img30.360buyimg.com/focus/s140x140_jfs/t11929/249/2361224378/3601/7c52bd14/5a1512bcN88c433e5.jpg' }
        ]
      }
    ],
    // 15--20重复
    [
      {
        title: '热卖选购',
        content: [{
          name: '夹克',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg'
        },
        {
          name: 'T恤',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg'
        },
        {
          name: '针织衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg'
        },
        {
          name: '衬衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg'
        },
        {
          name: '卫衣',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg'
        },
        {
          name: '风衣',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg'
        },
        {
          name: '牛仔裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg'
        },
        {
          name: '休闲裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg'
        },
        {
          name: '自营男装',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg'
        }
        ]
      },
      {
        title: '男士内搭',
        content: [{
          name: '新品T恤',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t17641/277/1305218449/8776/e5182bbe/5ac47ffaN8a7b2e14.png'
        }, {
          name: '短袖T恤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t18436/155/1324938407/6646/1a66cfa0/5ac47fffNe7a93aca.jpg'
        }, {
          name: '新品衬衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19030/113/1250466624/3376/b981fe07/5ac48007Nb30b2118.jpg'
        }, {
          name: '短袖衬衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16786/289/1311106267/4182/c345e2ef/5ac4800eN78bdf977.jpg'
        },
        {
          name: '新品卫衣',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t17824/6/1287333457/6576/aeae36f6/5ac48017N9347122f.jpg'
        }, {
          name: '连帽卫衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16987/129/1278260758/4740/58f780b2/5ac4801bN5bd994fa.jpg'
        },
        {
          name: '潮牌卫衣',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19366/130/1283276181/8302/a9d5eb82/5ac48021Ne7b57893.jpg'
        },
        {
          name: '长袖T恤',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18988/341/1273630612/8382/4109693d/5ac47fa6Nd128653e.jpg'
        },
        {
          name: '长袖衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18310/26/1273827800/2024/a6774615/5ac47fdaN6069d640.jpg'
        },
        {
          name: '免烫衬衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19750/102/1313789327/2597/1536d07c/5ac47fdeNbebe151e.jpg'
        },
        {
          name: '针织衫',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19270/191/1278480597/3933/bc516fa7/5ac47fe7N2718dc4b.jpg'
        }, {
          name: 'POLO衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17149/171/1334340006/3690/4e8b276a/5ac47ff1N20a0a421.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '热卖分类',
        content: [{
          name: '休闲鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12970/248/784792784/3062/9cc4be84/5a13957cN60262247.jpg'
        }, {
          name: '皮鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t11089/341/2234800375/3425/8950afe8/5a139577N054caadb.jpg'
        }, {
          name: '男靴',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13225/243/786727983/5634/d19769f6/5a139554N4c666839.jpg'
        }, {
          name: '帆布鞋',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg'
        }, {
          name: '板鞋',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg'
        }, {
          name: '自营鞋靴',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12985/234/771522231/6499/d3fc17ef/5a13955fN0af349c3.jpg'
        }, {
          name: '新品推荐',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18736/325/1285877732/4829/519f1c1c/5ac479f5Ne0b09e66.jpg'
        }]
      }, {
        title: '流行男鞋',
        content: [{
          name: '休闲鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13807/314/786063079/2610/c0e7de7b/5a139490Nc7fa0e4a.jpg'
        }, {
          name: '休闲户外鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12889/167/800455171/2803/81e2a0ef/5a139431Nb7ff4008.jpg'
        }, {
          name: '凉鞋',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t11824/310/2093755858/3582/469cedf4/5a139411N2cd65a08.jpg'
        }, {
          name: '功能鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13780/219/751655881/2924/ade4fd33/5a139431N4e649769.jpg'
        }, {
          name: '豆豆鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13561/339/767385863/4182/707daf17/5a13945aN18bb6107.jpg'
        }, {
          name: '商务休闲鞋',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13138/355/835254734/2223/adb0cd95/5a139489N23c871c6.jpg'
        }, {
          name: '传统布鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11803/345/2212661587/2218/85b38b81/5a139422N611a859c.jpg'
        }, {
          name: '板鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t11608/19/2161730920/5152/2fca75c0/5a13945cN82a4c505.jpg'
        }, {
          name: '正装鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13552/146/765573445/2431/4311417d/5a13947dN5d024b9f.jpg'
        }, {
          name: '增高鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11524/266/2251412452/3733/5935ecbd/5a139440N023ac2b2.jpg'
        }, {
          name: '拖鞋/人字拖',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13234/118/798001202/2581/6e6cc64d/5a139429N8c5c158d.jpg'
        }, {
          name: '男靴',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13810/253/776987983/5634/d19769f6/5a13946cNa011ca58.jpg'
        }, {
          name: '乐福鞋',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13036/184/750618513/5315/27749ec8/5a13945aN0c00392c.jpg'
        }, {
          name: '帆布鞋',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t14044/257/783366361/3748/3d98f985/5a139451N8d193f3b.jpg'
        }, {
          name: '工装鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12208/123/779741933/3594/a525bdff/5a13942fNfc1f3bb3.jpg'
        }, {
          name: '鞋配件',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12502/2/786527218/2504/49d81455/5a139351N42847264.jpg'
        }, {
          name: '雨鞋/雨靴',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12448/91/793144855/2913/5338be51/5a139359N8bc8ebbd.jpg'
        }, {
          name: '定制鞋',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t11653/185/2188705091/2427/1d7001c0/5a139415Nac3157d5.jpg'
        }]
      }],
    [
      {
        title: '热卖选购',
        content: [{
          name: '早春新品',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16828/262/724741631/2535/ba1020b7/5a9fb675N29136079.jpg'
        }, {
          name: '连衣裙',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg'
        }, {
          name: '衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18130/206/667191027/4173/bf767ab4/5a9fb67fN3834e3c9.jpg'
        }, {
          name: 'T恤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg'
        }, {
          name: '牛仔裤',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg'
        }, {
          name: '卫衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg'
        }, {
          name: '针织衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11794/114/2228059199/2529/60e8b474/5a12b21eN10fd877c.jpg'
        }, {
          name: '牛仔外套',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16375/270/2298165642/4388/99ff4997/5a9fb689Nc0bd43f4.jpg'
        }, {
          name: '自营女装',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13384/36/731966283/4383/871c7195/5a12b20aNeb8e3e2d.jpg'
        }]
      }, {
        title: '上装',
        content: [{
          name: '打底衫',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg'
        }, {
          name: '短外套',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg'
        }, {
          name: '百搭衬衫',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg'
        }, {
          name: '风衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
        }, {
          name: '长袖T恤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
        }, {
          name: '卫衣',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
        }, {
          name: '小西装',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19156/326/678660620/3005/436c3bc0/5a9fc007N3ef48a88.jpg'
        }, {
          name: '宽松卫衣',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15667/299/2238226291/4404/19e817ba/5a9fbff4N02a4be7b.jpg'
        }, {
          name: '雪纺衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15157/330/2467589403/6327/a53fc93/5a9fc00dN205f4cc7.jpg'
        }, {
          name: '长袖衬衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19723/352/684172430/6158/801dfc66/5a9fbfc2N85844dd0.jpg'
        }, {
          name: '字母T恤',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg'
        }, {
          name: '棒球衫',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t17245/317/695141729/3579/69cca106/5a9fbfe6N60e7552b.jpg'
        }, {
          name: '白衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14266/108/2448202334/2099/c038057b/5a9fbfc7N33c2ad32.jpg'
        }, {
          name: '针织衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19132/3/704890448/3460/dd1b10d7/5a9fbff9Nadff76ec.jpg'
        }, {
          name: '连帽卫衣',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18223/92/697465593/4089/d86e35c9/5a9fbfefN8a66a14c.jpg'
        }, {
          name: '半高领针织',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19300/1/682216747/2622/f4390db4/5a9fc001N69a37487.jpg'
        }]
      }],
    [
      {
        title: '热卖选购',
        content: [{
          name: '夹克',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg'
        },
        {
          name: 'T恤',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg'
        },
        {
          name: '针织衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg'
        },
        {
          name: '衬衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg'
        },
        {
          name: '卫衣',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg'
        },
        {
          name: '风衣',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg'
        },
        {
          name: '牛仔裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg'
        },
        {
          name: '休闲裤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg'
        },
        {
          name: '自营男装',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg'
        }
        ]
      },
      {
        title: '男士内搭',
        content: [{
          name: '新品T恤',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t17641/277/1305218449/8776/e5182bbe/5ac47ffaN8a7b2e14.png'
        }, {
          name: '短袖T恤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t18436/155/1324938407/6646/1a66cfa0/5ac47fffNe7a93aca.jpg'
        }, {
          name: '新品衬衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19030/113/1250466624/3376/b981fe07/5ac48007Nb30b2118.jpg'
        }, {
          name: '短袖衬衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16786/289/1311106267/4182/c345e2ef/5ac4800eN78bdf977.jpg'
        },
        {
          name: '新品卫衣',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t17824/6/1287333457/6576/aeae36f6/5ac48017N9347122f.jpg'
        }, {
          name: '连帽卫衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16987/129/1278260758/4740/58f780b2/5ac4801bN5bd994fa.jpg'
        },
        {
          name: '潮牌卫衣',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19366/130/1283276181/8302/a9d5eb82/5ac48021Ne7b57893.jpg'
        },
        {
          name: '长袖T恤',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18988/341/1273630612/8382/4109693d/5ac47fa6Nd128653e.jpg'
        },
        {
          name: '长袖衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18310/26/1273827800/2024/a6774615/5ac47fdaN6069d640.jpg'
        },
        {
          name: '免烫衬衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t19750/102/1313789327/2597/1536d07c/5ac47fdeNbebe151e.jpg'
        },
        {
          name: '针织衫',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19270/191/1278480597/3933/bc516fa7/5ac47fe7N2718dc4b.jpg'
        }, {
          name: 'POLO衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t17149/171/1334340006/3690/4e8b276a/5ac47ff1N20a0a421.jpg'
        }
        ]
      }
    ],
    [
      {
        title: '热卖分类',
        content: [{
          name: '休闲鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12970/248/784792784/3062/9cc4be84/5a13957cN60262247.jpg'
        }, {
          name: '皮鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t11089/341/2234800375/3425/8950afe8/5a139577N054caadb.jpg'
        }, {
          name: '男靴',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13225/243/786727983/5634/d19769f6/5a139554N4c666839.jpg'
        }, {
          name: '帆布鞋',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg'
        }, {
          name: '板鞋',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg'
        }, {
          name: '自营鞋靴',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12985/234/771522231/6499/d3fc17ef/5a13955fN0af349c3.jpg'
        }, {
          name: '新品推荐',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18736/325/1285877732/4829/519f1c1c/5ac479f5Ne0b09e66.jpg'
        }]
      }, {
        title: '流行男鞋',
        content: [{
          name: '休闲鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13807/314/786063079/2610/c0e7de7b/5a139490Nc7fa0e4a.jpg'
        }, {
          name: '休闲户外鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12889/167/800455171/2803/81e2a0ef/5a139431Nb7ff4008.jpg'
        }, {
          name: '凉鞋',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t11824/310/2093755858/3582/469cedf4/5a139411N2cd65a08.jpg'
        }, {
          name: '功能鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13780/219/751655881/2924/ade4fd33/5a139431N4e649769.jpg'
        }, {
          name: '豆豆鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t13561/339/767385863/4182/707daf17/5a13945aN18bb6107.jpg'
        }, {
          name: '商务休闲鞋',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t13138/355/835254734/2223/adb0cd95/5a139489N23c871c6.jpg'
        }, {
          name: '传统布鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11803/345/2212661587/2218/85b38b81/5a139422N611a859c.jpg'
        }, {
          name: '板鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t11608/19/2161730920/5152/2fca75c0/5a13945cN82a4c505.jpg'
        }, {
          name: '正装鞋',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13552/146/765573445/2431/4311417d/5a13947dN5d024b9f.jpg'
        }, {
          name: '增高鞋',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t11524/266/2251412452/3733/5935ecbd/5a139440N023ac2b2.jpg'
        }, {
          name: '拖鞋/人字拖',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t13234/118/798001202/2581/6e6cc64d/5a139429N8c5c158d.jpg'
        }, {
          name: '男靴',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13810/253/776987983/5634/d19769f6/5a13946cNa011ca58.jpg'
        }, {
          name: '乐福鞋',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t13036/184/750618513/5315/27749ec8/5a13945aN0c00392c.jpg'
        }, {
          name: '帆布鞋',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t14044/257/783366361/3748/3d98f985/5a139451N8d193f3b.jpg'
        }, {
          name: '工装鞋',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t12208/123/779741933/3594/a525bdff/5a13942fNfc1f3bb3.jpg'
        }, {
          name: '鞋配件',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t12502/2/786527218/2504/49d81455/5a139351N42847264.jpg'
        }, {
          name: '雨鞋/雨靴',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t12448/91/793144855/2913/5338be51/5a139359N8bc8ebbd.jpg'
        }, {
          name: '定制鞋',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t11653/185/2188705091/2427/1d7001c0/5a139415Nac3157d5.jpg'
        }]
      }],
    [
      {
        title: '热卖选购',
        content: [{
          name: '早春新品',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16828/262/724741631/2535/ba1020b7/5a9fb675N29136079.jpg'
        }, {
          name: '连衣裙',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg'
        }, {
          name: '衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t18130/206/667191027/4173/bf767ab4/5a9fb67fN3834e3c9.jpg'
        }, {
          name: 'T恤',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg'
        }, {
          name: '牛仔裤',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg'
        }, {
          name: '卫衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg'
        }, {
          name: '针织衫',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11794/114/2228059199/2529/60e8b474/5a12b21eN10fd877c.jpg'
        }, {
          name: '牛仔外套',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t16375/270/2298165642/4388/99ff4997/5a9fb689Nc0bd43f4.jpg'
        }, {
          name: '自营女装',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t13384/36/731966283/4383/871c7195/5a12b20aNeb8e3e2d.jpg'
        }]
      }, {
        title: '上装',
        content: [{
          name: '打底衫',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg'
        }, {
          name: '短外套',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg'
        }, {
          name: '百搭衬衫',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg'
        }, {
          name: '风衣',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
        }, {
          name: '长袖T恤',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
        }, {
          name: '卫衣',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
        }, {
          name: '小西装',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19156/326/678660620/3005/436c3bc0/5a9fc007N3ef48a88.jpg'
        }, {
          name: '宽松卫衣',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15667/299/2238226291/4404/19e817ba/5a9fbff4N02a4be7b.jpg'
        }, {
          name: '雪纺衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t15157/330/2467589403/6327/a53fc93/5a9fc00dN205f4cc7.jpg'
        }, {
          name: '长袖衬衫',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t19723/352/684172430/6158/801dfc66/5a9fbfc2N85844dd0.jpg'
        }, {
          name: '字母T恤',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg'
        }, {
          name: '棒球衫',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t17245/317/695141729/3579/69cca106/5a9fbfe6N60e7552b.jpg'
        }, {
          name: '白衬衫',
          img: '//img11.360buyimg.com/focus/s140x140_jfs/t14266/108/2448202334/2099/c038057b/5a9fbfc7N33c2ad32.jpg'
        }, {
          name: '针织衫',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t19132/3/704890448/3460/dd1b10d7/5a9fbff9Nadff76ec.jpg'
        }, {
          name: '连帽卫衣',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t18223/92/697465593/4089/d86e35c9/5a9fbfefN8a66a14c.jpg'
        }, {
          name: '半高领针织',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19300/1/682216747/2622/f4390db4/5a9fc001N69a37487.jpg'
        }]
      }]
  ]
  res.send(arr)
})

// 拼购-精选 头部分类列表数据
router.get('/shopToplist', function (req, res, next) {
  var arr = [
    '手机',
    '鞋包',
    '服饰',
    '日用',
    '家电',
    '食品',
    '汽车',
    '家具',
    '美妆',
    '内衣',
    '家装',
    '数码',
    '母婴',
    '居家',
    '生鲜',
    '配饰',
    '文娱'
  ]
  res.send(arr)
})

// 拼购-精选 9.9包邮菜单栏
router.get('/shophot', function (req, res, next) {
  var arr = [
    {
      img: '//img14.360buyimg.com/jdphoto/jfs/t1/29835/2/6408/4827/5c5139d6E5bf4ac5c/acb10cf198cbf8c4.png!q70.webp',
      name: '9.9包邮'
    },
    {
      img: '//img10.360buyimg.com/jdphoto/jfs/t1/16610/39/6413/5001/5c514053Eaf4eddfc/128094e0b7bcb74e.png!q70.webp',
      name: '1元福利'
    },
    {
      img: '//img30.360buyimg.com/jdphoto/jfs/t1/7914/18/13869/5088/5c514138E5f2160fe/289b178bf228f322.png!q70.webp',
      name: '好货清单'
    },
    {
      img: '//img12.360buyimg.com/jdphoto/jfs/t1/22795/32/6449/5369/5c514148Ed54a0e81/cc10349285f3e45a.png!q70.webp',
      name: '自营优选'
    },
    {
      img: '//img12.360buyimg.com/jdphoto/jfs/t1/28142/32/6416/5244/5c514161E4afc441f/d5a0c5862931caa4.png!q70.webp',
      name: '平价超市'
    },
    {
      img: '//img12.360buyimg.com/jdphoto/jfs/t1/29516/28/6926/6262/5c63de3dE7e80526d/5223684ad5bfdb93.png!q70.webp',
      name: '名品清仓'
    },
    {
      img: '//img12.360buyimg.com/jdphoto/jfs/t1/11114/35/7351/4029/5c541a02E7cf70275/79bfa5eaae80a0a9.png!q70.webp',
      name: '工厂直供'
    },
    {
      img: '//img20.360buyimg.com/jdphoto/jfs/t1/7345/35/15911/8184/5c74e104E3bf7ff8a/9d99c8b6fbca294b.gif',
      name: '京东砍价'
    },
    {
      img: '//img12.360buyimg.com/jdphoto/jfs/t1/8247/39/13964/5649/5c514681Ef3f4ef4c/a84c972de0142520.png!q70.webp',
      name: '签到领红包'
    },
    {
      img: '//img12.360buyimg.com/jdphoto/jfs/t1/8247/39/13964/5649/5c514681Ef3f4ef4c/a84c972de0142520.png!q70.webp',
      name: '新品低价拼'
    }
  ]
  res.send(arr)
})

// 拼购-精选 今日必拼数据
router.get('/sTodayBuy', function (req, res, next) {
  var arr = [
    [
      { 'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/42642/40/1498/195993/5cc6a439E827056ce/cfce9834d1a4ff4f.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img14.360buyimg.com/evalpic/s240x240_jfs/t1/43519/10/1096/101104/5cc51cdcE7ce7e96d/ce83761ff5be4d64.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼2215件' },
      { 'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/20033/1/13846/145456/5ca1cb51Edaa61859/8f829d9d11a95da8.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼2.3万件' }
    ],
    [
      { 'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/32842/4/7763/192083/5c9adecaE730db63f/60635a7ab638b002.png!q70.webp', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/24018/9/14904/119306/5cada591E2b232f87/22824f3b850717ac.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/26260/18/14269/268886/5ca5b6aeEc9251a7a/e8b3afd4d1c61088.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' }
    ],
    [
      { 'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/34361/5/8888/130503/5cce3fb9E4c7521cd/97a2c93cac59f6de.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t24937/131/498228633/238856/5f89f528/5b72950bNe6b22934.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/40385/9/1535/212831/5cbd7a2aE586469ed/f6e82017e52b55db.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' }
    ],
    [
      { 'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/43796/2/1787/246390/5cc7d7c6E638541ef/277fdeb6b8312214.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/1425/36/11242/498119/5bd00ff1Eb5773c71/406cc5d611edbb98.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img13.360buyimg.com/evalpic/s240x240_jfs/t1/36591/19/7488/63120/5cc7d4aeE9517a377/59e5bae329b5b170.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' }
    ],
    [
      { 'img': '//img14.360buyimg.com/evalpic/s240x240_jfs/t1/16677/4/15461/268106/5cb028ecE18e2411f/7dc04f643b1fc9ef.png!q70.webp', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/20303/22/15611/363054/5cb33332Eb571aef8/245f301d7feed301.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' },
      { 'img': '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/30911/23/11264/126440/5cb4451dE9a879856/3b39420028b2f977.jpg!q70.dpg', 'form': '2人拼', 'price': 14.90, 'state': '已拼4.4万件' }
    ]
  ]
  res.send(arr)
})

// 拼购-精选 每日上新
router.get('/everydaynew', function (req, res, next) {
  var arr = [{
    ware: [
      {
        img: '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/33942/12/6230/210631/5cc154b1E9a6441c4/4b8023ca763ecfad.jpg!q70.dpg',
        name: '臻惜 4层本色抽纸家庭装餐巾纸 母婴纸巾 30包【每包9毛】',
        tag1: '四层本色',
        tag2: '工厂直供',
        int: '26',
        dec: '90',
        person: '11.2万'
      },
      {
        img: '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/26068/18/13878/142555/5ca32128E0837a75c/a464045b6754bfdb.jpg!q70.dpg',
        name:
          '【买就送冰丝袖套】雪纺口罩女夏季防晒透气开车骑车防紫外线护颈全遮脸面纱遮阳防晒面罩 郁金香-白色',
        tag1: '出游必备',
        tag2: '防晒神器',
        int: '6',
        dec: '90',
        person: '2164'
      },
      {
        img: '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/28160/30/10622/143607/5c88b0bfEd39357a1/178e6e82fe59ce1e.jpg!q70.dpg',
        name:
          '好质量 工厂直供】双肩包男士帆布背包大容量电脑包简约休闲旅行包复古书包 1823卡其',
        tag1: '工厂直供',
        tag2: '超大容量',
        int: '29',
        dec: '90',
        person: '516'
      },
      {
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/41553/22/1654/201798/5cc6f7afE879922a5/7f9eebff708397b6.jpg!q70.dpg',
        name:
          '休闲宽松显瘦绑带印花斜纹绸拼接棉夏季T恤女 白色 L(建议100-115斤)',
        tag1: '休闲显瘦',
        tag2: '宽松女款',
        int: '39',
        dec: '80',
        person: '13'
      },
      {
        img:
          '//img10.360buyimg.com/evalpic/s400x400_jfs/t1/26975/9/11045/294001/5c8b7815Ef76aded2/b64010ffc7bd02e9.jpg!q70.dpg',
        name:
          '睡衣女夏季短袖可爱卡通小清新两件套装休闲大码夏天家居服 小黄蜂 M',
        tag1: '亲肤透气',
        tag2: '亲肤透气',
        int: '15',
        dec: '90',
        person: '5721'
      },
      {
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/30913/25/2447/164213/5c6b644cEc27a37fc/a580823e85af2084.jpg!q70.dpg',
        name:
          '新百泰袜子男士短袜防臭吸汗纯棉船袜男夏季低帮浅口运动隐形袜黑薄款 混色 5双',
        tag1: '防臭吸汗',
        tag2: '限时特惠',
        int: '9',
        dec: '80',
        person: '45'
      },
      {
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/26734/3/9805/157376/5c81f3d7E35d676a4/45eb38096999d3ee.jpg!q70.dpg',
        name:
          '【五一出门必备】【可单肩可双肩】2019春季双肩包包女士背包多功能手提斜挎包pu软皮背包 黑色',
        tag1: '下单即送',
        tag2: '厂家直销',
        int: '29',
        dec: '90',
        person: '1342'
      }
    ],
    banner: [
      {
        img:
          '//img12.360buyimg.com/mcoss/jfs/t1/35973/3/7562/98641/5cc80321E997914e9/93720b5aef254f50.jpg!q70.dpg',
        everyB: [
          {
            img:
              '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/39316/21/1029/213580/5cbbc986E72c06c6d/4bd002d60fad6b72.jpg!q70.dpg',
            dis:
              '【纤丝鸟】【10双-20双】男士丝袜夏季薄款透气防臭黑色春秋中筒袜超薄丝光冰丝袜子男短袜 男混色10双',
            priceint: '9',
            pricedec: '90'
          },
          {
            img:
              '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/33280/2/1525/123054/5ca609eaE7c3fe33e/011128b248a46c9f.jpg!q70.dpg',
            dis:
              '迷你台式小风扇USB充电学生便携式风扇桌面手持办公室宿舍随身电风扇 （随机颜色）小风扇+充电电池+充电线',
            priceint: '9',
            pricedec: '90'
          },
          {
            img:
              '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/12283/31/14170/92302/5ca4940fE9e718284/cebf251ebb0e3af2.jpg!q70.dpg',
            dis:
              '大帽檐防晒衣 女夏季新款防晒服轻薄快干防风防水透气风衣外套遮阳防紫外线女款学生韩版短款衫短外套 白色大帽檐防晒衣+耳朵（首发升级',
            priceint: '29',
            pricedec: '00'
          }
        ]
      }
    ]
  }, {
    ware: [
      {
        img: '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/38809/37/1359/106640/5cbd14b5E0d6a0aae/a004e31718d53c90.jpg!q70.dpg',
        name: '四季播种【30粒已开口】水培碗莲种子套装桌面水培 单独5粒种子不含其他',
        tag1: '6天就能发芽',
        tag2: '6天就能发芽',
        int: '2',
        dec: '60',
        person: '5423'
      },
      {
        img: '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/30032/17/10373/128093/5caf183bE9388ae0b/b9e58bf941fc5a01.jpg!q70.dpg',
        name:
          '双惯性越野车  抗耐摔玩具车 四驱惯性越野车',
        tag1: '双惯性越野车',
        tag2: '拼购专享',
        int: '9',
        dec: '90',
        person: '1860'
      },
      {
        img: '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/31007/27/15325/210479/5cc1871aE42cbbdba/0e4b0a195e66db18.jpg!q70.dpg',
        name:
          '网红头饰头绳皮筋发圈成人豹纹韩版简约可爱橡皮筋扎头发 掌柜《四件套》',
        tag1: '网红爆款',
        tag2: '时尚豹纹',
        int: '9',
        dec: '90',
        person: '426'
      },
      {
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/23760/15/14693/150551/5caac69cE1953fdb3/e9dd05627b577ebb.jpg!q70.dpg',
        name:
          '吊带背心女外穿网红爆款美背内衣带胸垫性感内搭打底衫上衣 灰色 单件 均码（适于80-140斤）',
        tag1: '带胸垫背心',
        tag2: '美背吊带背心',
        int: '12',
        dec: '90',
        person: '1421'
      },
      {
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/22224/35/6927/184349/5c64d5abE974bd3ce/3e8495f3da30128e.jpg!q70.dpg',
        name:
          '【单瓶低至9.9】超能洗衣液 时尚炫彩植翠低泡薰衣草香 爆款3件套',
        tag1: '名品特卖',
        tag2: '低价优惠',
        int: '29',
        dec: '90',
        person: '6294'
      },
      {
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/16755/38/14646/314468/5ca80f2bEf477362e/7cbf575be0f6705d.jpg!q70.dpg',
        name:
          '小宝贝抽纸婴儿纸巾抽取式面巾纸餐巾纸擦手纸卫生纸 7981D27',
        tag1: '四层加厚',
        tag2: '亲肤柔韧',
        int: '25',
        dec: '80',
        person: '1991'
      },
      {
        img:
          '//img10.360buyimg.com/evalpic/s400x400_jfs/t1/34080/5/7137/126909/5cc0279bE4d0bbc7a/822021bb1b5af4da.jpg!q70.dpg',
        name:
          '儿童百变积木送收纳盒和贴纸大颗粒3-6岁拼装宝宝益智积木送莱德队长玩具男女孩 100颗粒【礼盒】+莱德队长',
        tag1: '百变积木',
        tag2: '送汪汪队',
        int: '8',
        dec: '80',
        person: '5429'
      }
    ],
    banner: [
      {
        img:
          '//img12.360buyimg.com/mcoss/jfs/t1/42118/7/1946/54714/5cc81bcbE1b8aaa23/b23bd3cd05c65a26.jpg!q70.dpg',
        everyB: [
          {
            img:
              '//img10.360buyimg.com/evalpic/s240x240_jfs/t1/32138/1/15156/114804/5cc14a41Efe9337a6/6f28226d351a869e.jpg!q70.dpg',
            dis:
              '床头LED台灯护眼学习USB充电夹子式小迷你卧室床头大学生书桌宿舍 立式款+送USB线充电',
            priceint: '18',
            pricedec: '80'
          },
          {
            img:
              '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/7900/15/6101/517410/5bdfea4fEcfe2fbc7/f0c97be933cd4d8e.jpg!q70.dpg',
            dis:
              '督牌 转换插头多功能插座排插无线usb插板不带线一转二多插座转换器 X2 蓝色',
            priceint: '9',
            pricedec: '90'
          },
          {
            img:
              '//img12.360buyimg.com/evalpic/s240x240_jfs/t1/27105/24/7256/52544/5c6a5977E77b21ef5/a95dee653bb0b30b.jpg!q70.dpg',
            dis:
              '【送透明胶棒】热熔胶枪家用玻璃胶枪手工diy硅胶条热熔胶棒11mm7mm热熔胶 56W热熔胶枪+10根胶棒',
            priceint: '9',
            pricedec: '90'
          }
        ]
      }
    ]
  }]
  res.send(arr)
})
router.get('/miaosha', function (req, res, next) {
  var arr = [
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/4484/29/11259/142709/5bce81bbE3e303c66/d2925e7533a4c44c.jpg!q70.dpg',
      price: '￥2500',
      sprice: '￥250'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/35099/35/4453/118480/5cc11e9aE606570fb/36ebb3f7ab0d5497.jpg!q70.dpg',
      price: '￥6500',
      sprice: '￥250'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/36136/23/2213/196291/5cb58626E9c1f7926/c95a1f3e7279f965.jpg!q70.dpg',
      price: '￥3800',
      sprice: '￥3410'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/35988/11/1638/211128/5cb3eba1Ed947ec7a/c260f42a62629f61.jpg!q70.dpg',
      price: '￥5200',
      sprice: '￥650'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t21247/165/397819353/109580/3c154914/5b0cdebeN3312b70b.jpg!q70.dpg',
      price: '￥1200',
      sprice: '￥500'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/20365/14/3265/73248/5c258375E0d9dd4b9/c7f7eae7d880dfb9.jpg!q70.dpg',
      price: '￥5600',
      sprice: '￥250'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/33391/28/8837/107338/5cc7d15fE6ce13e5b/4c164867f5561560.jpg!q70.dpg',
      price: '￥6300',
      sprice: '￥630'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/4527/1/5981/186643/5ba1b24bE6c76c507/0a0ec4be7251df87.jpg!q70.dpg',
      price: '￥8000',
      sprice: '￥920'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/19219/30/10994/185794/5c8b2c02E40e189fb/b1f650e0c319f141.jpg!q70.dpg',
      price: '￥2580',
      sprice: '￥250'
    },
    {
      img: '//img10.360buyimg.com/mobilecms/jfs/t1/35099/35/4453/118480/5cc11e9aE606570fb/36ebb3f7ab0d5497.jpg!q70.dpg',
      price: '￥1200',
      sprice: '￥250'
    }
  ]
  res.send(arr)
})
router.get('/want', function (req, res, next) {
  var arr = [
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/7530/24/14114/131820/5c511bb0Eed19c682/56f8b21be7647688.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  亦舒堂 黑苦荞茶天然硒荞麦茶 全胚芽富硒苦荞茶 安康荞子茶 野兰荞茶 苦芥乌麦茶 硒谷黑苦荞茶             ',
      money: '$42',
      pur: '闪购'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t21250/185/425831632/186147/f98cb1a7/5b0d1692N46f9a5f9.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  佳驰 竹砧板 切菜板38*28*1.8cm JC-ZB38             ',
      money: '$19.9',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t25009/21/2216981778/370096/e2af1f70/5bc69da1N3147afbf.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  麦富迪 宠物狗粮 藻趣儿通用成犬粮7.5kg             ',
      money: '$129',
      pur: '满减'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/18547/12/11644/308238/5c90b642E2d411d76/6350610cbf84d11c.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  卡饰社（Carsetcity）竹片凉垫凉席 汽车用品坐垫 座垫座套 通用型CS-83091棕色             ',
      money: '$29',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/35395/17/4145/82605/5cbabe7dEfc0505c2/8ee06a15499ed677.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    小分子多肽狗粮 全价天然粮 小型犬幼犬成犬全期通用型 泰迪法斗柯基 美毛亮眸促进发育 2kg4斤             ',
      money: '$59.8',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t23497/214/1736254635/277698/cccf7d9c/5b698401Nc19e22e9.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  佳佰 陶瓷马克杯 情侣水杯居家办公咖啡杯茶杯牛奶杯早餐麦片杯 可爱动物粉红猪猪 【一千个以上接受定制】             ',
      money: '$14.8',
      pur: '闪购'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t25828/59/2184542447/245050/6173ee11/5bc588e8Naf16a168.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  亦舒堂 火麻茶广西火麻生态茶 木耳火麻仁茶 莱菔子桑葚火麻茶 白果火麻茶 送老人送长辈 决明子火麻茶             ',
      money: '$45',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t4681/257/55967336/565371/e9939e85/58c8e329N51e437c3.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价             ',
      money: '$15',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/22784/24/12925/166274/5c9b56b7Eb955e583/c8f787e69de9f124.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    圣天虹发热王护腰带 腰间盘突出腰椎腰疼自发热暖腰暖胃远红外线发热男女四季通用 升级款+【配3000Mah电池+只有均码】 均码（2尺2~2尺9）             ',
      money: '$268',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/9913/32/15866/84850/5c7354f7E6b903545/9f98bbaa86f0c4ea.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    过道灯led吸顶灯现代简约圆形客厅餐厅卧室阳台书房餐厅过道灯饰灯 全白面包 白光(单色) 12W(210mm)             ',
      money: '$16.02',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/7530/24/14114/131820/5c511bb0Eed19c682/56f8b21be7647688.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  亦舒堂 黑苦荞茶天然硒荞麦茶 全胚芽富硒苦荞茶 安康荞子茶 野兰荞茶 苦芥乌麦茶 硒谷黑苦荞茶             ',
      money: '$42',
      pur: '闪购'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t21250/185/425831632/186147/f98cb1a7/5b0d1692N46f9a5f9.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  佳驰 竹砧板 切菜板38*28*1.8cm JC-ZB38             ',
      money: '$19.9',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t25009/21/2216981778/370096/e2af1f70/5bc69da1N3147afbf.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  麦富迪 宠物狗粮 藻趣儿通用成犬粮7.5kg             ',
      money: '$129',
      pur: '满减'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/18547/12/11644/308238/5c90b642E2d411d76/6350610cbf84d11c.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  卡饰社（Carsetcity）竹片凉垫凉席 汽车用品坐垫 座垫座套 通用型CS-83091棕色             ',
      money: '$29',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/35395/17/4145/82605/5cbabe7dEfc0505c2/8ee06a15499ed677.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    小分子多肽狗粮 全价天然粮 小型犬幼犬成犬全期通用型 泰迪法斗柯基 美毛亮眸促进发育 2kg4斤             ',
      money: '$59.8',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t23497/214/1736254635/277698/cccf7d9c/5b698401Nc19e22e9.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  佳佰 陶瓷马克杯 情侣水杯居家办公咖啡杯茶杯牛奶杯早餐麦片杯 可爱动物粉红猪猪 【一千个以上接受定制】             ',
      money: '$14.8',
      pur: '闪购'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t25828/59/2184542447/245050/6173ee11/5bc588e8Naf16a168.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                  亦舒堂 火麻茶广西火麻生态茶 木耳火麻仁茶 莱菔子桑葚火麻茶 白果火麻茶 送老人送长辈 决明子火麻茶             ',
      money: '$45',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t4681/257/55967336/565371/e9939e85/58c8e329N51e437c3.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价             ',
      money: '$15',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/22784/24/12925/166274/5c9b56b7Eb955e583/c8f787e69de9f124.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    圣天虹发热王护腰带 腰间盘突出腰椎腰疼自发热暖腰暖胃远红外线发热男女四季通用 升级款+【配3000Mah电池+只有均码】 均码（2尺2~2尺9）             ',
      money: '$268',
      pur: '券'
    },
    {
      ads: '//img14.360buyimg.com/n7/jfs/t1/9913/32/15866/84850/5c7354f7E6b903545/9f98bbaa86f0c4ea.jpg!q70.dpg',
      sup: '//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp',
      details: '                                                                    过道灯led吸顶灯现代简约圆形客厅餐厅卧室阳台书房餐厅过道灯饰灯 全白面包 白光(单色) 12W(210mm)             ',
      money: '$16.02',
      pur: '券'
    }
  ]
  res.send(arr)
})
// 拼购 top数据
router.get('/sRightTop', function (req, res, next) {
  var arr = [
    // 1 手机
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t17119/354/2070752553/7977/8be2cc67/5ae1a6d0N07272d3b.png!q70.webp',
        title: '手机'
      },
      {
        id: 1,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t17950/103/2040465839/4875/fc93ac10/5ae1a738N512f4eb2.png!q70.webp',
        title: '耳机音响'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t18466/17/2079008221/5345/829bc2f6/5ae1a76eN5020d145.png!q70.webp',
        title: '其他配件'
      },
      {
        id: 3,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t17887/264/2051961894/9975/f1f25e4f/5ae1a713N1032384b.png!q70.webp',
        title: '壳膜线'
      }
    ],
    // 2 鞋包
    [
      {
        id: 0,
        img:
          '//img10.360buyimg.com/jdphoto/s72x72_jfs/t18499/226/633889171/25634/fc70cb8c/5a9e5013N2f7f61ce.png!q70.webp',
        title: '潮流女鞋'
      },
      {
        id: 1,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t14272/306/2427072392/27451/57fdae10/5a9e505aN718cd13e.png!q70.webp',
        title: '潮流男鞋'
      },
      {
        id: 2,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t15085/272/2355023288/25197/61f4e02e/5a9e5129Na0e58860.png!q70.webp',
        title: '男包箱包'
      },
      {
        id: 3,
        img:
          '//img14.360buyimg.com/jdphoto/s72x72_jfs/t15265/54/2450875048/26574/96f1621e/5a9e50dbN4a918d09.png!q70.webp',
        title: '时尚女包'
      }
    ],
    // 3 服饰
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/31025/37/13173/10342/5cb9add1E0c2b869c/3aa7fd49269bc30e.png!q70.webp',
        title: '百搭T恤'
      },
      {
        id: 1,
        img:
          '//img14.360buyimg.com/jdphoto/jfs/t1/35800/38/1608/9114/5cb9b3c6Ede7411dd/8668206aa7d604a9.png!q70.webp',
        title: '气质连衣裙'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/33203/32/5308/25225/5cb9b3d2Ea5b1fad8/a783e7975d483f30.png!q70.webp',
        title: '运动服饰'
      },
      {
        id: 3,
        img:
          '//img30.360buyimg.com/jdphoto/jfs/t1/30239/27/13347/23595/5cb9b24eE688218c1/440d03b12783d70a.png!q70.webp',
        title: '男装上衣'
      }
    ],
    // 以下为重复数据 14条
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t17119/354/2070752553/7977/8be2cc67/5ae1a6d0N07272d3b.png!q70.webp',
        title: '手机'
      },
      {
        id: 1,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t17950/103/2040465839/4875/fc93ac10/5ae1a738N512f4eb2.png!q70.webp',
        title: '耳机音响'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t18466/17/2079008221/5345/829bc2f6/5ae1a76eN5020d145.png!q70.webp',
        title: '其他配件'
      },
      {
        id: 3,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t17887/264/2051961894/9975/f1f25e4f/5ae1a713N1032384b.png!q70.webp',
        title: '壳膜线'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img10.360buyimg.com/jdphoto/s72x72_jfs/t18499/226/633889171/25634/fc70cb8c/5a9e5013N2f7f61ce.png!q70.webp',
        title: '潮流女鞋'
      },
      {
        id: 1,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t14272/306/2427072392/27451/57fdae10/5a9e505aN718cd13e.png!q70.webp',
        title: '潮流男鞋'
      },
      {
        id: 2,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t15085/272/2355023288/25197/61f4e02e/5a9e5129Na0e58860.png!q70.webp',
        title: '男包箱包'
      },
      {
        id: 3,
        img:
          '//img14.360buyimg.com/jdphoto/s72x72_jfs/t15265/54/2450875048/26574/96f1621e/5a9e50dbN4a918d09.png!q70.webp',
        title: '时尚女包'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/31025/37/13173/10342/5cb9add1E0c2b869c/3aa7fd49269bc30e.png!q70.webp',
        title: '百搭T恤'
      },
      {
        id: 1,
        img:
          '//img14.360buyimg.com/jdphoto/jfs/t1/35800/38/1608/9114/5cb9b3c6Ede7411dd/8668206aa7d604a9.png!q70.webp',
        title: '气质连衣裙'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/33203/32/5308/25225/5cb9b3d2Ea5b1fad8/a783e7975d483f30.png!q70.webp',
        title: '运动服饰'
      },
      {
        id: 3,
        img:
          '//img30.360buyimg.com/jdphoto/jfs/t1/30239/27/13347/23595/5cb9b24eE688218c1/440d03b12783d70a.png!q70.webp',
        title: '男装上衣'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t17119/354/2070752553/7977/8be2cc67/5ae1a6d0N07272d3b.png!q70.webp',
        title: '手机'
      },
      {
        id: 1,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t17950/103/2040465839/4875/fc93ac10/5ae1a738N512f4eb2.png!q70.webp',
        title: '耳机音响'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t18466/17/2079008221/5345/829bc2f6/5ae1a76eN5020d145.png!q70.webp',
        title: '其他配件'
      },
      {
        id: 3,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t17887/264/2051961894/9975/f1f25e4f/5ae1a713N1032384b.png!q70.webp',
        title: '壳膜线'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img10.360buyimg.com/jdphoto/s72x72_jfs/t18499/226/633889171/25634/fc70cb8c/5a9e5013N2f7f61ce.png!q70.webp',
        title: '潮流女鞋'
      },
      {
        id: 1,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t14272/306/2427072392/27451/57fdae10/5a9e505aN718cd13e.png!q70.webp',
        title: '潮流男鞋'
      },
      {
        id: 2,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t15085/272/2355023288/25197/61f4e02e/5a9e5129Na0e58860.png!q70.webp',
        title: '男包箱包'
      },
      {
        id: 3,
        img:
          '//img14.360buyimg.com/jdphoto/s72x72_jfs/t15265/54/2450875048/26574/96f1621e/5a9e50dbN4a918d09.png!q70.webp',
        title: '时尚女包'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/31025/37/13173/10342/5cb9add1E0c2b869c/3aa7fd49269bc30e.png!q70.webp',
        title: '百搭T恤'
      },
      {
        id: 1,
        img:
          '//img14.360buyimg.com/jdphoto/jfs/t1/35800/38/1608/9114/5cb9b3c6Ede7411dd/8668206aa7d604a9.png!q70.webp',
        title: '气质连衣裙'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/33203/32/5308/25225/5cb9b3d2Ea5b1fad8/a783e7975d483f30.png!q70.webp',
        title: '运动服饰'
      },
      {
        id: 3,
        img:
          '//img30.360buyimg.com/jdphoto/jfs/t1/30239/27/13347/23595/5cb9b24eE688218c1/440d03b12783d70a.png!q70.webp',
        title: '男装上衣'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t17119/354/2070752553/7977/8be2cc67/5ae1a6d0N07272d3b.png!q70.webp',
        title: '手机'
      },
      {
        id: 1,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t17950/103/2040465839/4875/fc93ac10/5ae1a738N512f4eb2.png!q70.webp',
        title: '耳机音响'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t18466/17/2079008221/5345/829bc2f6/5ae1a76eN5020d145.png!q70.webp',
        title: '其他配件'
      },
      {
        id: 3,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t17887/264/2051961894/9975/f1f25e4f/5ae1a713N1032384b.png!q70.webp',
        title: '壳膜线'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img10.360buyimg.com/jdphoto/s72x72_jfs/t18499/226/633889171/25634/fc70cb8c/5a9e5013N2f7f61ce.png!q70.webp',
        title: '潮流女鞋'
      },
      {
        id: 1,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t14272/306/2427072392/27451/57fdae10/5a9e505aN718cd13e.png!q70.webp',
        title: '潮流男鞋'
      },
      {
        id: 2,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t15085/272/2355023288/25197/61f4e02e/5a9e5129Na0e58860.png!q70.webp',
        title: '男包箱包'
      },
      {
        id: 3,
        img:
          '//img14.360buyimg.com/jdphoto/s72x72_jfs/t15265/54/2450875048/26574/96f1621e/5a9e50dbN4a918d09.png!q70.webp',
        title: '时尚女包'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/31025/37/13173/10342/5cb9add1E0c2b869c/3aa7fd49269bc30e.png!q70.webp',
        title: '百搭T恤'
      },
      {
        id: 1,
        img:
          '//img14.360buyimg.com/jdphoto/jfs/t1/35800/38/1608/9114/5cb9b3c6Ede7411dd/8668206aa7d604a9.png!q70.webp',
        title: '气质连衣裙'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/33203/32/5308/25225/5cb9b3d2Ea5b1fad8/a783e7975d483f30.png!q70.webp',
        title: '运动服饰'
      },
      {
        id: 3,
        img:
          '//img30.360buyimg.com/jdphoto/jfs/t1/30239/27/13347/23595/5cb9b24eE688218c1/440d03b12783d70a.png!q70.webp',
        title: '男装上衣'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t17119/354/2070752553/7977/8be2cc67/5ae1a6d0N07272d3b.png!q70.webp',
        title: '手机'
      },
      {
        id: 1,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t17950/103/2040465839/4875/fc93ac10/5ae1a738N512f4eb2.png!q70.webp',
        title: '耳机音响'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t18466/17/2079008221/5345/829bc2f6/5ae1a76eN5020d145.png!q70.webp',
        title: '其他配件'
      },
      {
        id: 3,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t17887/264/2051961894/9975/f1f25e4f/5ae1a713N1032384b.png!q70.webp',
        title: '壳膜线'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img10.360buyimg.com/jdphoto/s72x72_jfs/t18499/226/633889171/25634/fc70cb8c/5a9e5013N2f7f61ce.png!q70.webp',
        title: '潮流女鞋'
      },
      {
        id: 1,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t14272/306/2427072392/27451/57fdae10/5a9e505aN718cd13e.png!q70.webp',
        title: '潮流男鞋'
      },
      {
        id: 2,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t15085/272/2355023288/25197/61f4e02e/5a9e5129Na0e58860.png!q70.webp',
        title: '男包箱包'
      },
      {
        id: 3,
        img:
          '//img14.360buyimg.com/jdphoto/s72x72_jfs/t15265/54/2450875048/26574/96f1621e/5a9e50dbN4a918d09.png!q70.webp',
        title: '时尚女包'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/31025/37/13173/10342/5cb9add1E0c2b869c/3aa7fd49269bc30e.png!q70.webp',
        title: '百搭T恤'
      },
      {
        id: 1,
        img:
          '//img14.360buyimg.com/jdphoto/jfs/t1/35800/38/1608/9114/5cb9b3c6Ede7411dd/8668206aa7d604a9.png!q70.webp',
        title: '气质连衣裙'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/jfs/t1/33203/32/5308/25225/5cb9b3d2Ea5b1fad8/a783e7975d483f30.png!q70.webp',
        title: '运动服饰'
      },
      {
        id: 3,
        img:
          '//img30.360buyimg.com/jdphoto/jfs/t1/30239/27/13347/23595/5cb9b24eE688218c1/440d03b12783d70a.png!q70.webp',
        title: '男装上衣'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t17119/354/2070752553/7977/8be2cc67/5ae1a6d0N07272d3b.png!q70.webp',
        title: '手机'
      },
      {
        id: 1,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t17950/103/2040465839/4875/fc93ac10/5ae1a738N512f4eb2.png!q70.webp',
        title: '耳机音响'
      },
      {
        id: 2,
        img:
          '//img12.360buyimg.com/jdphoto/s72x72_jfs/t18466/17/2079008221/5345/829bc2f6/5ae1a76eN5020d145.png!q70.webp',
        title: '其他配件'
      },
      {
        id: 3,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t17887/264/2051961894/9975/f1f25e4f/5ae1a713N1032384b.png!q70.webp',
        title: '壳膜线'
      }
    ],
    [
      {
        id: 0,
        img:
          '//img10.360buyimg.com/jdphoto/s72x72_jfs/t18499/226/633889171/25634/fc70cb8c/5a9e5013N2f7f61ce.png!q70.webp',
        title: '潮流女鞋'
      },
      {
        id: 1,
        img:
          '//img13.360buyimg.com/jdphoto/s72x72_jfs/t14272/306/2427072392/27451/57fdae10/5a9e505aN718cd13e.png!q70.webp',
        title: '潮流男鞋'
      },
      {
        id: 2,
        img:
          '//img20.360buyimg.com/jdphoto/s72x72_jfs/t15085/272/2355023288/25197/61f4e02e/5a9e5129Na0e58860.png!q70.webp',
        title: '男包箱包'
      },
      {
        id: 3,
        img:
          '//img14.360buyimg.com/jdphoto/s72x72_jfs/t15265/54/2450875048/26574/96f1621e/5a9e50dbN4a918d09.png!q70.webp',
        title: '时尚女包'
      }
    ]
  ]
  res.send(arr)
})
// 拼购 main数据
router.get('/sRightMain', function (req, res, next) {
  var arr = [
    // 1 手机
    [
      {
        titleName:
          '迷你小风扇usb电风扇台式桌面办公室学生宿舍床头静音大风力手持小电扇型 【雪花小风扇】配送标准版电池-蓝色',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/32544/36/11712/171443/5cb5a4f2Eabb603c1/59efe3f2dbd20084.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '2.8万'
      },
      {
        titleName:
          '可可丽丽 蓝牙耳机运动无线跑步入耳式耳塞 双耳立体声重低音手机开车耳麦 超小迷你磁吸 红线-金色金',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t29146/95/423007905/223627/5856aafb/5bf37746N146b281d.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: false,
        solidSum: '9.9万'
      },
      {
        titleName:
          '领臣 手机支架 手机懒人支架ipad平板支架加长 桌面直播床头床上支架 多功能可调节 通用 120CM粉色',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/2456/27/8520/123616/5ba9b527Ecca3609c/f04438279df1efef.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '51'
      },

      //
      {
        titleName:
          'TOTU 苹果安卓手机耳机入耳式有线手机耳塞线控适用iPhone6s/7/8p/Xr/Xs MAX 【圆口-3.5mm接口】苹果安卓通用',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34879/8/7606/108053/5cc81456E94d3ccb5/1bfa2d194496c6d8.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '1.5万'
      },
      {
        titleName:
          '海天 苹果Type-c安卓三合一数据线快充手机充电线适用于苹果华为VIVO小米三星OPPO三头通用线 科技蓝',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/10633/24/50/323436/5bd94586E1482385b/5b485c692f80b9a7.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '6.7万'
      },
      {
        titleName:
          '钻盾 真无线双耳蓝牙耳机迷你4.2 运动跑步立体声耳机 苹果分离式智通用苹果华为oppo 睿智黑【带充电仓】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t12655/283/2092687174/226318/f18608b6/5a4f4271Na8953b93.jpg!q70.dpg',
        people: 2,
        solid: '269.90',
        new: false,
        solidSum: '31万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/31889/14/5374/135960/5c861074E012f0285/d7627d1096e5bf18.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '1万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34004/32/8742/210624/5cc7dd38E037546e1/0ce9ba1517987238.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '4460'
      },
      {
        titleName:
          '奥多金 稳固型螺旋底座手机支架 多向旋转夹头夹子支架 玻璃桌面直播床头等便携懒人支架 优雅白',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/9189/7/12735/65424/5c3c56b7Ec71b07ff/505a2aac8866c328.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '8371'
      },
      {
        titleName:
          '少数派 无线充电器 iPhoneXs/X Max/XR/8plus安卓手机快充三星S9小米无限充底座 【升级版】【10W快充-黑色】 【通用版】',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t27601/271/2386230394/389672/b04148e3/5bfff766Nf7617a30.jpg!q70.dpg',
        people: 3,
        solid: '49.90',
        new: false,
        solidSum: '1.5万'
      }
    ],
    // 2 鞋包
    [
      {
        titleName:
          '回力雨鞋新款男士短筒雨靴低帮防水鞋时尚胶鞋厨房水靴套脚 黑色 42',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t19114/281/1951924822/468170/b295b57d/5adf55adN10d6f8ee.jpg!q70.dpg',
        people: 2,
        solid: '49.00',
        new: true,
        solidSum: '3434'
      },
      {
        titleName:
          '2019新款春款透气运动鞋休闲鞋女网鞋夏季内增高网面春季休闲跑步女鞋子 金色/9033【侧面镂空款】 37',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/17932/2/11017/90600/5c8b4cd4E126cb6ef/685245db7f21a951.jpg!q70.dpg',
        people: 2,
        solid: '168.00',
        new: false,
        solidSum: '344'
      },
      {
        titleName:
          'utu网红百搭包包女质感单肩女包2019新款ins斜挎包时尚小包 黑(现货，抢！)',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20693/23/9596/93793/5c7f9b61E5f26da71/8b9590ca1269e108.jpg!q70.dpg',
        people: 2,
        solid: '279.90',
        new: false,
        solidSum: '1663'
      },
      {
        titleName:
          '【仅售19.9元】【厂家直销 品质保证】双肩包女包2019新款韩版防水背包女百搭时尚休闲潮流包包',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/18520/8/3982/86600/5c2d6308E4ef176ad/244ddfd8223adefc.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '1.8万'
      },
      {
        titleName:
          '【不能错过-工厂好货】-胸包男士大容量出游休闲单肩包男时尚潮流斜挎包男 0512咖色-好品质',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/43260/18/2263/157290/5cc98352E65fe92af/95929053d234e4a3.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: true,
        solidSum: '2034'
      },
      {
        titleName:
          '【特价促销】传统老北京布鞋舒适透气老头鞋一脚蹬37-45码懒汉司机千层底男单鞋工作劳保 黑色 41',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/14905/25/1536/736817/5c134fe2Ef3f176b4/1d5d5467c8604203.png!q70.webp',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '一擦白 小白鞋清洗剂 旅游鞋球鞋擦边去黄清洁增白剂 洗白去污清洗剂 小白神器 小白鞋清洗剂',
        img:
          '//img14.360buyimg.com/evalpic/s500x500_jfs/t1/29161/25/13843/111491/5ca19bedE4f76a826/b5643003a348b5bd.jpg!q70.dpg',
        people: 2,
        solid: '4.90',
        new: true,
        solidSum: '1959'
      },
      {
        titleName:
          '回力雨鞋男士水鞋雨靴防水中筒塑胶套工作鞋 黑色 42',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t2830/284/3097222294/152780/f9b01d51/577fbbdcN1dd5a040.jpg!q70.dpg',
        people: 2,
        solid: '35.90',
        new: true,
        solidSum: '3786'
      },
      {
        titleName:
          '【颜色随机，默认发粉色】10位潮流韩版卡通小卡包零钱包2019春季小包包 颜色随机',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/26457/7/14004/121751/5ca417c6Efb707a76/6f4535fa4d96e7f5.jpg!q70.dpg',
        people: 2,
        solid: '5.90',
        new: false,
        solidSum: '2271'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/35848/25/5075/289457/5cc5a6fdE4bfff35f/616c7356acad1c54.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    // 3 服饰
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    // 以下为重复的数据 14条
    [
      {
        titleName:
          '迷你小风扇usb电风扇台式桌面办公室学生宿舍床头静音大风力手持小电扇型 【雪花小风扇】配送标准版电池-蓝色',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/32544/36/11712/171443/5cb5a4f2Eabb603c1/59efe3f2dbd20084.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '2.8万'
      },
      {
        titleName:
          '可可丽丽 蓝牙耳机运动无线跑步入耳式耳塞 双耳立体声重低音手机开车耳麦 超小迷你磁吸 红线-金色金',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t29146/95/423007905/223627/5856aafb/5bf37746N146b281d.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: false,
        solidSum: '9.9万'
      },
      {
        titleName:
          '领臣 手机支架 手机懒人支架ipad平板支架加长 桌面直播床头床上支架 多功能可调节 通用 120CM粉色',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/2456/27/8520/123616/5ba9b527Ecca3609c/f04438279df1efef.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '51'
      },

      //
      {
        titleName:
          'TOTU 苹果安卓手机耳机入耳式有线手机耳塞线控适用iPhone6s/7/8p/Xr/Xs MAX 【圆口-3.5mm接口】苹果安卓通用',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34879/8/7606/108053/5cc81456E94d3ccb5/1bfa2d194496c6d8.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '1.5万'
      },
      {
        titleName:
          '海天 苹果Type-c安卓三合一数据线快充手机充电线适用于苹果华为VIVO小米三星OPPO三头通用线 科技蓝',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/10633/24/50/323436/5bd94586E1482385b/5b485c692f80b9a7.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '6.7万'
      },
      {
        titleName:
          '钻盾 真无线双耳蓝牙耳机迷你4.2 运动跑步立体声耳机 苹果分离式智通用苹果华为oppo 睿智黑【带充电仓】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t12655/283/2092687174/226318/f18608b6/5a4f4271Na8953b93.jpg!q70.dpg',
        people: 2,
        solid: '269.90',
        new: false,
        solidSum: '31万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/31889/14/5374/135960/5c861074E012f0285/d7627d1096e5bf18.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '1万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34004/32/8742/210624/5cc7dd38E037546e1/0ce9ba1517987238.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '4460'
      },
      {
        titleName:
          '奥多金 稳固型螺旋底座手机支架 多向旋转夹头夹子支架 玻璃桌面直播床头等便携懒人支架 优雅白',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/9189/7/12735/65424/5c3c56b7Ec71b07ff/505a2aac8866c328.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '8371'
      },
      {
        titleName:
          '少数派 无线充电器 iPhoneXs/X Max/XR/8plus安卓手机快充三星S9小米无限充底座 【升级版】【10W快充-黑色】 【通用版】',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t27601/271/2386230394/389672/b04148e3/5bfff766Nf7617a30.jpg!q70.dpg',
        people: 3,
        solid: '49.90',
        new: false,
        solidSum: '1.5万'
      }
    ],
    [
      {
        titleName:
          '回力雨鞋新款男士短筒雨靴低帮防水鞋时尚胶鞋厨房水靴套脚 黑色 42',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t19114/281/1951924822/468170/b295b57d/5adf55adN10d6f8ee.jpg!q70.dpg',
        people: 2,
        solid: '49.00',
        new: true,
        solidSum: '3434'
      },
      {
        titleName:
          '2019新款春款透气运动鞋休闲鞋女网鞋夏季内增高网面春季休闲跑步女鞋子 金色/9033【侧面镂空款】 37',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/17932/2/11017/90600/5c8b4cd4E126cb6ef/685245db7f21a951.jpg!q70.dpg',
        people: 2,
        solid: '168.00',
        new: false,
        solidSum: '344'
      },
      {
        titleName:
          'utu网红百搭包包女质感单肩女包2019新款ins斜挎包时尚小包 黑(现货，抢！)',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20693/23/9596/93793/5c7f9b61E5f26da71/8b9590ca1269e108.jpg!q70.dpg',
        people: 2,
        solid: '279.90',
        new: false,
        solidSum: '1663'
      },
      {
        titleName:
          '【仅售19.9元】【厂家直销 品质保证】双肩包女包2019新款韩版防水背包女百搭时尚休闲潮流包包',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/18520/8/3982/86600/5c2d6308E4ef176ad/244ddfd8223adefc.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '1.8万'
      },
      {
        titleName:
          '【不能错过-工厂好货】-胸包男士大容量出游休闲单肩包男时尚潮流斜挎包男 0512咖色-好品质',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/43260/18/2263/157290/5cc98352E65fe92af/95929053d234e4a3.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: true,
        solidSum: '2034'
      },
      {
        titleName:
          '【特价促销】传统老北京布鞋舒适透气老头鞋一脚蹬37-45码懒汉司机千层底男单鞋工作劳保 黑色 41',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/14905/25/1536/736817/5c134fe2Ef3f176b4/1d5d5467c8604203.png!q70.webp',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '一擦白 小白鞋清洗剂 旅游鞋球鞋擦边去黄清洁增白剂 洗白去污清洗剂 小白神器 小白鞋清洗剂',
        img:
          '//img14.360buyimg.com/evalpic/s500x500_jfs/t1/29161/25/13843/111491/5ca19bedE4f76a826/b5643003a348b5bd.jpg!q70.dpg',
        people: 2,
        solid: '4.90',
        new: true,
        solidSum: '1959'
      },
      {
        titleName:
          '回力雨鞋男士水鞋雨靴防水中筒塑胶套工作鞋 黑色 42',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t2830/284/3097222294/152780/f9b01d51/577fbbdcN1dd5a040.jpg!q70.dpg',
        people: 2,
        solid: '35.90',
        new: true,
        solidSum: '3786'
      },
      {
        titleName:
          '【颜色随机，默认发粉色】10位潮流韩版卡通小卡包零钱包2019春季小包包 颜色随机',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/26457/7/14004/121751/5ca417c6Efb707a76/6f4535fa4d96e7f5.jpg!q70.dpg',
        people: 2,
        solid: '5.90',
        new: false,
        solidSum: '2271'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/35848/25/5075/289457/5cc5a6fdE4bfff35f/616c7356acad1c54.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '迷你小风扇usb电风扇台式桌面办公室学生宿舍床头静音大风力手持小电扇型 【雪花小风扇】配送标准版电池-蓝色',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/32544/36/11712/171443/5cb5a4f2Eabb603c1/59efe3f2dbd20084.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '2.8万'
      },
      {
        titleName:
          '可可丽丽 蓝牙耳机运动无线跑步入耳式耳塞 双耳立体声重低音手机开车耳麦 超小迷你磁吸 红线-金色金',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t29146/95/423007905/223627/5856aafb/5bf37746N146b281d.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: false,
        solidSum: '9.9万'
      },
      {
        titleName:
          '领臣 手机支架 手机懒人支架ipad平板支架加长 桌面直播床头床上支架 多功能可调节 通用 120CM粉色',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/2456/27/8520/123616/5ba9b527Ecca3609c/f04438279df1efef.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '51'
      },

      //
      {
        titleName:
          'TOTU 苹果安卓手机耳机入耳式有线手机耳塞线控适用iPhone6s/7/8p/Xr/Xs MAX 【圆口-3.5mm接口】苹果安卓通用',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34879/8/7606/108053/5cc81456E94d3ccb5/1bfa2d194496c6d8.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '1.5万'
      },
      {
        titleName:
          '海天 苹果Type-c安卓三合一数据线快充手机充电线适用于苹果华为VIVO小米三星OPPO三头通用线 科技蓝',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/10633/24/50/323436/5bd94586E1482385b/5b485c692f80b9a7.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '6.7万'
      },
      {
        titleName:
          '钻盾 真无线双耳蓝牙耳机迷你4.2 运动跑步立体声耳机 苹果分离式智通用苹果华为oppo 睿智黑【带充电仓】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t12655/283/2092687174/226318/f18608b6/5a4f4271Na8953b93.jpg!q70.dpg',
        people: 2,
        solid: '269.90',
        new: false,
        solidSum: '31万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/31889/14/5374/135960/5c861074E012f0285/d7627d1096e5bf18.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '1万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34004/32/8742/210624/5cc7dd38E037546e1/0ce9ba1517987238.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '4460'
      },
      {
        titleName:
          '奥多金 稳固型螺旋底座手机支架 多向旋转夹头夹子支架 玻璃桌面直播床头等便携懒人支架 优雅白',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/9189/7/12735/65424/5c3c56b7Ec71b07ff/505a2aac8866c328.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '8371'
      },
      {
        titleName:
          '少数派 无线充电器 iPhoneXs/X Max/XR/8plus安卓手机快充三星S9小米无限充底座 【升级版】【10W快充-黑色】 【通用版】',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t27601/271/2386230394/389672/b04148e3/5bfff766Nf7617a30.jpg!q70.dpg',
        people: 3,
        solid: '49.90',
        new: false,
        solidSum: '1.5万'
      }
    ],
    [
      {
        titleName:
          '回力雨鞋新款男士短筒雨靴低帮防水鞋时尚胶鞋厨房水靴套脚 黑色 42',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t19114/281/1951924822/468170/b295b57d/5adf55adN10d6f8ee.jpg!q70.dpg',
        people: 2,
        solid: '49.00',
        new: true,
        solidSum: '3434'
      },
      {
        titleName:
          '2019新款春款透气运动鞋休闲鞋女网鞋夏季内增高网面春季休闲跑步女鞋子 金色/9033【侧面镂空款】 37',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/17932/2/11017/90600/5c8b4cd4E126cb6ef/685245db7f21a951.jpg!q70.dpg',
        people: 2,
        solid: '168.00',
        new: false,
        solidSum: '344'
      },
      {
        titleName:
          'utu网红百搭包包女质感单肩女包2019新款ins斜挎包时尚小包 黑(现货，抢！)',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20693/23/9596/93793/5c7f9b61E5f26da71/8b9590ca1269e108.jpg!q70.dpg',
        people: 2,
        solid: '279.90',
        new: false,
        solidSum: '1663'
      },
      {
        titleName:
          '【仅售19.9元】【厂家直销 品质保证】双肩包女包2019新款韩版防水背包女百搭时尚休闲潮流包包',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/18520/8/3982/86600/5c2d6308E4ef176ad/244ddfd8223adefc.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '1.8万'
      },
      {
        titleName:
          '【不能错过-工厂好货】-胸包男士大容量出游休闲单肩包男时尚潮流斜挎包男 0512咖色-好品质',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/43260/18/2263/157290/5cc98352E65fe92af/95929053d234e4a3.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: true,
        solidSum: '2034'
      },
      {
        titleName:
          '【特价促销】传统老北京布鞋舒适透气老头鞋一脚蹬37-45码懒汉司机千层底男单鞋工作劳保 黑色 41',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/14905/25/1536/736817/5c134fe2Ef3f176b4/1d5d5467c8604203.png!q70.webp',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '一擦白 小白鞋清洗剂 旅游鞋球鞋擦边去黄清洁增白剂 洗白去污清洗剂 小白神器 小白鞋清洗剂',
        img:
          '//img14.360buyimg.com/evalpic/s500x500_jfs/t1/29161/25/13843/111491/5ca19bedE4f76a826/b5643003a348b5bd.jpg!q70.dpg',
        people: 2,
        solid: '4.90',
        new: true,
        solidSum: '1959'
      },
      {
        titleName:
          '回力雨鞋男士水鞋雨靴防水中筒塑胶套工作鞋 黑色 42',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t2830/284/3097222294/152780/f9b01d51/577fbbdcN1dd5a040.jpg!q70.dpg',
        people: 2,
        solid: '35.90',
        new: true,
        solidSum: '3786'
      },
      {
        titleName:
          '【颜色随机，默认发粉色】10位潮流韩版卡通小卡包零钱包2019春季小包包 颜色随机',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/26457/7/14004/121751/5ca417c6Efb707a76/6f4535fa4d96e7f5.jpg!q70.dpg',
        people: 2,
        solid: '5.90',
        new: false,
        solidSum: '2271'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/35848/25/5075/289457/5cc5a6fdE4bfff35f/616c7356acad1c54.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '迷你小风扇usb电风扇台式桌面办公室学生宿舍床头静音大风力手持小电扇型 【雪花小风扇】配送标准版电池-蓝色',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/32544/36/11712/171443/5cb5a4f2Eabb603c1/59efe3f2dbd20084.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '2.8万'
      },
      {
        titleName:
          '可可丽丽 蓝牙耳机运动无线跑步入耳式耳塞 双耳立体声重低音手机开车耳麦 超小迷你磁吸 红线-金色金',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t29146/95/423007905/223627/5856aafb/5bf37746N146b281d.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: false,
        solidSum: '9.9万'
      },
      {
        titleName:
          '领臣 手机支架 手机懒人支架ipad平板支架加长 桌面直播床头床上支架 多功能可调节 通用 120CM粉色',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/2456/27/8520/123616/5ba9b527Ecca3609c/f04438279df1efef.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '51'
      },

      //
      {
        titleName:
          'TOTU 苹果安卓手机耳机入耳式有线手机耳塞线控适用iPhone6s/7/8p/Xr/Xs MAX 【圆口-3.5mm接口】苹果安卓通用',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34879/8/7606/108053/5cc81456E94d3ccb5/1bfa2d194496c6d8.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '1.5万'
      },
      {
        titleName:
          '海天 苹果Type-c安卓三合一数据线快充手机充电线适用于苹果华为VIVO小米三星OPPO三头通用线 科技蓝',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/10633/24/50/323436/5bd94586E1482385b/5b485c692f80b9a7.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '6.7万'
      },
      {
        titleName:
          '钻盾 真无线双耳蓝牙耳机迷你4.2 运动跑步立体声耳机 苹果分离式智通用苹果华为oppo 睿智黑【带充电仓】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t12655/283/2092687174/226318/f18608b6/5a4f4271Na8953b93.jpg!q70.dpg',
        people: 2,
        solid: '269.90',
        new: false,
        solidSum: '31万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/31889/14/5374/135960/5c861074E012f0285/d7627d1096e5bf18.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '1万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34004/32/8742/210624/5cc7dd38E037546e1/0ce9ba1517987238.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '4460'
      },
      {
        titleName:
          '奥多金 稳固型螺旋底座手机支架 多向旋转夹头夹子支架 玻璃桌面直播床头等便携懒人支架 优雅白',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/9189/7/12735/65424/5c3c56b7Ec71b07ff/505a2aac8866c328.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '8371'
      },
      {
        titleName:
          '少数派 无线充电器 iPhoneXs/X Max/XR/8plus安卓手机快充三星S9小米无限充底座 【升级版】【10W快充-黑色】 【通用版】',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t27601/271/2386230394/389672/b04148e3/5bfff766Nf7617a30.jpg!q70.dpg',
        people: 3,
        solid: '49.90',
        new: false,
        solidSum: '1.5万'
      }
    ],
    [
      {
        titleName:
          '回力雨鞋新款男士短筒雨靴低帮防水鞋时尚胶鞋厨房水靴套脚 黑色 42',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t19114/281/1951924822/468170/b295b57d/5adf55adN10d6f8ee.jpg!q70.dpg',
        people: 2,
        solid: '49.00',
        new: true,
        solidSum: '3434'
      },
      {
        titleName:
          '2019新款春款透气运动鞋休闲鞋女网鞋夏季内增高网面春季休闲跑步女鞋子 金色/9033【侧面镂空款】 37',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/17932/2/11017/90600/5c8b4cd4E126cb6ef/685245db7f21a951.jpg!q70.dpg',
        people: 2,
        solid: '168.00',
        new: false,
        solidSum: '344'
      },
      {
        titleName:
          'utu网红百搭包包女质感单肩女包2019新款ins斜挎包时尚小包 黑(现货，抢！)',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20693/23/9596/93793/5c7f9b61E5f26da71/8b9590ca1269e108.jpg!q70.dpg',
        people: 2,
        solid: '279.90',
        new: false,
        solidSum: '1663'
      },
      {
        titleName:
          '【仅售19.9元】【厂家直销 品质保证】双肩包女包2019新款韩版防水背包女百搭时尚休闲潮流包包',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/18520/8/3982/86600/5c2d6308E4ef176ad/244ddfd8223adefc.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '1.8万'
      },
      {
        titleName:
          '【不能错过-工厂好货】-胸包男士大容量出游休闲单肩包男时尚潮流斜挎包男 0512咖色-好品质',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/43260/18/2263/157290/5cc98352E65fe92af/95929053d234e4a3.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: true,
        solidSum: '2034'
      },
      {
        titleName:
          '【特价促销】传统老北京布鞋舒适透气老头鞋一脚蹬37-45码懒汉司机千层底男单鞋工作劳保 黑色 41',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/14905/25/1536/736817/5c134fe2Ef3f176b4/1d5d5467c8604203.png!q70.webp',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '一擦白 小白鞋清洗剂 旅游鞋球鞋擦边去黄清洁增白剂 洗白去污清洗剂 小白神器 小白鞋清洗剂',
        img:
          '//img14.360buyimg.com/evalpic/s500x500_jfs/t1/29161/25/13843/111491/5ca19bedE4f76a826/b5643003a348b5bd.jpg!q70.dpg',
        people: 2,
        solid: '4.90',
        new: true,
        solidSum: '1959'
      },
      {
        titleName:
          '回力雨鞋男士水鞋雨靴防水中筒塑胶套工作鞋 黑色 42',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t2830/284/3097222294/152780/f9b01d51/577fbbdcN1dd5a040.jpg!q70.dpg',
        people: 2,
        solid: '35.90',
        new: true,
        solidSum: '3786'
      },
      {
        titleName:
          '【颜色随机，默认发粉色】10位潮流韩版卡通小卡包零钱包2019春季小包包 颜色随机',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/26457/7/14004/121751/5ca417c6Efb707a76/6f4535fa4d96e7f5.jpg!q70.dpg',
        people: 2,
        solid: '5.90',
        new: false,
        solidSum: '2271'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/35848/25/5075/289457/5cc5a6fdE4bfff35f/616c7356acad1c54.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '迷你小风扇usb电风扇台式桌面办公室学生宿舍床头静音大风力手持小电扇型 【雪花小风扇】配送标准版电池-蓝色',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/32544/36/11712/171443/5cb5a4f2Eabb603c1/59efe3f2dbd20084.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '2.8万'
      },
      {
        titleName:
          '可可丽丽 蓝牙耳机运动无线跑步入耳式耳塞 双耳立体声重低音手机开车耳麦 超小迷你磁吸 红线-金色金',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t29146/95/423007905/223627/5856aafb/5bf37746N146b281d.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: false,
        solidSum: '9.9万'
      },
      {
        titleName:
          '领臣 手机支架 手机懒人支架ipad平板支架加长 桌面直播床头床上支架 多功能可调节 通用 120CM粉色',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/2456/27/8520/123616/5ba9b527Ecca3609c/f04438279df1efef.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '51'
      },

      //
      {
        titleName:
          'TOTU 苹果安卓手机耳机入耳式有线手机耳塞线控适用iPhone6s/7/8p/Xr/Xs MAX 【圆口-3.5mm接口】苹果安卓通用',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34879/8/7606/108053/5cc81456E94d3ccb5/1bfa2d194496c6d8.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: true,
        solidSum: '1.5万'
      },
      {
        titleName:
          '海天 苹果Type-c安卓三合一数据线快充手机充电线适用于苹果华为VIVO小米三星OPPO三头通用线 科技蓝',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t1/10633/24/50/323436/5bd94586E1482385b/5b485c692f80b9a7.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '6.7万'
      },
      {
        titleName:
          '钻盾 真无线双耳蓝牙耳机迷你4.2 运动跑步立体声耳机 苹果分离式智通用苹果华为oppo 睿智黑【带充电仓】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t12655/283/2092687174/226318/f18608b6/5a4f4271Na8953b93.jpg!q70.dpg',
        people: 2,
        solid: '269.90',
        new: false,
        solidSum: '31万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/31889/14/5374/135960/5c861074E012f0285/d7627d1096e5bf18.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '1万'
      },
      {
        titleName:
          '轩云绝世 手机耳机运动重低音炮适用苹果安卓电脑通用女生男线控带麦入耳式跑步耳机耳机K歌吃鸡有线HIF 炫酷黑【标配版】',
        img:
          '//img14.360buyimg.com/evalpic/s400x400_jfs/t1/34004/32/8742/210624/5cc7dd38E037546e1/0ce9ba1517987238.jpg!q70.dpg',
        people: 2,
        solid: '1.00',
        new: true,
        solidSum: '4460'
      },
      {
        titleName:
          '奥多金 稳固型螺旋底座手机支架 多向旋转夹头夹子支架 玻璃桌面直播床头等便携懒人支架 优雅白',
        img:
          '//img12.360buyimg.com/evalpic/s400x400_jfs/t1/9189/7/12735/65424/5c3c56b7Ec71b07ff/505a2aac8866c328.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '8371'
      },
      {
        titleName:
          '少数派 无线充电器 iPhoneXs/X Max/XR/8plus安卓手机快充三星S9小米无限充底座 【升级版】【10W快充-黑色】 【通用版】',
        img:
          '//img13.360buyimg.com/evalpic/s400x400_jfs/t27601/271/2386230394/389672/b04148e3/5bfff766Nf7617a30.jpg!q70.dpg',
        people: 3,
        solid: '49.90',
        new: false,
        solidSum: '1.5万'
      }
    ],
    [
      {
        titleName:
          '回力雨鞋新款男士短筒雨靴低帮防水鞋时尚胶鞋厨房水靴套脚 黑色 42',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t19114/281/1951924822/468170/b295b57d/5adf55adN10d6f8ee.jpg!q70.dpg',
        people: 2,
        solid: '49.00',
        new: true,
        solidSum: '3434'
      },
      {
        titleName:
          '2019新款春款透气运动鞋休闲鞋女网鞋夏季内增高网面春季休闲跑步女鞋子 金色/9033【侧面镂空款】 37',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/17932/2/11017/90600/5c8b4cd4E126cb6ef/685245db7f21a951.jpg!q70.dpg',
        people: 2,
        solid: '168.00',
        new: false,
        solidSum: '344'
      },
      {
        titleName:
          'utu网红百搭包包女质感单肩女包2019新款ins斜挎包时尚小包 黑(现货，抢！)',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20693/23/9596/93793/5c7f9b61E5f26da71/8b9590ca1269e108.jpg!q70.dpg',
        people: 2,
        solid: '279.90',
        new: false,
        solidSum: '1663'
      },
      {
        titleName:
          '【仅售19.9元】【厂家直销 品质保证】双肩包女包2019新款韩版防水背包女百搭时尚休闲潮流包包',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/18520/8/3982/86600/5c2d6308E4ef176ad/244ddfd8223adefc.jpg!q70.dpg',
        people: 2,
        solid: '27.90',
        new: false,
        solidSum: '1.8万'
      },
      {
        titleName:
          '【不能错过-工厂好货】-胸包男士大容量出游休闲单肩包男时尚潮流斜挎包男 0512咖色-好品质',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/43260/18/2263/157290/5cc98352E65fe92af/95929053d234e4a3.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: true,
        solidSum: '2034'
      },
      {
        titleName:
          '【特价促销】传统老北京布鞋舒适透气老头鞋一脚蹬37-45码懒汉司机千层底男单鞋工作劳保 黑色 41',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/14905/25/1536/736817/5c134fe2Ef3f176b4/1d5d5467c8604203.png!q70.webp',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '一擦白 小白鞋清洗剂 旅游鞋球鞋擦边去黄清洁增白剂 洗白去污清洗剂 小白神器 小白鞋清洗剂',
        img:
          '//img14.360buyimg.com/evalpic/s500x500_jfs/t1/29161/25/13843/111491/5ca19bedE4f76a826/b5643003a348b5bd.jpg!q70.dpg',
        people: 2,
        solid: '4.90',
        new: true,
        solidSum: '1959'
      },
      {
        titleName:
          '回力雨鞋男士水鞋雨靴防水中筒塑胶套工作鞋 黑色 42',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t2830/284/3097222294/152780/f9b01d51/577fbbdcN1dd5a040.jpg!q70.dpg',
        people: 2,
        solid: '35.90',
        new: true,
        solidSum: '3786'
      },
      {
        titleName:
          '【颜色随机，默认发粉色】10位潮流韩版卡通小卡包零钱包2019春季小包包 颜色随机',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/26457/7/14004/121751/5ca417c6Efb707a76/6f4535fa4d96e7f5.jpg!q70.dpg',
        people: 2,
        solid: '5.90',
        new: false,
        solidSum: '2271'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/35848/25/5075/289457/5cc5a6fdE4bfff35f/616c7356acad1c54.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ],
    [
      {
        titleName:
          '西服休闲小西装男夏季薄款  FIXXA 2019新款 韩版修身五分袖九分裤 休闲西服套装男两件套 中袖款卡其色 M',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/28908/20/9123/136346/5c7c05d0Ea4dd0f10/ca6a44d7b6011614.jpg!q70.dpg',
        people: 2,
        solid: '239.00',
        new: false,
        solidSum: '1436'
      },
      {
        titleName:
          '中年女装夏装中袖雪纺衫遮肚显瘦修身碎花气质妈妈装春季双层蕾丝打底衫 191127绿色 XL(95-110斤）',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34211/5/542/142343/5cab0135E024fc24c/a32901f5affd3624.jpg!q70.dpg',
        people: 2,
        solid: '23.90',
        new: false,
        solidSum: '6698'
      },
      {
        titleName:
          '雪纺衫女上衣印花长袖小衫大码女装胖MM宽松显瘦衬衫碎花打底衫女 8815浅黄色长袖 XL',
        img:
          '//img10.360buyimg.com/evalpic/s500x500_jfs/t1/20373/38/8599/134096/5c7779ceEce9041e5/58ca70828764a268.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: false,
        solidSum: '3.1万'
      },
      {
        titleName:
          '【厂家直供】枫紫2019春夏新款显瘦高腰弹力百搭哈伦裤外穿宽松大码修身FZ7912-6 黑色【薄款】 M【85-95】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/24806/35/12549/101048/5c985492E18fddbb5/501ed053cb0b581e.jpg!q70.dpg',
        people: 2,
        solid: '9.90',
        new: false,
        solidSum: '9159'
      },
      {
        titleName:
          '牛仔裤女2019春季新款女装破洞bf风牛仔裤女长裤宽松哈伦裤九分裤小脚裤休闲裤子 680浅蓝色 25码',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/9346/18/14956/129368/5c6bbe7dE4ddb09f8/aa32082ef621bdb5.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '4.7万'
      },
      {
        titleName:
          '【9.9包邮】夏季男背心马甲运动健身跨栏速干修身无痕无袖内衣潮流男士透气休闲紧身衣弹力打底汗衫 白色 M',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/34684/28/2228/136293/5cb57041E6739d901/ae2a35d0e9cb413d.jpg!q70.dpg',
        people: 2,
        solid: '9.80',
        new: false,
        solidSum: '1461'
      },
      {
        titleName:
          '连衣裙女2019新款女装夏装中长款显瘦运动休闲裙子女 白色 L',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/15313/1/13972/95217/5ca426d7Ede654bf2/91c992537065c0e9.jpg!q70.dpg',
        people: 2,
        solid: '29.90',
        new: true,
        solidSum: '5460'
      },
      {
        titleName:
          '木兰诗2018韩版棉袄冬季保暖棉服女中长款过膝修身棉衣冬天外套加厚 黑色 XL【115-130斤】',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t25180/253/1769426280/139483/e015a605/5bbc2393Nfcf8a0b2.jpg!q70.dpg',
        people: 2,
        solid: '79.90',
        new: true,
        solidSum: '3万'
      },
      {
        titleName:
          '【卿言】2019夏短袖T恤打底衫女半高圆领内搭上衣T恤修身【随机颜色】 随即颜色 随机颜色均码',
        img:
          '//img12.360buyimg.com/evalpic/s500x500_jfs/t1/14048/8/13166/129585/5c9da13bE061788cc/6640135e822bb9ee.jpg!q70.dpg',
        people: 2,
        solid: '19.90',
        new: false,
        solidSum: '3400'
      },
      {
        titleName:
          '艾蒙格利 polo衫男夏季纯棉潮男POLO衫刺绣保罗衫韩版翻领短袖t恤男 藏青 XL',
        img:
          '//img13.360buyimg.com/evalpic/s500x500_jfs/t1/20781/21/12014/429079/5c94be8bE3f383f06/6b000fe630180416.jpg!q70.dpg',
        people: 3,
        solid: '89.90',
        new: false,
        solidSum: '79'
      }
    ]

  ]
  res.send(arr)
})
module.exports = router
