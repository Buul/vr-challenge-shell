import { useEffect } from 'react';

import { getProducts } from '@/flux/modules/products/actions';
import { useAppDispatch } from '@/hook/store';

import * as Styled from './Home.styled';

export const HomePresentation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts.request());
  }, []);

  return <Styled.Wrapper>home</Styled.Wrapper>;
};
