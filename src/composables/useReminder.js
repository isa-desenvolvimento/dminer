import { ref, onMounted } from 'vue'
import { fetchAll, fetchCreate, fetchUpdate } from '@/api/reminder.js'

export default function useReminder() {
  const getReminders = ref([])

  const setReminder = async (login) => {
    return  await fetchAll(login)
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  const updateReminder = async (item) => {
    return await fetchUpdate(item)
  }


  return {
    getReminders,
    setReminder,
    create,
    updateReminder
  }
}
