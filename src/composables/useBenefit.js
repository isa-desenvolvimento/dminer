import { ref, onMounted } from 'vue'
import { fetchAll } from '@/api/benefit.js'

export default function useBenefit() {
  const getBenefits = ref([])

  const setBenefit = async () => {
    getBenefits.value = await fetchAll()
  }

  onMounted(setBenefit)
  return {
    getBenefits,
    setBenefit
  }
}
