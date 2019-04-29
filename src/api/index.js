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

// 请求cate 分类
export function gethCate () {
  // 代理后 去请求自己就好了
  // return axios.get('http://localhost:8080/cate')
  return axios.get('hcate')
}
