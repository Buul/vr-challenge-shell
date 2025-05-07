import { useEffect } from 'react';

import { getProducts } from '@/flux/modules/products/actions';
import { useAppDispatch } from '@/hook/store';

import * as Styled from './Home.styled';

export const HomePresentation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts.request());
  }, []);

  return (
    <Styled.Wrapper>
      <img src="https://d2mg3cttwgz9nw.cloudfront.net/static/media/PGI_Transparent_2.8537b7460e6772d5fd40.png" alt='pgi'/>
    </Styled.Wrapper>
  );
};
