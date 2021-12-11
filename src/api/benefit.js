import { messagesFetch } from '@/util/toast.js'
import { apiIntra } from './http'

const URL = '/benefits'

export const fetchAll = async () => {
  const response = await apiIntra.get(`${URL}/all`)
  return response.status === 200 ? response.data.data : []
}

export const fetchCreate = async (item) => {
  const response = await apiIntra.post(`${URL}`, item)
  return messagesFetch('registration', response.status, response.data.data)
}

export const fetchUpdate = async (item) => {
  const response = await apiIntra.put(`${URL}`, item)
  return messagesFetch('update', response.status, response.data.data)
}

export const fetchDelete = async (id) => {
  const response = await apiIntra.delete(`${URL}/${id}`)
  return messagesFetch('delete', response.status, [])
}

export const fetcSearch = async (keyword) => {
  const response = await apiIntra(`${URL}/search/${keyword}`)
  return response.status === 200 ? response.data.data : []
}