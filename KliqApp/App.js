import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {RootNavigation} from './src/navigation/RootNavigation';
import WalletConnectProvider from 'react-native-walletconnect';
import {store} from './src/redux/store/configureStore';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer theme={theme}>
      <WalletConnectProvider>
        <RootNavigation />
      </WalletConnectProvider>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
