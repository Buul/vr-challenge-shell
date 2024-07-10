import { Product } from '@/flux/modules/products/types';

export const PRODUCTS = 'PRODUCTS';

export const getStoreProducts = () => localStorage.getItem(PRODUCTS);

export const setProducts = (products: Product[]) =>
  localStorage.setItem(PRODUCTS, JSON.stringify(products));

export const deleteProducts = () => localStorage.removeItem(PRODUCTS);
