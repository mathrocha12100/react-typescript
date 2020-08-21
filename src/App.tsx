import React from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList';
import GlobalStyle from './styles/globalStyles';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <RepositoryList />
  </Provider>
);

export default App;
