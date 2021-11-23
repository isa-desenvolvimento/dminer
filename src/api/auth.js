import { messagesFetch } from '@/util/toast.js'

import { apiLogin } from './http'

export const fetchtAuth = async (item) => {
  const response = await apiLogin.post('/api/auth/login', {
    userName: 'matheus.ribeiro1',
    userPassword: '#Matheus97',
    type: 'painel'
  })
  return messagesFetch('registration', response.status, response.data.data)
}
