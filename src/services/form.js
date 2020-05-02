import axios from 'axios'

const api = axios.create({
  baseURL: "https://psicology-server.herokuapp.com",
  //withCredentials: true
})

export const postFormAnswers = async (answers) => {
  try {
    const response = await api.post('/form', { answers })
    return response
  } catch (error) {
    console.error(error)
  }
}