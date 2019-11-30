import Cookie from 'js-cookie'

export default {
  state: {
    token: ''
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
    },
    clearToken() {
      Cookie.remove('token')
    },
    getToken(state) {
      state.token = Cookie.get('token')
    }
  },
  actions: {}
}
