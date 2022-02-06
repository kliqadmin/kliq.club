import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Discover from '../screens/Discover';
import Transactions from '../screens/Transactions';

const Stack = createStackNavigator();

export const DiscoverStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      initialRouteName={'Discover'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Discover"
        component={Discover}
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
        name="Transactions"
        component={Transactions}
      />

      {/* <Stack.Screen name="Scan" component={Scan} /> */}
    </Stack.Navigator>
  );
};
