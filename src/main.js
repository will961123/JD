import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'lib-flexible/flexible'
// 懒加载
import VueLazyload from 'vue-lazyload'
// fastclick插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.png',
  loading: '../static/loading.gif',
  attempt: 1
})
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
