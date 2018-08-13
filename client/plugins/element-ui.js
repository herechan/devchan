import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import "./theme/index.css"
// import "element-ui/packages/theme-chalk/src/index";
// import 'element-ui/lib/theme-chalk/index.css';
// import "./customer.scss"
export default () => {
  Vue.use(Element, { locale })
} 