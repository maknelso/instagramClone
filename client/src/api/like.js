import { getAPI } from './request';

export const APILike = () => {
  return getAPI('/api/like');
};
