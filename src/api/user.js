const baseURL = 'https://dminer-api.herokuapp.com/api/user'

export const fetchUser = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json.status === 200 ? json.data : []
}

export const fetchUsersBirthday = async () => {
  const response = await fetch(`${baseURL}/birthdays`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json.status === 200 ? json.data : []
}

export const fetchUpdateUser = async () => {
  const response = await fetch(`${baseURL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json.status === 200 ? json.data : []
}
