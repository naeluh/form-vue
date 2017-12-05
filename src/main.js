// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Form from './components/Form'
Vue.component('Form', Form)

Vue.config.productionTip = true

require('./assets/scss/main.scss')
require('./assets/scss/animate.css')
require('../node_modules/normalize.css/normalize.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
