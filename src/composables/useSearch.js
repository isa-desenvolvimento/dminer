import { ref } from 'vue'
import { fetchAllSearch } from '@/api/search.js'

export default function useSearch() {
  const getSearch = ref([])

  const setSearch = async (text) => {
    getSearch.value = await fetchAllSearch(text)
  }

  return {
    getSearch,
    setSearch
  }
}
