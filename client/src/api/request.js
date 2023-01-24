import axios from 'axios';

export const postAPI = (url, body = {}, headers = {}) => {
  const token = sessionStorage.getItem('token');
  const baseHeader = {
    Authorization: 'Bearer ' + token,
  };
  return axios.post(url, body, { headers: baseHeader });
};

export const getAPI = (url) => {
  const token = sessionStorage.getItem('token');
  const baseHeader = {
    Authorization: 'Bearer ' + token,
  };
  return axios.get(url, {
    headers: baseHeader,
  });
};
