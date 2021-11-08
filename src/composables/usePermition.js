import { ref, onMounted } from 'vue'
import { fetchAllUser } from '@/api/user.js'
import { fetchAll } from '@/api/permition.js'

export default function usePermition() {
  const getPermition = ref([])
  const getAllUsers = ref([])

  const setPermition = async () => {
    getPermition.value = await fetchAll()
  }

  const setAllUsers = async () => {
    getAllUsers.value = await fetchAllUser()
  }

  onMounted(setPermition)
  onMounted(setAllUsers)

  return {
    getPermition,
    setPermition,
    setAllUsers,
    getAllUsers
  }
}
