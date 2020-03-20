import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69f63aba = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _022e89d4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3886e6bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _69f63aba,
    name: "admin"
  }, {
    path: "/login",
    component: _022e89d4,
    name: "login"
  }, {
    path: "/",
    component: _3886e6bd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
