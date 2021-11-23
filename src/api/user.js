import { messagesFetch } from '@/util/toast.js'

import { apiIntra } from './http'

const URL = '/user'

export const fetchAllUser = async () => {
  const response = await apiIntra(`${URL}/all`)
  return response.status === 200 ? response.data.data : []
}

export const fetchUser = async (id) => {
  const response = await apiIntra(`${URL}/${id}`)
  return response.status === 200 ? response.data.data : []
}

export const fetchUsersBirthday = async () => {
  const response = await apiIntra(`${URL}/birthdays`)

  return response.status === 200 ? response.data.data : []
}

export const fetchUpdate = async (user) => {
  const response = await apiIntra.put(`${URL}`, user)
  return messagesFetch('update', response.status, response.data.data)
}

export const fetchCreateUser = async (user) => {
  const response = await apiIntra.post(`${URL}`, user)
  return messagesFetch('registration', response.status, response.data.data)
}
