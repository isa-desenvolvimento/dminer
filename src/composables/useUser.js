import { ref, onMounted } from 'vue'
import { fetchUser, fetchUpdateUser, fetchUsersBirthday } from '@/api/user'

export default function useUser(idUser) {
  const getUser = ref([])
  const getUsersBirthday = ref([])

  const setUser = async () => {
    getUser.value = await fetchUser(idUser)
  }

  const setUsersBirthday = async () => {
    getUsersBirthday.value = await fetchUsersBirthday()
  }

  const setBanner = async () => {
    await fetchUpdateUser(idUser)
  }

  onMounted(() => {
    setUser()
    setUsersBirthday()
  })

  return {
    setUser,
    getUser,
    setUsersBirthday,
    getUsersBirthday,
    setBanner
  }
}
