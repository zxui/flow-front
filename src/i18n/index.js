import Vue from 'vue'
import ObjectAssign from 'object-assign'

const vuxLocales = require('json-loader!yaml-loader!vux/src/locales/all.yml')
const componentsLocales = require('json-loader!yaml-loader!vux/src/locales/components.yml')
const globalLocales = require('json-loader!yaml-loader!vux/src/locales/global_locales.yml') || {en: {}, 'zh-CN': {}}

const finalLocales = {
  'en': ObjectAssign(vuxLocales['en'], componentsLocales['en'], globalLocales['en']),
  'zh-CN': ObjectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'], globalLocales['zh-CN'])
}

for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}

Vue.i18n.set('zh-CN')

export default {}
