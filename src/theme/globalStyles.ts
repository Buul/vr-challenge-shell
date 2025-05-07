import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './Theme.types';

export default createGlobalStyle<{ theme: ThemeType }>`

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-weight: ${({ theme }) => theme.fontWeight.base};
  }
  html {
    font-size: 62.5%;
    height: 100%;
    -ms-overflow-style: scrollbar;
  }
  body {
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
  }
  b,
  input ,
  select {
    appearance: none;
  }
  ul {
    list-style: none;
  }
  #app, #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  a {
    text-decoration: none;
  }


  #icon-wrapper {
    div{
      display: flex;
    }
  }
`;
