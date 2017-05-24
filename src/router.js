import Vue from 'vue'
import VueRouter from 'vue-router'
import bike from './components/bike/user'
import clerk from './components/merchant/clerk'

import profileBike from './components/bike/profileBike'
import map from './components/bike/map'
import helpBike from './components/bike/helpBike'
import about from './components/bike/aboutBike'

import profileStore from './components/merchant/profileStore'
import mapStore from './components/merchant/mapStore'
import helpStore from './components/merchant/helpStore'
import aboutStore from './components/merchant/aboutStore'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      component: load('Index')
    },
    {
      path: '/bike',
      component: bike,
      children: [
        {
          path: '/bike/profile',
          component: profileBike,
          name: profileBike
        },
        {
          path: '/bike/map',
          component: map,
          name: map
        },
        {
          path: '/bike/help',
          component: helpBike,
          name: helpBike
        },
        {
          path: '/bike/about',
          component: about,
          name: about
        }
      ]
    },
    {
      path: '/clerk',
      component: clerk,
      children: [
        {
          path: '/clerk/profile',
          component: profileStore,
          name: profileBike
        },
        {
          path: '/clerk/map',
          component: mapStore,
          name: mapStore
        },
        {
          path: '/clerk/help',
          component: helpStore,
          name: helpBike
        },
        {
          path: '/clerk/about',
          component: aboutStore,
          name: about
        }
      ]
    },
    {
      path: '*',
      component: load('Error404')
    }
  ]
})
