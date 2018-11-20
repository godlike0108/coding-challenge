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
    addTask (state, task) {
      state.todoList.push(task)
    },
    toggleTaskType (state, index) {
      state.todoList[index].type === 'IN_PROGRESS'
        ? state.todoList[index].type = 'COMPLETE'
        : state.todoList[index].type = 'IN_PROGRESS'
    }
  },
  actions: actions
})

export default store