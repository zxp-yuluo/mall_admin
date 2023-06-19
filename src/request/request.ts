import axios from "axios";
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5173/api',
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // const token = localStorage.getItem("token")
  // console.log("token:" + token + "--------request.js---------");
  // if(token) {
  //   config.headers.token = token || ""
  //   console.log("token:不为空--------request.js---------" + token);
  // }
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // const data = response.data
  // console.log("响应数据：" + data + "---------------");
  // const code: number = data.code
  // if(code != 200) {
  //   return Promise.reject(data)
  // }
  return response.data;
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log("request.js: error" + JSON.stringify(error));
  let message = ""
  const status = error.response.status
  switch (status) {
    case 401:
      message = "token过期!!!"
      break;
    case 403:
      message = "没有权限!!!"
      break;
    case 404:
      message = "请求地址错误!!!"
      break;
    case 500:
      message = "服务器问题!!!"
      break;
    default:
      message = "网络问题!!!"
      break;
  }
  ElMessage.error(message)
  return Promise.reject(error);
});

export default instance