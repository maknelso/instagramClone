import { getAPI, postAPI } from './request';

export const APIGenerateFeed = (body = {}) => {
  return postAPI('/api/generate-post', body);
};

export const APISendFeed = (variable) => {
  return getAPI('/api/upload-s3-url?filename=' + variable);
};
