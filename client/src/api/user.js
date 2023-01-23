import { getAPI, postAPI } from './request';

export const APIProtect = () => {
  return getAPI('/api/protect');
};

export const APILogin = (body = {}) => {
  return postAPI('/api/login', body);
};
