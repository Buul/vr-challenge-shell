import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/components/PrivateRoute/PrivateRoute';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { HomePresentation } from '@/presentation';
import { LoginPresentation } from '@/presentation/Login/Login';
import { isAuthenticated } from '@/presentation/Login/service';

const Router: FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        (isAuthenticated() && (
          <PrivateRoute>
            <MainTemplate>
              <HomePresentation />
            </MainTemplate>
          </PrivateRoute>
        )) || <LoginPresentation />
      }
    />
    <Route
      path="/home"
      element={
        <PrivateRoute>
          <MainTemplate>
            <HomePresentation />
          </MainTemplate>
        </PrivateRoute>
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
    <Route
      path="/recuperar-senha"
      element={
        <MainTemplate>
          <HomePresentation />
        </MainTemplate>
      }
    />
  </Routes>
);

export default Router;
