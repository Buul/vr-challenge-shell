import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/flux/store';

import MyThemeProvider from './theme/MyThemeProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </Provider>
);
