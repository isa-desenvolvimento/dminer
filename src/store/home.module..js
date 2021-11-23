// import useNotice from '@/composables/useNotice'
// import useNotification from '@/composables/useNotification'
// import useReminder from '@/composables/useReminder'
// import useQuiz from '@/composables/useQuiz'
// import useBirthday from '@/composables/useBirthday'

const initialState = {
  noticeList: [],
  notificationlist: [],
  reminderList: [],
  birthdayList: [],
  quizList: [],
}


const { get}

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return login(user).then(
        (user) => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        (error) => {
          console.log(error)
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    logout({ commit }) {
      logout()
      commit('logout')
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout(state) {
      state.status.loggedIn = false
      state.user = null
    },
    registerSuccess(state) {
      state.status.loggedIn = false
    },
    registerFailure(state) {
      state.status.loggedIn = false
    }
  }
}
