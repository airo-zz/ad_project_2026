class User {
  constructor (id, email, password) {
    this.id = id
    this.email = email
    this.password = password
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      console.log(payload)
      state.user = payload
    }
  },
  actions: {
    registerUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      setTimeout(() => {
        commit('setUser', new User(Math.random(), email, password))
        commit('setLoading', false)
      }, 1000)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
