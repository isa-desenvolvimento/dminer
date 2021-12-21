import { messagesFetch } from '@/util/toast.js'
import { apiIntra } from './http'

const URL = 'post'
export const fetchAll = async () => {
  const response = await apiIntra(`${URL}/all`)
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

export const fetchCreateComment = async (item) => {
  const response = await apiIntra.post(`${URL}`, item)
  return messagesFetch('update', response.status, response.data.data)
}

export const fetchPost = async (id) => {
  const response = await apiIntra(`${URL}/${id}`)
  return response.status === 200 ? response.data.data : []
}

export const fetchAllPost = async () => {
  const response = await apiIntra(`${URL}`)
  return response.status === 200 ? response.data.data : []
}

export const fetchSearch = async (id, date, user) => {
  const response = await apiIntra(`${URL}/search/${id}?date=${date}&user=${user}`)
  return response.status === 200 ? response.data.data : []
}

export const fetchSearchAll = async (date, user) => {
  const response = await apiIntra(`${URL}/search/all?date=${date}&user=${user}`)
  return response.status === 200 ? response.data.data : []
}
