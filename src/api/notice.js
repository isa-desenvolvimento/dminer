const baseURL = 'https://dminer-api.herokuapp.com/api/notice'
import { messagesFetch } from '@/util/toast.js'

export const fetchAllNotice = async () => {
  const response = await fetch(`${baseURL}/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}

export const fetchCreate = async (item) => {
  const response = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
  const json = await response.json()

  return messagesFetch('registration', response.status, json.data)
}
