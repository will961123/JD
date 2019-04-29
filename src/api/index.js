import axios from 'axios'

// 设置默认请求地址
axios.defaults.baseURL = 'http://localhost:8080/'
// 设置拦截数据
axios.interceptors.response.use(function (response) {
  return response.data
}, function (err) {
  return Promise.reject(err)
}
)

// 请求hbanner 首页轮播图后台
export function gethBanner () {
  return axios.get('hbanner')
}
// 请求hcate 首页头部分类分类
export function gethCate () {
  // 代理后 去请求自己就好了
  // return axios.get('http://localhost:8080/cate')
  return axios.get('hcate')
}
// 请求hforyou 首页下部为你推荐
export function gethForyou () {
  return axios.get('hforyou')
}
