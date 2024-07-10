import { ProductsPayload } from '@/flux/modules/products/types';
import { useSelector } from '@/flux/selector';
import { RootState } from '@/flux/store';
import { IRequest } from '@/models/iRequest';

export const useProducts = (): IRequest<ProductsPayload> =>
  useSelector((state: RootState) => state.products.productsData);
