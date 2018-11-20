import axios from 'axios'

export default {
  getTasks({ commit }) {
    axios.get('http://localhost:3000/tasks', {
      Accept: "application/json"
    })
      .then(res => {
        commit('getTasks', res.data)
      })
  },
  postTask({ dispatch }, newTask) {
    axios.post('http://localhost:3000/tasks', newTask, {
      Accept: "application/json"
    })
      .then(res => {
        dispatch('getTasks')
      })
  },
  putTask({ dispatch }, index) {
    axios.put(`http://localhost:3000/task/${index}`, {
      Accept: "application/json"
    })
      .then(res => {
        dispatch('getTasks')
      })
  }
}