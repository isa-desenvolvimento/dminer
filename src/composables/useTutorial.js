import { ref, onMounted } from 'vue'
import { fetchAll } from '@/api/tutorial.js'

export default function useTutorial() {
  const getTutorials = ref([])

  const setTutorial = async () => {
    getTutorials.value = await fetchAll()
  }

  onMounted(setTutorial)
  return {
    getTutorials,
    setTutorial
  }
}
