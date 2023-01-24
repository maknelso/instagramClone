import axios from 'axios';

export const postAPI = (url, body = {}, headers = {}) => {
  const token = sessionStorage.getItem('token');
  const baseHeader = {
    Authorization: 'Bearer ' + token,
  };
  // return axios.post(process.env.REACT_APP_BASEURL + url, {
  return axios.post(
    url,
    body
    // headers: headers,
  );
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
