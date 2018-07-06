import axios from "axios";
import Vue from "vue"
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(1)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;