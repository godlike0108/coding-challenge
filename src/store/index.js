import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        type: 'IN_PROGRESS',
        text: 'Mop the floor.'
      },
      {
        type: 'COMPLETE',
        text: 'Read some code.'
      }
    ]
  },
  mutations: {

  },
  actions: actions
})

export default store