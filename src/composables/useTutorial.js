import { ref, onMounted } from 'vue'
import { fetchAlltutorials, fetchCreate } from '@/api/tutorial.js'

export default function useTutorial() {
  const getTutorials = ref([])

  const setTutorial = async () => {
    getTutorials.value = await fetchAlltutorials()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setTutorial)
  return {
    getTutorials,
    setTutorial,
    create
  }
}
