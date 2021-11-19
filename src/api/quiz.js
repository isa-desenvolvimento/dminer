const baseURL = 'https://dminer-api.herokuapp.com/api/survey'

export const fetchAll = async () => {
  const response = await fetch(`${baseURL}/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}

export const fetchQuizAnswer = async (id, option, idUser = 4) => {
  const response = await fetch(`${baseURL}/answer/${id}/${idUser}/${option}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.status === 200
}

export const fetchCreate = async (doc) => {
  const response = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(doc)
  })
  const json = await response.json()

  return messagesFetch('registration', response.status, json.data)
}
