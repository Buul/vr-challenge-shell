/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, ReactNode } from 'react';
/* @ts-ignore */
import Footer from 'footer/Footer';
/* @ts-ignore */
import Header from 'header/Header';

import * as Styled from './MainTemplate.styled';

export const MainTemplate: FC<{ children: ReactNode }> = ({ children }) => (
  <Styled.Wrapper>
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Footer />
  </Styled.Wrapper>
);
