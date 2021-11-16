import { ref, onMounted } from 'vue'
import { fetchAllNotice, fetchCreate } from '@/api/notice.js'

export default function useNotice() {
  const getNotices = ref([])

  const setNotice = async () => {
    getNotices.value = await fetchAllNotice()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setNotice)
  return {
    getNotices,
    setNotice,
    create
  }
}
