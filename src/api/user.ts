import request from '@/utils/request';
export const login = (data) =>
  request({
    url: '/user/login',
    method: 'POST',
    data,
    loading: true
  });
