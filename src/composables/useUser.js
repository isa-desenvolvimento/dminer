import { ref, onMounted, watch } from 'vue'
import { fetchUser, fetchUpdateUser } from '@/api/user'

export default function useUser(getUserRef = null, idUser) {
  const getUser = ref([])

  const setUser = async () => {
    getUser.value = await fetchUser(idUser)
  }

  const setBanner = async () => {
    await fetchUpdateUser(idUser, getUserRef.value)
  }

  onMounted(setUser)

  watch(getUser, setUser)

  return {
    setUser,
    getUser,
    setBanner
  }
}
