import { FC } from 'react';

import LogoGestora from '@/assets/logo-gestora.svg';

import * as Styles from './style';

const Header: FC = () => (
  <Styles.Wrapper>
    <img src={LogoGestora as unknown as string} alt="logo-gestora" />
  </Styles.Wrapper>
);

export default Header;
