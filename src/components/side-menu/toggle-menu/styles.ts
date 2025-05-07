import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const MenuIconButton = styled.button`
  border: none;
  display: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
  }
`;

export const ToggleMenuWrapper = styled.button`
  gap: 24px;
  border: none;
  display: flex;
  padding: 0 8px;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
`;
