const baseURL = 'https://dminer-api.herokuapp.com/api/user'
import { onToast } from '@/util/toast.js'
import * as translation from '@/util/pt_BR.json'

export const fetchAllUser = async () => {
  const response = await fetch(`${baseURL}/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}

export const fetchUser = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) {
    onToast(translation.MESSAGE.SUCCESS_SEARCH, 'success', 'success')
    return json.data
  } else {
    onToast(translation.MESSAGE.ERROR_SEARCH, 'danger')
    return []
  }
}

export const fetchUsersBirthday = async () => {
  const response = await fetch(`${baseURL}/birthdays`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) {
    onToast(translation.MESSAGE.SUCCESS_SEARCH, 'success')
    return json.data
  } else {
    onToast(translation.MESSAGE.ERROR_SEARCH, 'danger')
    return []
  }
}

export const fetchUpdateUser = async () => {
  const response = await fetch(`${baseURL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) {
    onToast(translation.MESSAGE.SUCCESS_UPDATE, 'success')
    return json.data
  } else {
    onToast(translation.MESSAGE.ERROR_UPDATE, 'danger')
    return []
  }
}

export const fetchCreateUser = async (user) => {
  const response = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const json = await response.json()

  if (response.status === 200) {
    onToast(translation.MESSAGE.SUCCESS_REGISTRATION, 'success')
    return json.data
  } else {
    onToast(translation.MESSAGE.ERROR_REGISTRATION, 'danger')
    return []
  }
}
