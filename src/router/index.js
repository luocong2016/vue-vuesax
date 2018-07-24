import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'
import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/Button'
import Select from '@/components/Select'

Vue.use(Router)

export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/buttons',
      name: 'Button',
      component: Button
    },
    {
      path: '/selects',
      name: 'Selects',
      component: Select
    }
  ]
})
