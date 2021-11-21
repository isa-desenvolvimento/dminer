const baseURL = 'https://www.dminerweb.com.br:8553'
import { messagesFetch } from '@/util/toast.js'

export const fetchtAuth = async (item) => {
  const response = await fetch(`${baseURL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
  const json = await response.json()

  return messagesFetch('registration', response.status, json.data)
}
