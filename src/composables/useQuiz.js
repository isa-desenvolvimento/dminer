import { ref, onMounted } from 'vue'
import { fetchAllQuiz, fetchQuizAnswer } from '@/api/quiz.js'

export default function useQuiz() {
  const getQuizs = ref([])

  const setQuiz = async () => {
    getQuizs.value = await fetchAllQuiz()
  }

  const updateCount = async (id, item) => {
    getQuizs.value = await fetchQuizAnswer(id, item)
  }

  onMounted(setQuiz)
  return {
    getQuizs,
    setQuiz,
    updateCount
  }
}
