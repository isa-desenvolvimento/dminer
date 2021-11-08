import { ref, onMounted } from 'vue'
import { fetchAlltutorials } from '@/api/tutorial.js'

export default function useTutorial() {
  const getTutorials = ref([])

  const setTutorial = async () => {
    getTutorials.value = await fetchAlltutorials()
  }

  onMounted(setTutorial)
  return {
    getTutorials,
    setTutorial
  }
}
