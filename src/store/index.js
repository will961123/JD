import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 数据模型
var state = {
  // 当前分类页面li索引值
  currentIndex: 0,
  // shop页面list
  shopListIndex: -1
}

// 自定义数据仓库方法
var mutations = {
  // 当分类左侧li点击时候更改
  change (state, index) {
    state.currentIndex = index
  },
  // shop分类
  changeShopList (state, index) {
    state.shopListIndex = index
  }
}

// 为了执行异步 让actions提交mutations方法
var actions = {
  change (context, index) {
    context.commit('change', index)
  },
  changeShopList (context, index) {
    context.commit('changeShopList', index)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
