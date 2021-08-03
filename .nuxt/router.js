import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67a03692 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _da436fdc = () => interopDefault(import('../pages/maneger.vue' /* webpackChunkName: "pages/maneger" */))
const _0104f915 = () => interopDefault(import('../pages/maneger/index.vue' /* webpackChunkName: "pages/maneger/index" */))
const _520d8724 = () => interopDefault(import('../pages/maneger/weibo/index.vue' /* webpackChunkName: "pages/maneger/weibo/index" */))
const _c40ed90a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _132d5c84 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _41b8b257 = () => interopDefault(import('../pages/index/weibo/index.vue' /* webpackChunkName: "pages/index/weibo/index" */))
const _60bb313e = () => interopDefault(import('../pages/index/_article/index.vue' /* webpackChunkName: "pages/index/_article/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _67a03692,
    name: "login"
  }, {
    path: "/maneger",
    component: _da436fdc,
    children: [{
      path: "",
      component: _0104f915,
      name: "maneger"
    }, {
      path: "weibo",
      component: _520d8724,
      name: "maneger-weibo"
    }]
  }, {
    path: "/",
    component: _c40ed90a,
    children: [{
      path: "",
      component: _132d5c84,
      name: "index"
    }, {
      path: "weibo",
      component: _41b8b257,
      name: "index-weibo"
    }, {
      path: ":article",
      component: _60bb313e,
      name: "index-article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
