import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  height: 100%;
  min-height: calc(100vh - 220px);
  justify-content: center;
  display: flex;
  width: 100%;
  img {
    height:  300px;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${breakpoints.xl}) {
    justify-content: center;
  }
`;
