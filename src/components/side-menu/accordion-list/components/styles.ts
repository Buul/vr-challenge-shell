import styled, { css } from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

const hover = css`
  & p {
    color: #0046c0;
  }
  & img {
    filter: brightness(0) saturate(100%) invert(18%) sepia(93%) saturate(2352%)
      hue-rotate(207deg) brightness(97%) contrast(105%);
  }
  & svg {
    fill: #0046c0;
  }
`;

export const AccordionItemWrapper = styled.div<{
  activeSub?: boolean;
  shortMode?: boolean;
}>`
  ${({ activeSub }) =>
    activeSub &&
    css`
      & .szh-accordion__item-heading {
        & .szh-accordion__item-btn {
          &[aria-expanded='false'] {
            background-color: rgb(51, 178, 253);
        }
      }
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
`;

export const AccordionWrapper = styled.div<{ active?: boolean }>`
  gap: 8px;
  display: flex;
  padding-bottom: 16px;
  flex-direction: column;
  border-bottom: 1px solid;
  border-color: #dce6f0;

  ${({ active }) =>
    active &&
    css`
      & .szh-accordion__item-btn {
        background-color: #b3e4fd;
      }
    `}

  & .szh-accordion {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }

  & .szh-accordion__item-btn {
    cursor: pointer;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-radius: 8px;
    border: none;

    &:hover {
      ${hover}
    }
  }

  & .szh-accordion__item-content {
    padding-top: 16px;
  }
`;

export const AccordionHeaderContent = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

export const AccordionIcon = styled.div`
  min-width: 24px;
  line-height: 0;
  align-self: center;
`;

export const AccordionBody = styled.div`
  gap: 4px;
  display: flex;
  padding-left: 20px;
  margin-left: 20px;
  flex-direction: column;
  border-left: 1px solid;
  border-color: #dce6f0;
`;

export const AccordionTitleStyledLink = styled.a<{ active?: boolean }>`
  padding: 8px;
  border-radius: 8px;
  display: flex;
  gap: 16px;

  ${({ active }) =>
    active &&
    css`
      background-color: #b3e4fd;
    `}

  * {
    cursor: pointer;
  }

  &:hover {
    ${hover}
  }
`;

export const AccordionSectionTitle = styled.div<{ open?: boolean }>`
  margin-bottom: 8px;

  ${({ open }) =>
    open === false &&
    css`
      text-align: center;

      * {
        font-size: 8px !important;
      }
    `}

  ${({ open }) =>
    open &&
    css`
      padding-left: 8px;
    `}
`;

export const ClosedMenuSection = styled.div`
  display: flex;
  padding-bottom: 16px;
  flex-direction: column;
  border-bottom: 1px solid;
  border-color: #dce6f0;
`;

export const ClosedItemContent = styled.div`
  gap: 16px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  height: 100%;
`;

export const ManageWrapper = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const ManageHeaderTitle = styled.div`
  height: 38px;
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: center;

  & small {
    width: 216px;
    overflow: hidden;
    text-wrap: nowrap;
    display: inline-block;
    text-overflow: ellipsis;

    @media (max-width: ${breakpoints.md}) {
      width: 164px;
    }
  }
`;
