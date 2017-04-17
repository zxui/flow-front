import Vue from 'vue'
import vuexI18n from 'vuex-i18n'
import Vuex from 'vuex'
import VuxModule from './vux.module'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

store.registerModule('vux', VuxModule);

Vue.use(vuexI18n.plugin, store);

export default store;
