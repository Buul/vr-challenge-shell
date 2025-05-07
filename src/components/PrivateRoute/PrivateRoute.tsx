import { FC, ReactElement } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '@/presentation/Login/service';


type Props = {
  children: ReactElement | null;
} & RouteProps;

export const PrivateRoute: FC<Props> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate replace to="/" />;
  }

  return children;
};
