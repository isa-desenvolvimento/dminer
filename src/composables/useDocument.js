import { ref, onMounted } from 'vue'
import { fetchAllDocuments, fetchCreate } from '@/api/document.js'

export default function useDocument() {
  const getDocuments = ref([])

  const setDocument = async () => {
    getDocuments.value = await fetchAllDocuments()
  }

  const create = async (doc) => {
    return await fetchCreate(doc)
  }

  onMounted(setDocument)

  return {
    getDocuments,
    setDocument,
    create
  }
}
