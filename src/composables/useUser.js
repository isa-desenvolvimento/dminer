import { ref, onMounted } from 'vue'
import { fetchUser, fetchUpdateUser, fetchAllUser } from '@/api/user'

export default function useUser(idUser) {
  const getUser = ref([])
  const getAllUsers = ref([])

  const setUser = async () => {
    getUser.value = await fetchUser(idUser)
  }

  const setBanner = async () => {
    await fetchUpdateUser(idUser)
  }

  const setAllUsers = async () => {
    getAllUsers.value = await fetchAllUser()
  }

  onMounted(setUser)

  return {
    setUser,
    getUser,
    setBanner,
    setAllUsers
  }
}
