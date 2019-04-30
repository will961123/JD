import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 数据模型
var state = {
  // 当前分类li索引值
  currentIndex: 0
}

// 自定义数据仓库方法
var mutations = {
  // 当分类左侧li点击时候更改
  change (state, index) {
    state.currentIndex = index
  }
}

// 为了执行异步 让actions提交mutations方法
var actions = {
  change (context, index) {
    context.commit('change', index)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
