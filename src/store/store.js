import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  myValue: 10
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const mutations = {
  [INCREMENT] (state) {
    state.myValue++
  },
  [DECREMENT] (state) {
    state.myValue--
  }
}

const actions = {
  increment (store) {
    setTimeout(() => {
      store.commit(INCREMENT)
    }, 500)
  },
  decrement (store) {
    setTimeout(() => {
      store.commit(DECREMENT)
    }, 500)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
