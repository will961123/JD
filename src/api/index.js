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
// 请求hjdspk 首页头部京东秒杀
export function gethJdspk () {
  return axios.get('hjdspk')
}
// 请求hdyard 首页东家小院后台
export function gethDyard () {
  return axios.get('hdyard')
}
// 请求hgdaily 首页东家小院后台
export function gethGdaily () {
  return axios.get('hgdaily')
}
// 请求hforyou 首页下部为你推荐
export function gethForyou () {
  return axios.get('hforyou')
}
// 请求分类页左边列表部分的数据
export function getCate () {
  return axios.get('cateleft')
}
// 请求而分类页面右侧数据
export function getcateRight () {
  return axios.get('cateright')
}
// 拼购页，精选区菜单栏
export function getShopHot () {
  return axios.get('shophot')
}
// 购物车，秒杀区
export function getMiaoSha () {
  return axios.get('miaosha')
}
