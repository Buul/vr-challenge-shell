import styled, { css } from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const SideMenuContainer = styled.aside<{
  open?: boolean;
  isError?: boolean;
}>`
  position: fixed;
  flex: 1;
  width: 85px;
  z-index: 19;
  row-gap: 16px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  outline: none;
  padding-top: 24px;
  transition: width 0.01s ease-in-out;
  height: calc(100vh - 90px);

  @media (max-width: ${breakpoints.lg}) {
    padding: 24px 0;
    pointer-events: auto;
    visibility: visible;
    width: 85px;
  }

  ${({ open }) =>
    open &&
    css`
      width: 332px;
      padding: 24px 0;
      align-items: initial;
      visibility: visible;
      pointer-events: auto;
    `}

  ${({ open }) =>
    !open &&
    css`
      padding: 21px 0;
    `}

  ${({ isError }) =>
    isError &&
    css`
      background-color: #f5f5f5;
      outline-color: #f5f5f5;
    `}
`;

export const ExpandButton = styled.button`
  box-shadow: 0px 2px 4px 0px #1b21261a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  transition-duration: 0.4s;
  right: -16px;
  position: absolute;
  z-index: 20;
  top: 24px;
`;

export const ToggleButton = styled.button<{ open?: boolean }>`
  position: absolute;
  right: -16px;
  width: 32px;
  top: 21px;
  height: 32px;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 1px 6px 0px #1b212626;
  cursor: pointer;
  background-color: #ffffff;
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const SideMenuHeader = styled.div<{ open?: boolean }>`
  display: flex;
  row-gap: 16px;
  flex-direction: column;

  ${({ open }) =>
    open &&
    css`
      padding: 0 8px 0 16px;
    `}
`;

export const SideMenuBody = styled.div<{ open?: boolean }>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-right: 4px solid transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #a0aab4;
  }

  ${({ open }) =>
    open &&
    css`
      border-width: 8px;

      &::-webkit-scrollbar {
        width: 8px;
      }
    `}
`;

export const SideMenuBodyScrollCorrection = styled.div`
  margin-right: -10px;
`;

export const LogoutItem = styled.div<{ open?: boolean }>`
  margin-block: 24px;
  padding-inline: 19px;
  width: fit-content;
  margin-inline: auto;

  ${({ open }) =>
    open &&
    css`
      width: 100%;
      margin-block: 8px;
      padding-inline: 24px;
    `}

  @media (max-width: ${breakpoints.lg}) {
    display: none;
    visibility: hidden;
  }
`;

export const LogoutButton = styled.button<{ open?: boolean }>`
  gap: 16px;
  padding: 8px;
  border: none;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  @media (max-width: ${breakpoints.sm}) {
    background-color: white;
  }

  ${({ open }) =>
    open &&
    css`
      justify-content: start;
    `}
`;

export const UserSection = styled.div`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: block;
  }
`;

export const SideMenuLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 100%;
`;
