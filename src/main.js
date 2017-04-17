import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import  i18n from './i18n'
import { sync } from 'vuex-router-sync'
require('es6-promise').polyfill()
import App from './App'

sync(store, router)

FastClick.attach(document.body)

// plugins
import {ToastPlugin,AjaxPlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.innerHTML = '<span style="color: red">'+el.innerHTML+'</span>'
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
