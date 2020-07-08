// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
/* eslint-disable no-new */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Card from './components/Card'

import Sendcard from './components/Sendcard'

import axios from 'axios'
import './assets/icon/iconfont.css'

import http from './http';
Vue.prototype.$http = http


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('m-card', Card)
Vue.component('send-card', Sendcard)

Vue.use(VueAwesomeSwiper /* { default options with global component} */)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
