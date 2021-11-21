const baseURL = 'https://dminer-api.herokuapp.com/api/document'
import { messagesFetch } from '@/util/toast.js'

export const fetchAllDocuments = async () => {
  const response = await fetch(`${baseURL}/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}

export const fetchCreate = async (doc) => {
  const response = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(doc)
  })
  const json = await response.json()

  return messagesFetch('registration', response.status, json.data)
}

export const fetchUpdate = async (user) => {
  const response = await fetch(`${baseURL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const json = await response.json()

  return messagesFetch('update', response.status, json.data)
}
