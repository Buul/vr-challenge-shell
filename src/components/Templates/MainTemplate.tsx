import { FC, ReactNode } from 'react';

import { MenusProvider } from '@/hook/menus-provider';

import Header from '../Header';
import NewSideMenu from '../new-side-menu';

import * as Styled from './MainTemplate.styled';

export const MainTemplate: FC<{ children: ReactNode }> = ({ children }) => (
  <Styled.Wrapper>
    <Header />
    <Styled.Container>
      <MenusProvider>
        <NewSideMenu />
      </MenusProvider>
      <Styled.Content>
        <Styled.Main>{children}</Styled.Main>
      </Styled.Content>
    </Styled.Container>
  </Styled.Wrapper>
);
