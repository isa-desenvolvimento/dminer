import { ref, onMounted } from 'vue'
import { fetchUsersBirthday } from '@/api/user'

export default function useBirthday() {
  const getUsersBirthday = ref([])

  const setUsersBirthday = async () => {
    getUsersBirthday.value = await fetchUsersBirthday()
  }

  onMounted(setUsersBirthday)

  return {
    setUsersBirthday,
    getUsersBirthday
  }
}


import { ref, onMounted } from 'vue'
import { fetchUsersBirthday } from '@/api/user.js'

export default function useBirthday() {
  const getBirthday = ref([])

  const setBirthday = async () => {
    getBirthday.value = await fetchUsersBirthday()
  }

  onMounted(setFeed)
  return {
    getBirthday,
    setBirthday
  }
}