import * as AvatarPrimitive from '@radix-ui/react-avatar';
import styled, { css } from 'styled-components';

import { AvatarStyledProps } from './Avatar.types';

const sizeRootVariants = (sizevariant = 'md') =>
  ({
    sm: css`
      width: 40px;
      height: 40px;
    `,
    md: css`
      width: 40px;
      height: 40px;
      font-size: ${props => props.theme.fontSize.intermediary};
    `,
    lg: css`
      width: 60px;
      height: 60px;
      font-size: ${props => props.theme.fontSize.lg};
    `,
  })[sizevariant];

export const AvatarRoot = styled(AvatarPrimitive.Root)<AvatarStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;

  border-radius: 100%;
  background-color: ${props => props.theme.colors.disabled};
  ${({ sizevariant }) => sizeRootVariants(sizevariant || 'md')}
`;

export const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #B6B6B7;
  color:  #ffffff;
  font-weight: bold;
`;

export const AvatarWrapper = styled.div`
  display: flex;
`;
