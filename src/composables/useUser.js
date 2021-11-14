import { ref, onMounted } from 'vue'
import { fetchUser, fetchUpdateUser, fetchCreateUser } from '@/api/user'

export default function useUser(idUser) {
  const getUser = ref([])

  const setUser = async () => {
    getUser.value = await fetchUser(idUser)
  }

  const setBanner = async () => {
    await fetchUpdateUser(idUser)
  }

  const createUser = async (user) => {
    await fetchCreateUser(user)
  }

  return {
    setUser,
    getUser,
    setBanner,
    createUser
  }
}
