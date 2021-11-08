import { ref, onMounted } from 'vue'
import { fetchUser, fetchUpdateUser } from '@/api/user'

export default function useUser(idUser) {
  const getUser = ref([])

  const setUser = async () => {
    getUser.value = await fetchUser(idUser)
  }

  const setBanner = async () => {
    await fetchUpdateUser(idUser)
  }

  onMounted(setUser)

  return {
    setUser,
    getUser,
    setBanner
  }
}
