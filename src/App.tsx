import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Route from './routes';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Route />
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  </Provider>
);

export default App;
