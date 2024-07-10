/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, ThemeDefault } from 'vr-challenge-ds';

// import GlobalStyles from '../styles/globalStyles';

// import theme from './ThemeDefault';

type Props = {
  children: ReactNode;
};

const MyThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={ThemeDefault}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default MyThemeProvider;
