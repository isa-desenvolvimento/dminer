import { ref, onMounted } from 'vue'
import { fetchAllReminder, fetchCreate } from '@/api/reminder.js'

export default function useReminder() {
  const getReminders = ref([])

  const setReminder = async () => {
    getReminders.value = await fetchAllReminder()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setReminder)
  return {
    getReminders,
    setReminder,
    create
  }
}
