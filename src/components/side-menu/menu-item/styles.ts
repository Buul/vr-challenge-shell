import styled, { css } from 'styled-components';

export const MenuLink = styled.button<{
  active?: boolean;
  shortMode?: boolean;
}>`
  padding: 8px;
  display: flex;
  border: none;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  justify-content: space-between;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: #b3e4fd;
    `}

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

    &:hover {
    & p {
      color: #0046c0;
    }
    & img {
      filter: brightness(0) saturate(100%) invert(18%) sepia(93%)
        saturate(2352%) hue-rotate(207deg) brightness(97%) contrast(105%);
    }
    & svg {
      fill: #0046c0;
    }
  }
`;

export const MenuLinkHeader = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

export const MenuLinkBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  & p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
  }
`;
