import useUser from '@/composables/useUser'

const initialState = {
  name: '',
  avatar: '',
  banner: '',
  login: '',
  permission: ''
}
const userLocalStorage = localStorage.user
  ? JSON.parse(localStorage.user)
  : initialState

const { getAvatar } = useUser()

export const user = {
  namespaced: true,
  state: userLocalStorage,
  actions: {
    avatar({ commit, state }, user) {
      getAvatar(user.login).then(
        (response) => {
          state.avatar = response
          commit('success', state)

          return Promise.resolve(response)
        },
        (error) => {
          console.error(error)
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    setUser({ commit, state }, user) {
      const user_ = {
        ...state,
        name: user.usuario,
        login: user.login,
        permission: user.type
      }

      this.dispatch('user/avatar', user_)
    }
  },
  mutations: {
    success(state, user) {
      state = user
    },
    failure(state) {
      state.user = initialState
    }
  }
}
