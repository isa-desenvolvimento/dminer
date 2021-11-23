import { messagesFetch } from '@/util/toast.js'

import { apiIntra } from './http'

const URL = '/user'

export const fetchAllUser = async () => {
  const response = await apiIntra(`${baseURL}/all`)
  return response.status === 200 ? response.data : []
}

export const fetchUser = async (id) => {
  const response = await apiIntra(`${baseURL}/${id}`)
  return response.status === 200 ? response.data : []
}

export const fetchUsersBirthday = async () => {
  const response = await apiIntra(`${baseURL}/birthdays`)

  return response.status === 200 ? response.data : []
}

export const fetchUpdate = async (user) => {
  const response = await apiIntra.put(`${baseURL}`, user)
  return messagesFetch('update', response.status, response.data)
}

export const fetchCreateUser = async (user) => {
  const response = await apiIntra.post(`${baseURL}`, user)
  return messagesFetch('registration', response.status, response.data)
}
