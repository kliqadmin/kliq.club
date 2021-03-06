import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabs';
import ConnectWallet from '../screens/Connect';
import {ConnectStack} from './ConnectStack';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'ConnectWallet'}>
      <Stack.Screen name="ConnectWallet" component={ConnectStack} />

      {/* Tabs */}
      <Stack.Screen name="Home" component={Tabs} />

      {/* <Stack.Screen name="Scan" component={Scan} /> */}
    </Stack.Navigator>
  );
};
