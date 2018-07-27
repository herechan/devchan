import axios from "axios";
axios.interceptors.response.use(function (response) {
  if (response.data.status == 401) {
    $nuxt._router.push("/login");
  }else if(response.data.status == 404){
    $nuxt._router.push("/lost");
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;