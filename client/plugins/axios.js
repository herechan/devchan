import axios from "axios";
import store from "~/store/index.js"
// import Vue from "vue"
axios.interceptors.response.use(function (response) {
  console.log(response)
  if (response.data.status == 401) {
    $nuxt._router.push("/login");
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;