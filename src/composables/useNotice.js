import { ref, onMounted } from 'vue'
import { fetchAllNotice } from '@/api/notice.js'

export default function useNotice() {
  const getNotices = ref([])

  const setNotice = async () => {
    getNotices.value = await fetchAllNotice()
  }

  onMounted(setNotice)
  return {
    getNotices,
    setNotice
  }
}
