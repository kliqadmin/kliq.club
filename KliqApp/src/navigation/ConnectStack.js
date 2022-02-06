import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ConnectWallet from '../screens/Connect';
import CreateCoin from '../screens/CreateCoin';

const Stack = createStackNavigator();

export const ConnectStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      initialRouteName={'ConnectWallet'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ConnectWallet"
        component={ConnectWallet}
      />

      {/* Tabs */}
      <Stack.Screen
        options={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerBackTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
        name="CreateCoin"
        component={CreateCoin}
      />

      {/* <Stack.Screen name="Scan" component={Scan} /> */}
    </Stack.Navigator>
  );
};
