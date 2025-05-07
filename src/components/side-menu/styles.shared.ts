import styled, { css } from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

const hover = css`
  & p {
    color: #0046c0;
  }
  & img {
    & img {
      filter: brightness(0) saturate(100%) invert(18%) sepia(93%)
        saturate(2352%) hue-rotate(207deg) brightness(97%) contrast(105%);
    }
  }
  & svg {
    fill: #0046c0;
    stroke: #0046c0;
  }
`;

export const VisibilityWrapper = styled.div<{ display?: 'block' | 'flex' }>`
  display: none;

  ${({ display }) =>
    display === 'block' &&
    css`
      @media (max-width: ${breakpoints.sm}) {
        display: block;
      }
    `}

  ${({ display }) =>
    display === 'flex' &&
    css`
      @media (max-width: ${breakpoints.sm}) {
        display: flex;
      }
    `}
`;

export const IconButton = styled.button<{ active?: boolean }>`
  background-color: transparent;
  padding: 0;
  width: 60px;
  border: none;
  font-size: 0;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  ${({ active }) =>
    active &&
    css`
      background-color: #b3e4fd;
    `}

  &:hover {
    ${hover}
  }
`;
