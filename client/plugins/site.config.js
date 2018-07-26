import Vue from 'vue'
Vue.prototype.frontUrl = process.env.frontUrl;
Vue.prototype.baseUrl = process.env.baseUrl;
Vue.prototype.validateFailure = "请检查必填项";
Vue.prototype.trim = function(string){
    return string.replace(/\s+/g,"")
}
export default {
}