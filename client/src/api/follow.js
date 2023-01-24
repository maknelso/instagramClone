import { getAPI, postAPI } from './request';

export const APIUpdateFollow = () => {
  return getAPI('/api/update-follow');
};

export const APIUpdateFollowPost = (body = {}) => {
  return postAPI('/api/update-follow', body);
};
