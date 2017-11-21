import Vue from 'vue'
import Router from 'vue-router'
import { AsyncDataPlugin } from 'vue-async-data-2'
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
  }]
})
