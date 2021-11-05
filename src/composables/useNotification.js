import { reactive, onMounted } from 'vue'
import {
  fetchAllNotification,
  storeNotification,
  mutateNotification,
  destroyNotification
} from '@/api/notification.js'

export default function useNotification() {
  const getNotifications = ref([])

  const setNotification = async () => {
    getNotifications.value = await fetchAllNotification()
  }

  const createNotification = (notification) => {
    storeNotification(notification)
  }

  const updateNotification = (notification, id) => {
    mutateNotification(notification, id)
  }

  const deleteNotification = (id) => {
    destroyNotification(id)
  }

  onMounted(setNotification)

  return {
    getNotifications,
    setNotification,
    createNotification,
    updateNotification,
    deleteNotification
  }
}
