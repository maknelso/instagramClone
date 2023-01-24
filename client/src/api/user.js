import { getAPI, postAPI } from './request';

export const APIProtect = () => {
  return getAPI('/api/protect');
};

export const APIProtectPost = (body = {}) => {
  return postAPI('/api/protect', body);
};

export const APILogin = (body = {}) => {
  return postAPI('/api/login', body);
};

export const APIGetAllUsers = (body = {}) => {
  return getAPI('/api/login');
};

export const APIRegister = (body = {}) => {
  return postAPI('/api/register', body);
};

export const APIGetUserName = (userName) => {
  return getAPI(`/api/instagram/${userName}`);
};
