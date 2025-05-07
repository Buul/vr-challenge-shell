import styled from 'styled-components';

import LogoGestora from '@/assets/logo-gestora.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10rem 0;
  background-color: rgb(20, 21, 26);
  background-image: url('/background/bg-login.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;

  background-size: cover;
  background-position: 100%;
`;

export const Logo = styled.img.attrs({ src: LogoGestora })`
  width: 150px;
  margin-bottom: 24px;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
