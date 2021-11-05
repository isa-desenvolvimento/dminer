import { ref, onMounted } from 'vue'
import { fetchUsersBirthday } from '@/api/user.js'

export default function useBirthday() {
  const getBirthday = ref([])

  const setBirthday = async () => {
    getBirthday.value = await fetchUsersBirthday()
  }

  onMounted(setBirthday)
  return {
    getBirthday,
    setBirthday
  }
}
