import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1f342bf8 = () => import('..\\client\\pages\\lost.vue' /* webpackChunkName: "pages_lost" */).then(m => m.default || m)
const _320f3f08 = () => import('..\\client\\pages\\auth.vue' /* webpackChunkName: "pages_auth" */).then(m => m.default || m)
const _b623ccaa = () => import('..\\client\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _1321d712 = () => import('..\\client\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _91763838 = () => import('..\\client\\pages\\error.vue' /* webpackChunkName: "pages_error" */).then(m => m.default || m)
const _3d2668c5 = () => import('..\\client\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _737ec5ae = () => import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _27a86f14 = () => import('..\\client\\pages\\index\\index.vue' /* webpackChunkName: "pages_index_index" */).then(m => m.default || m)
const _6122b5b5 = () => import('..\\client\\pages\\index\\twitter.vue' /* webpackChunkName: "pages_index_twitter" */).then(m => m.default || m)
const _0a334403 = () => import('..\\client\\pages\\index\\essayIndex.vue' /* webpackChunkName: "pages_index_essayIndex" */).then(m => m.default || m)
const _190f5bbb = () => import('..\\client\\pages\\index\\essayIndex\\_page.vue' /* webpackChunkName: "pages_index_essayIndex__page" */).then(m => m.default || m)
const _63f2af72 = () => import('..\\client\\pages\\index\\tags.vue' /* webpackChunkName: "pages_index_tags" */).then(m => m.default || m)
const _1569f305 = () => import('..\\client\\pages\\index\\_essayMain.vue' /* webpackChunkName: "pages_index__essayMain" */).then(m => m.default || m)



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
			component: _1f342bf8,
			name: "lost"
		},
		{
			path: "/auth",
			component: _320f3f08,
			name: "auth"
		},
		{
			path: "/admin",
			component: _b623ccaa,
			children: [
				{
					path: "",
					component: _1321d712,
					name: "admin"
				}
			]
		},
		{
			path: "/error",
			component: _91763838,
			name: "error"
		},
		{
			path: "/login",
			component: _3d2668c5,
			name: "login"
		},
		{
			path: "/",
			component: _737ec5ae,
			children: [
				{
					path: "",
					component: _27a86f14,
					name: "index"
				},
				{
					path: "twitter",
					component: _6122b5b5,
					name: "index-twitter"
				},
				{
					path: "essayIndex",
					component: _0a334403,
					name: "index-essayIndex",
					children: [
						{
							path: ":page?",
							component: _190f5bbb,
							name: "index-essayIndex-page"
						}
					]
				},
				{
					path: "tags",
					component: _63f2af72,
					name: "index-tags"
				},
				{
					path: ":essayMain",
					component: _1569f305,
					name: "index-essayMain"
				}
			]
		}
    ],
    
    
    fallback: false
  })
}
