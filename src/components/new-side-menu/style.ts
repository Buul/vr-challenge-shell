import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const StyledSideMenuWrapper = styled.div<{ open?: boolean }>`
  display: none;
  border-right: 1px solid #c0c6c9;
  width: 332px;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 20;

  ${({ open }) =>
    open &&
    `
    width: 80px;
  `}

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
  }
`;
