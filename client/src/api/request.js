import axios from 'axios';

const REACT_APP_BASEURL_PRO = process.env.REACT_APP_BASEURL_PRO;

export const postAPI = (url, body = {}) => {
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
