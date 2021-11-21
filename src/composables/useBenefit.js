import { ref, onMounted } from 'vue'
import { fetchAllBenefits, fetchCreate, fetchUpdate } from '@/api/benefit.js'

export default function useBenefit() {
  const getBenefits = ref([])

  const setBenefit = async () => {
    getBenefits.value = await fetchAllBenefits()
  }

  const create = async (item) => {
    return await fetchCreate(item)
  }

  const update = async (item) => {
    return await fetchUpdate(item)
  }

  onMounted(setBenefit)
  return {
    getBenefits,
    setBenefit,
    create,
    update
  }
}
