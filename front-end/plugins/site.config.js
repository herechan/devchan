import Vue from 'vue'
Vue.prototype.frontUrl = process.env.frontUrl;
Vue.prototype.serverUrl = process.env.serverUrl;
Vue.prototype.validateFailure = "请检查必填项";
Vue.prototype.trim = function(string){
    return string.replace(/\s+/g,"")
}
export default {
}