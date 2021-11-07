import { ref, onMounted } from 'vue'
import { fetchAll } from '@/api/document.js'

export default function useDocument() {
  const getDocuments = ref([])

  const setDocument = async () => {
    getDocuments.value = await fetchAll()
  }

  onMounted(setDocument)
  return {
    getDocuments,
    setDocument
  }
}
