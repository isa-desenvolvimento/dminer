const baseURL = 'https://dminer-api.herokuapp.com/api/search'

export const fetchAllSearch = async (text) => {
  const response = await fetch(`${baseURL}-all`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(text)
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}
