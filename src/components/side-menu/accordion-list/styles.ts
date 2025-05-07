import styled, { css } from 'styled-components';

export const MenuWrapper = styled.div<{ open?: boolean; shortMode?: boolean }>`
  gap: 16px;
  width: 60px;
  display: flex;
  overflow: auto;
  margin-inline: 12px;
  flex-direction: column;

  ${({ open }) =>
    open &&
    css`
      width: auto;
      padding-inline: 16px;
      margin-inline: unset;
      margin-right: -16px;
    `}

  ${({ shortMode }) =>
    shortMode &&
    css`
      visibility: hidden;
    `}

  ${({ shortMode }) =>
    shortMode === false &&
    css`
      visibility: visible;
    `}
`;

export const MenuDefaultWrapper = styled.div<{ shortMode?: boolean }>`
  ${({ shortMode }) =>
    shortMode &&
    css`
      visibility: hidden;
      height: 0;
      position: absolute;
    `}

  ${({ shortMode }) =>
    shortMode === false &&
    css`
      visibility: visible;
      height: auto;
    `}
`;
