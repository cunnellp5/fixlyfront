import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  myValue: 10,
  user: [],
  help: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
