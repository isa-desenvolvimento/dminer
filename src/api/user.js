const baseUrl = 'https://dminer-api.herkuapp.com/user'

export const fetchUser = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json.status === 200 ? json.data : []
}

export const fetchUpdateUser = async () => {
  const response = await fetch(`${baseUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json.status === 200 ? json.data : []
}
