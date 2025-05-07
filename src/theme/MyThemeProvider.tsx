import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeDefault } from './ThemeDefault';
import { GlobalStyle } from '.';

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
