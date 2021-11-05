import { ref, onMounted } from 'vue'
import { fetchAllReminder } from '@/api/reminder.js'

export default function useReminder() {
  const getReminders = ref([])

  const setReminder = async () => {
    getReminders.value = await fetchAllReminder()
  }

  onMounted(setReminder)
  return {
    getReminders,
    setReminder
  }
}
