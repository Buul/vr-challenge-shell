import styled, { css } from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

import { ButtonProps } from './Button.types';

const variantStyles = (variant = 'primary') =>
  ({
    primary: css`
      background-color: rgb(0, 151, 252);
      color: ${({ theme }) => theme.colors.white};

      &:not(#NOTHOVER) {
        &:not([disabled]):hover {
          background: black;
          border: 1px solid black;

          svg {
            path {
              stroke: black;
            }
          }
        }
      }
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.colors.white};
      color: black;
      border: 1px solid black;

      &:not(#NOTHOVER) {
        &:not([disabled]):hover {
          background: ${({ theme }) => theme.colors.border};
          border: 1px solid ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `,
    link: css`
      font-weight: ${({ theme }) => theme.fontWeight.base};
      background-color: transparent;
      color: rgb(0, 151, 252);
      border: none;
      padding: 0;

      &:not(#NOTHOVER) {
        &:not([disabled]):hover {
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
      }

      &:disabled {
        background-color: transparent;
      }
    `,
  })[variant];

const sizeLabelVariants = (sizevariant = 'md') =>
  ({
    sm: css`
      height: 36px;
      line-height: 0;
    `,
    md: css`
      height: 48px;
    `,
  })[sizevariant];

export const Button = styled.button<ButtonProps>`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.md};

  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.text.dark};
    cursor: not-allowed;
    border: none;
  }

  ${({ variant }) => variantStyles(variant)}
  ${({ sizevariant }) => sizeLabelVariants(sizevariant || 'md')}

  @media (max-width: ${breakpoints.sm}) {
    ${() => sizeLabelVariants('sm')}
  }
`;
