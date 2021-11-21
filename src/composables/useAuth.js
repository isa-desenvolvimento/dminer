import { ref } from 'vue'
import { fetchtAuth } from '@/api/auth'

export default function useAuth(user) {
  const logged = ref([])

  const login = async () => {
    const auth = await fetchtAuth(user)
    if (auth.accessToken) {
      localStorage.user = logged.value = auth
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
  }

  return {
    logged,
    login,
    logout
  }
}
