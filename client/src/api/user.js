import { getAPI, postAPI } from './request';

export const APIProtect = () => {
  return getAPI('/api/protect');
};

export const APILogin = (body = {}) => {
  return postAPI('/api/login', body);
};

export const APIRegister = (body = {}) => {
  return postAPI('/api/register', body);
};

export const APIUpdateFollow = () => {
  return getAPI('/api/update-follow');
};

export const APIGetUserName = (userName) => {
  return getAPI(`/api/instagram/${userName}`);
};
