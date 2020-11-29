import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 0 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function(config) {
  //window.sessionStorage.setItem("ewais",'http://ewais.e2r.cn:9001/dist/works/index.html');
  // Do something before request is sent
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function(error) {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

export default service