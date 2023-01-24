import { getAPI, postAPI } from './request';

export const APIGetCommentById = (postId) => {
  return getAPI(`/api/comment/${postId}`);
};

export const APIPostComment = (body = {}) => {
  return postAPI('/api/comment', body);
};
