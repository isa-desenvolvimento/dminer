import { ref, onMounted } from 'vue'
import { fetchAllDocuments } from '@/api/document.js'

export default function useDocument() {
  const getDocuments = ref([])

  const setDocument = async () => {
    getDocuments.value = await fetchAllDocuments()
  }

  onMounted(setDocument)
  return {
    getDocuments,
    setDocument
  }
}
