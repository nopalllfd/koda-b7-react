import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AppRouter from './AppRouter.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './pages/ProductRedux/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from './component/Loading.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={Loading} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
