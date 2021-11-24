import { createStore } from 'vuex'
import { auth } from './auth.module'
import { user } from './user.module'
import { sidebar } from './sidebar.module'

const store = createStore({
  modules: {
    auth,
    user,
    sidebar
  }
})

export default store
