import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useWalletConnect} from 'react-native-walletconnect';

const ConnectWallet = ({navigation}) => {
  const {createSession, killSession, session, signTransaction} =
    useWalletConnect();
  const hasWallet = !!session.length;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('HasssssWaallettt', hasWallet);
    });

    return unsubscribe;
  }, [navigation, hasWallet]);
  return (
    <View style={styles.container}>
      <Text>ConnectWallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConnectWallet;
