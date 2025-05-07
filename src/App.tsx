import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '@/routes/Router';

import './app.css';

const App: FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
