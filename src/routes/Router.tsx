import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainTemplate } from '@/components/Templates/MainTemplate';
import { HomePresentation } from '@/presentation';

const Router: FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <MainTemplate>
          <HomePresentation />
        </MainTemplate>
      }
    />
    <Route
      path="/contratos"
      element={
        <MainTemplate>
          <HomePresentation />
        </MainTemplate>
      }
    />
  </Routes>
);

export default Router;
