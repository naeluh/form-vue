import Vue from 'vue'
import Router from 'vue-router'
import { AsyncDataPlugin } from 'vue-async-data-2'
import Index from '@/components/Index'
import Form from '@/components/Form'

Vue.use(AsyncDataPlugin)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '*',
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
