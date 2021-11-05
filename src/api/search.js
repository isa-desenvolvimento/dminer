const baseURL = 'https://dminer-api.herokuapp.com/api/search'

export const fetchAllSearch = async (text) => {
  const response = await fetch(`${baseURL}/${text}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}
