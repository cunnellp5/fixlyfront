// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import axios from 'axios'
const VueGoogleMaps = require('vue2-google-maps')
import router from './router'

import store from './store'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAPWV1sULdua9Vm2W-GtwndQ84aIC9Sgys',
    v: '3.28',
    libraries: 'places'
  }
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
