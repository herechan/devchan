import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61303110 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _0556f3fb = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _67a03692 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _c40ed90a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _132d5c84 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _60bb313e = () => interopDefault(import('../pages/index/_article/index.vue' /* webpackChunkName: "pages/index/[_]article/index" */))

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
    path: "/admin",
    component: _61303110,
    children: [{
      path: "",
      component: _0556f3fb,
      name: "admin"
    }]
  }, {
    path: "/login",
    component: _67a03692,
    name: "login"
  }, {
    path: "/",
    component: _c40ed90a,
    children: [{
      path: "",
      component: _132d5c84,
      name: "index"
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
