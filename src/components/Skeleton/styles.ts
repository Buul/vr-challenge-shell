import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'vr-challenge-ds';

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 82vh;
  border-radius: ${props => props.theme.radius.md};
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
  padding: ${props => props.theme.spacing.md};
  width: 100%;
`;

const placeHolderShimmer = keyframes`
  0% {
    background-position: -468px 0
  }

  100% {
    background-position: 468px 0
  }
  
`;

export const Placeholder = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-color: ${props => props.theme.colors.text};
  background-size: 800px 104px;
  border-radius: ${props => props.theme.radius.sm};
  height: 20px;
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;
  width: 100%;

  &.card {
    height: 410px;
    width: 396px;
    margin-bottom: 0;

    @media (max-width: ${breakpoints.md}) {
      width: 350px;
      padding: 16px;
    }
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${breakpoints.xl}) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
`;

export const ResumeWrapper = styled.div`
  display: none;
  height: 82vh;
  border-radius: ${props => props.theme.radius.md};
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
  padding: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.base};
  height: 250px;
  width: 490px;
  margin-left: ${props => props.theme.spacing.md};
`;
