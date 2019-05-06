import Vue from 'vue'
import Router from 'vue-router'

// import buy from '@/components/buy/buy.vue'
// import category from '@/components/category/category.vue'
// import home from '@/components/home/home.vue'
// import my from '@/components/my/my.vue'
// import shop from '@/components/shop/shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 设置默认路径 重定向
    {
      path: '/',
      redirect: '/home',
      meta: {
        cache: true,
        title: '首页'
      }
    },
    {
      path: '*',
      redirect: '/home',
      meta: {
        cache: true,
        title: '首页'
      }
    },
    {
      path: '/home',
      // component: home,
      // 配置按需加载 上面就不用直接引入了import...from...注释掉
      component: () => import('@/components/home/home.vue'),
      meta: {
        cache: true,
        title: '首页'
      },
      beforeEnter (to, from, next) {
        console.log(from)
        next()
      }
    },
    {
      path: '/category',
      component: () => import('@/components/category/category.vue'),
      meta: {
        cache: false,
        title: '分类'
      }
    },
    {
      path: '/buy',
      component: () => import('@/components/buy/buy.vue'),
      meta: {
        cache: false,
        title: '拼购'
      }
    },
    {
      path: '/shop',
      component: () => import('@/components/shop/shop.vue'),
      meta: {
        cache: false,
        title: '购物车'
      }
    },
    {
      path: '/my',
      component: () => import('@/components/my/my.vue'),
      meta: {
        cache: false,
        title: '我的'
      }
    }
  ]
})
