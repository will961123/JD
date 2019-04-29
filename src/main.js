import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'lib-flexible/flexible'
// 懒加载
import VueLazyload from 'vue-lazyload'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 轮播css
import 'swiper/dist/css/swiper.css'
// fastclick插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.png',
  loading: '../static/loading.gif',
  attempt: 1
})
FastClick.attach(document.body)

Vue.use(VueAwesomeSwiper /* 轮播 */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
