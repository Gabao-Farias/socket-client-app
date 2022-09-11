import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { MainProvider } from './contexts';
import { Routes } from './routes';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <MainProvider>
        <Routes />
      </MainProvider>
    </Provider>
  );
};

export default App;
