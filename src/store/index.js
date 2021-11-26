import { createStore } from 'vuex'
import { auth } from './auth.module'
import { user } from './user.module'
import { sidebar } from './sidebar.module'
import { home } from './home.module'

const store = createStore({
  modules: {
    auth,
    user,
    sidebar,
    home
  }
})

export default store
