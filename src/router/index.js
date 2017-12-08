import Vue from 'vue'
import Router from 'vue-router'
import { AsyncDataPlugin } from 'vue-async-data-2'
import Form from '@/components/Form'
import Index from '@/components/index'

Vue.use(AsyncDataPlugin)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/pregnancy-leave-rights/',
  routes: [{
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/:id',
    name: 'Index',
    component: Index
  }]
})
