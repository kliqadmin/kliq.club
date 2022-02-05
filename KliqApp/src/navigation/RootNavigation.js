import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabs';
import ConnectWallet from '../screens/ConnectWallet';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'ConnectWallet'}>
      <Stack.Screen name="ConnectWallet" component={ConnectWallet} />

      {/* Tabs */}
      <Stack.Screen name="Home" component={Tabs} />

      {/* <Stack.Screen name="Scan" component={Scan} /> */}
    </Stack.Navigator>
  );
};
