import { ref, onMounted } from 'vue'
import { fetchAllPermitions, fetchCreate } from '@/api/permition.js'

export default function usePermition() {
  const getPermition = ref([])

  const setPermition = async () => {
    getPermition.value = await fetchAllPermitions()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setPermition)

  return {
    getPermition,
    setPermition,
    create
  }
}
