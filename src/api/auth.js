import { messagesFetch } from '@/util/toast.js'

import { apiLogin } from './http'

export const fetchtAuth = async (item) => {
  const response = await apiLogin.post('/api/auth/login', item)
  return messagesFetch('registration', response.status, response.data)
}
