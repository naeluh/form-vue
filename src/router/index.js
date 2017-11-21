import Vue from 'vue'
import Router from 'vue-router'
import { AsyncDataPlugin } from 'vue-async-data-2'
import Index from '@/components/Index'

Vue.use(AsyncDataPlugin)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue/',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/:id',
    name: 'Index',
    component: Index
  }
  ]
})
