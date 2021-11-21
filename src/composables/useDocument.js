import { ref, onMounted } from 'vue'
import { fetchAllDocuments, fetchCreate, fetchUpdate } from '@/api/document.js'

export default function useDocument() {
  const getDocuments = ref([])

  const setDocument = async () => {
    getDocuments.value = await fetchAllDocuments()
  }

  const create = async (doc) => {
    return await fetchCreate(doc)
  }

  const update = async (item) => {
    return await fetchUpdate(item)
  }

  onMounted(setDocument)

  return {
    getDocuments,
    setDocument,
    create,
    update
  }
}
