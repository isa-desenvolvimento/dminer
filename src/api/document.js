const baseURL = 'https://dminer-api.herokuapp.com/api/document'

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
