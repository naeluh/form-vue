// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/Footer'
import Nav from './components/Nav'
Vue.component('Nav', Nav)
Vue.component('Footer', Footer)

Vue.config.productionTip = true

require('./assets/scss/main.scss')
require('../node_modules/normalize.css/normalize.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
