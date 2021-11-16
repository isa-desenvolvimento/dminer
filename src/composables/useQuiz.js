import { ref, onMounted } from 'vue'
import { fetchAllQuiz, fetchQuizAnswer, fetchCreate } from '@/api/quiz.js'

export default function useQuiz() {
  const getQuizs = ref([])

  const setQuiz = async () => {
    getQuizs.value = await fetchAllQuiz()
  }

  const updateCount = async (id, item) => {
    getQuizs.value = await fetchQuizAnswer(id, item)
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setQuiz)
  return {
    getQuizs,
    setQuiz,
    updateCount,
    create
  }
}
