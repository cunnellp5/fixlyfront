import {INCREMENT, DECREMENT, BICYCLEUSER, USERHELPS} from './mutation_types'

export default {
  [INCREMENT] (state) {
    state.myValue++
  },
  [DECREMENT] (state) {
    state.myValue--
  },
  [BICYCLEUSER] (state, response) {
    state.user = response.data
  },
  [USERHELPS] (state, response) {
    state.help = response.data
  }
}
