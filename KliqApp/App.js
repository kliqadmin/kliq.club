import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/RootNavigation';
import WalletConnectProvider from 'react-native-walletconnect';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <WalletConnectProvider>
        <RootNavigation />
      </WalletConnectProvider>
    </NavigationContainer>
  );
};

export default App;
