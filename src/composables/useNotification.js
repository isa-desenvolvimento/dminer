import { ref, onMounted } from 'vue'
import { fetchAll, fetchCreate } from '@/api/notice.js'

export default function useNotification() {
  const getNotifications = ref([])

  const setNotification = async () => {
    getNotifications.value = await fetchAll()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setNotification)
  return {
    getNotifications,
    setNotification,
    create
  }
}
