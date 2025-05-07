import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  width: calc(100% - 332px);
  height: calc(100vh - 90px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  [data-testid='banner-slide-container'] {
    img {
      max-width: 99%;
    }
  }
  [data-testid='banner-slider-container'] {
    padding: 40px 39px 0 39px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Container = styled.div`
  display: flex;
`;
