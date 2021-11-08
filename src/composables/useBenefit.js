import { ref, onMounted } from 'vue'
import { fetchAllBenefits } from '@/api/benefit.js'

export default function useBenefit() {
  const getBenefits = ref([])

  const setBenefit = async () => {
    getBenefits.value = await fetchAllBenefits()
  }

  onMounted(setBenefit)
  return {
    getBenefits,
    setBenefit
  }
}
