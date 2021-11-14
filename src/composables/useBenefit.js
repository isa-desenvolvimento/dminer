import { ref, onMounted } from 'vue'
import { fetchAllBenefits, fetchCreate } from '@/api/benefit.js'

export default function useBenefit() {
  const getBenefits = ref([])

  const setBenefit = async () => {
    getBenefits.value = await fetchAllBenefits()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  onMounted(setBenefit)
  return {
    getBenefits,
    setBenefit,
    create
  }
}
