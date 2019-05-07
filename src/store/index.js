import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 数据模型
var state = {
  // 当前分类页面li索引值
  currentIndex: 0,
  // shop页面list
  shopListIndex: -1,
  // my页面的状态
  myShow: {
    'load': true,
    'main': false
  },
  // 判断bnav是否显示
  showFooter: true
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
  },
  // 修改myshow
  changeMyshow (state, name) {
    for (let key in state.myShow) {
      // state.myShow[key] = false
      state.myShow[key] = !state.myShow[key]
    }
    // state.myShow[name] = !state.myShow[name]
  },
  changeShowFooter (state, isShow) {
    state.showFooter = isShow
  }
}

// 为了执行异步 让actions提交mutations方法
var actions = {
  change (context, index) {
    context.commit('change', index)
  },
  changeShopList (context, index) {
    context.commit('changeShopList', index)
  },
  changeMyshow (context, index) {
    context.commit('changeMyshow', index)
  },
  changeShowFooter (context, isShow) {
    context.commit('changeShowFooter', isShow)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
