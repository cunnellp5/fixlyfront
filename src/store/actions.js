// import api from '../api/map.js'
//
// const actions = {
//   getIncrementers (context) {
//     return api.get('http://localhost:3000/map')
//       .then((response) => context.commit('GET_NAMES', response))
//       .catch((error) => context.commit('API_FAILURE', error))
//   }
// }
//
// export default actions
import axios from 'axios'
import { INCREMENT, DECREMENT, BICYCLEUSER, USERHELPS } from './mutation_types'

export default {
  bicycleUser (store) {
    axios.get('http://localhost:3000/users')
    .then((response) => {
      store.commit(BICYCLEUSER, response)
    })
  },
  userHelps (store) {
    axios.get('http://localhost:3000/users/1/helps')
    .then((response) => {
      store.commit(USERHELPS, response)
    })
  },
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
