import { get } from '@/apis';

export const getAll = () =>
  get({
    url: '/products',
  });
