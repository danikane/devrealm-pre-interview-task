import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './components/Loading';
import RootComponent from './navigation';
import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
}

