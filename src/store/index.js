import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    getTasks (state, tasks) {
      state.todoList = tasks
    },
    addTask (state, task) {
      state.todoList.push(task)
    },
    toggleTaskType (state, index) {
      state.todoList[index].type === 'IN_PROGRESS'
        ? state.todoList[index].type = 'COMPLETE'
        : state.todoList[index].type = 'IN_PROGRESS'
    }
  },
  getters: {
    tasks (state) {
      return state.todoList
    }
  },
  actions: actions
})

export default store