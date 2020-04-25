import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000",
  //withCredentials: true
})

export const postFormAnswers = async (answers) => {
  try {
      const response = await api.post('/form', answers )
      console.log(response.data)
      return response.data
  } catch (error) {
      console.error(error)
  }
}