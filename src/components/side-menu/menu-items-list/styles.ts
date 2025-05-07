import styled, { css } from 'styled-components';

export const MenuItemsListWrapper = styled.div<{ open?: boolean }>`
  gap: 8px;
  width: 100%;
  margin-top: 16px;
  display: flex;
  padding-inline: 19px;
  align-items: center;
  flex-direction: column;

  ${({ open }) =>
    open &&
    css`
      align-items: start;

      & > div {
        padding-left: 0;
        margin-left: 0;
      }
    `}

  ${({ open }) =>
    open === false &&
    css`
      gap: 16px;
      width: 60px;
      margin-inline: 12px;
      padding-inline: 0;
      & > p {
        font-size: 8px !important;
        padding-left: 4px;
        width: 100px;
      }
      & > div {
        padding-left: 0;
      }
    `}
`;

export const MenuItemsListContent = styled.div<{ open?: boolean }>`
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ open }) =>
    open &&
    css`
      gap: 8px;
    `}
`;
