import { fetchtAuth } from '@/api/auth'

export default function useAuth() {
  const login = async (user) => {
    const auth = await fetchtAuth(user)
    if (auth && auth.baererAuthentication) {
      localStorage.user = JSON.stringify(auth)
      return auth
    }
  }

  const logout = () => {
    localStorage.clear()
  }

  return {
    login,
    logout
  }
}
