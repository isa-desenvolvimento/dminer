import { messagesFetch } from '@/util/toast.js'
import { apiIntra } from './http'

const URL = '/search'

export const fetchAll = async () => {
  const response = await apiIntra(`${URL}/all`)
  return response.status === 200 ? response.data : []
}
