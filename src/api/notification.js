import { messagesFetch } from '@/util/toast.js'
import { apiIntra } from './http'

const URL = '/notification'

export const fetchAll = async () => {
  const response = await apiIntra(`${URL}/all`)
  return response.status === 200 ? response.data : []
}

export const fetchCreate = async (item) => {
  const response = await fetch(`${URL}`, item)
  return messagesFetch('registration', response.status, response.data)
}

export const fetchUpdate = async (item) => {
  const response = await fetch(`${URL}`, item)
  return messagesFetch('update', response.status, response.data)
}
