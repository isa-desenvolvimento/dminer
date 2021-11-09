const baseURL = 'https://dminer-api.herokuapp.com/api/survey'

export const fetchAllQuiz = async () => {
  const response = await fetch(`${baseURL}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}

export const fetchQuizAnswer = async (id, option, idUser = 1) => {
  const response = await fetch(`${baseURL}/answer/${id}/${idUser}/${option}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return response.status === 200 ? json.data : []
}
