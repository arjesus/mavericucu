import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000",
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