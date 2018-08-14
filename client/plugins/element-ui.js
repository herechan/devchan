import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import "../static/theme/index.css"
export default () => {
  Vue.use(Element, { locale })
} 