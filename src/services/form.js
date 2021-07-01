import axios from 'axios';

const api = axios.create({
  baseURL: 'https://eva-minerva.herokuapp.com'
  // baseURL: 'http://localhost:3000'
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

export const wakeup = async () => {
  try {
    const response = await api.get('/');
    console.log(response.data);
  } catch (error) {
    console.error('sleeping');
  }
};

export const checkOut = async configuration => {
  try {
    const response = await api.post('/code', configuration);
    return response.data;
  } catch (error) {
    console.error('sleeping');
  }
};
