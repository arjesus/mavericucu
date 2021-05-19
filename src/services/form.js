import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://eva-minerva.herokuapp.com'
  baseURL: '80.224.164.12:3000'
  //withCredentials: true
});

export const postFormAnswers = async answers => {
  try {
    const response = await api.post('/form', answers);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postSortFormAnswers = async answers => {
  try {
    const response = await api.post('/form/sort', answers);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postFormAnswersProfessionals = async answers => {
  try {
    const response = await api.post('/form/professional', answers);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
