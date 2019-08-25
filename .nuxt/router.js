import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _998ce7d0 = () => import('..\\client\\pages\\lost.vue' /* webpackChunkName: "pages_lost" */).then(m => m.default || m)
const _7afdc09c = () => import('..\\client\\pages\\auth.vue' /* webpackChunkName: "pages_auth" */).then(m => m.default || m)
const _dcd684ea = () => import('..\\client\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _30bb56d2 = () => import('..\\client\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _b828f078 = () => import('..\\client\\pages\\error.vue' /* webpackChunkName: "pages_error" */).then(m => m.default || m)
const _29cd0ca5 = () => import('..\\client\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _6025698e = () => import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _18dbaf34 = () => import('..\\client\\pages\\index\\index.vue' /* webpackChunkName: "pages_index_index" */).then(m => m.default || m)
const _5af32456 = () => import('..\\client\\pages\\index\\twitter.vue' /* webpackChunkName: "pages_index_twitter" */).then(m => m.default || m)
const _4da317e3 = () => import('..\\client\\pages\\index\\essayIndex.vue' /* webpackChunkName: "pages_index_essayIndex" */).then(m => m.default || m)
const _67c36bdb = () => import('..\\client\\pages\\index\\essayIndex\\_page.vue' /* webpackChunkName: "pages_index_essayIndex__page" */).then(m => m.default || m)
const _075ae427 = () => import('..\\client\\pages\\index\\tags.vue' /* webpackChunkName: "pages_index_tags" */).then(m => m.default || m)
const _58d9c6e5 = () => import('..\\client\\pages\\index\\_essayMain.vue' /* webpackChunkName: "pages_index__essayMain" */).then(m => m.default || m)



const scrollBehavior = function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        // 目标页面子组件少于两个
        if (to.matched.length < 2) {
          // 滚动至页面顶部
          position = { x: 0, y: 0 }
        }
        else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
          // 如果目标页面子组件中存在配置了scrollToTop为true
          position = { x: 0, y: 0 }
        }
        // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/lost",
			component: _998ce7d0,
			name: "lost"
		},
		{
			path: "/auth",
			component: _7afdc09c,
			name: "auth"
		},
		{
			path: "/admin",
			component: _dcd684ea,
			children: [
				{
					path: "",
					component: _30bb56d2,
					name: "admin"
				}
			]
		},
		{
			path: "/error",
			component: _b828f078,
			name: "error"
		},
		{
			path: "/login",
			component: _29cd0ca5,
			name: "login"
		},
		{
			path: "/",
			component: _6025698e,
			children: [
				{
					path: "",
					component: _18dbaf34,
					name: "index"
				},
				{
					path: "twitter",
					component: _5af32456,
					name: "index-twitter"
				},
				{
					path: "essayIndex",
					component: _4da317e3,
					name: "index-essayIndex",
					children: [
						{
							path: ":page?",
							component: _67c36bdb,
							name: "index-essayIndex-page"
						}
					]
				},
				{
					path: "tags",
					component: _075ae427,
					name: "index-tags"
				},
				{
					path: ":essayMain",
					component: _58d9c6e5,
					name: "index-essayMain"
				}
			]
		}
    ],
    
    
    fallback: false
  })
}
