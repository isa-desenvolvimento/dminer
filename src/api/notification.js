const baseUrl = 'https://dminer-api.herokuapp.com/api/notification'

export const fetchAllNotification = async () => {
  const response = await fetch(`${baseUrl}/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}
