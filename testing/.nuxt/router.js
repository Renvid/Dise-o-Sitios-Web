import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de3a2c5e = () => interopDefault(import('..\\pages\\batallas_index.vue' /* webpackChunkName: "pages/batallas_index" */))
const _7ca1402a = () => interopDefault(import('..\\pages\\casas_index.vue' /* webpackChunkName: "pages/casas_index" */))
const _54d81f1f = () => interopDefault(import('..\\pages\\personajes_index.vue' /* webpackChunkName: "pages/personajes_index" */))
const _188190d5 = () => interopDefault(import('..\\pages\\regiones_index.vue' /* webpackChunkName: "pages/regiones_index" */))
const _04674612 = () => interopDefault(import('..\\pages\\reyes_index.vue' /* webpackChunkName: "pages/reyes_index" */))
const _3b70357c = () => interopDefault(import('..\\pages\\batallas\\_slug.vue' /* webpackChunkName: "pages/batallas/_slug" */))
const _7106ab7a = () => interopDefault(import('..\\pages\\casas\\_slug.vue' /* webpackChunkName: "pages/casas/_slug" */))
const _13bcac24 = () => interopDefault(import('..\\pages\\personajes\\_slug.vue' /* webpackChunkName: "pages/personajes/_slug" */))
const _b0b32210 = () => interopDefault(import('..\\pages\\regiones\\_slug.vue' /* webpackChunkName: "pages/regiones/_slug" */))
const _6bb52716 = () => interopDefault(import('..\\pages\\reyes\\_slug.vue' /* webpackChunkName: "pages/reyes/_slug" */))
const _1c3f31a2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/batallas_index",
    component: _de3a2c5e,
    name: "batallas_index"
  }, {
    path: "/casas_index",
    component: _7ca1402a,
    name: "casas_index"
  }, {
    path: "/personajes_index",
    component: _54d81f1f,
    name: "personajes_index"
  }, {
    path: "/regiones_index",
    component: _188190d5,
    name: "regiones_index"
  }, {
    path: "/reyes_index",
    component: _04674612,
    name: "reyes_index"
  }, {
    path: "/batallas/:slug?",
    component: _3b70357c,
    name: "batallas-slug"
  }, {
    path: "/casas/:slug?",
    component: _7106ab7a,
    name: "casas-slug"
  }, {
    path: "/personajes/:slug?",
    component: _13bcac24,
    name: "personajes-slug"
  }, {
    path: "/regiones/:slug?",
    component: _b0b32210,
    name: "regiones-slug"
  }, {
    path: "/reyes/:slug?",
    component: _6bb52716,
    name: "reyes-slug"
  }, {
    path: "/",
    component: _1c3f31a2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
