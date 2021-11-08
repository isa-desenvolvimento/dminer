import { ref, onMounted } from 'vue'
import { fetchAllPermitions } from '@/api/permition.js'

export default function usePermition() {
  const getPermition = ref([])

  const setPermition = async () => {
    getPermition.value = await fetchAllPermitions()
  }

  onMounted(setPermition)

  return {
    getPermition,
    setPermition
  }
}
