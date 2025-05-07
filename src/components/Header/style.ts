import * as Tooltip from '@radix-ui/react-tooltip';
import styled, { keyframes } from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: rgb(0, 151, 252);
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-shadow: 0px 4px 8px 0px rgba(27, 33, 38, 0.15);

  img {
    width: 120px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    margin-right: 36px;
  }
`;

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
   from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  color: var(--violet-11);
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  [data-state='delayed-open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  [data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  [data-state='delayed-open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  [data-state='delayed-open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const AvatarWrapper = styled.button`
  display: flex;
  align-items: center;
  margin-left: 24px;
  box-shadow: none;
  outline: none;
  border: none;
  background-color: transparent;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
  }
`;

export const Greetings = styled.h3``;

export const Title = styled.h4``;

export const Registration = styled.h5``;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: #ffffff;
`;

export const LogoutWrapper = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;


export const LinkButton = styled.button`
  user-select: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  margin-right: 30px;
  gap: 18px;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-right: 0;
  }

  img {
    width: 120px;
  }
`;


export const MenuButton = styled.button`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    margin-left: 20px;

    span {
      i {
        color: #ffffff;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
`;