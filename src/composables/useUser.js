import { ref, onMounted } from 'vue'
import { fetchUser, fetchUpdate, fetchCreateUser } from '@/api/user'

export default function useUser(idUser) {
  const getUser = ref([])

  const setUser = async () => {
    localStorage.idUser = idUser
    getUser.value = await fetchUser(idUser)
  }

  const createUser = async (user) => {
    return await fetchCreateUser(user)
  }

  const update = async (user) => {
    return await fetchUpdate(user)
  }

  return {
    setUser,
    getUser,
    createUser,
    update
  }
}
