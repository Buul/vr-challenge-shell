import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
import Cards from 'cards/Cards';
import { Toast, toast } from 'vr-challenge-ds';

import { SkeletonCards } from '@/components/Skeleton';
import { getProducts } from '@/flux/modules/products/actions';
import { Product } from '@/flux/modules/products/types';
import { useProducts } from '@/hook/selectors/productsHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';
import { getStoreProducts, setProducts } from '@/services/products';

import * as Styled from './Home.styled';

export const HomePresentation = () => {
  const dispatch = useAppDispatch();
  const { data: productsData, status } = useProducts();

  useEffect(() => {
    dispatch(getProducts.request());
  }, []);

  const handleClickBuy = (product: Product) => {
    const storeProduct = getStoreProducts();
    let newProductList: Product[] = [];
    if (storeProduct) {
      newProductList = JSON.parse(storeProduct) as Product[];
    }
    newProductList.push(product);
    setProducts(newProductList);
    toast('Produto adicionado ao carrinho');
  };

  return (
    <Styled.Wrapper>
      {status === RequestStatus.fetching && (
        <Styled.SkeletonWrapper>
          <SkeletonCards />
        </Styled.SkeletonWrapper>
      )}
      {productsData?.products && (
        <Cards
          products={productsData?.products}
          status={status}
          onClickBuy={handleClickBuy}
        />
      )}
      <Toast variant="success" id="success" />
    </Styled.Wrapper>
  );
};
