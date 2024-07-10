import styled from 'styled-components';
import { breakpoints } from 'vr-challenge-ds';

export const Wrapper = styled.div``;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${breakpoints.xl}) {
    justify-content: center;
  }
`;
