import React, {Component, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {useWalletConnect} from 'react-native-walletconnect';
import GradientText from '../../components/Common/GrText';
import {ImageButton} from '../../components/Common/ImageButton';
import {SocialConnectButton} from '../../components/Connect/Button';
import {FONTS, images} from '../../constants';
import {styles} from './styles';

const ConnectWallet = ({navigation}) => {
  const {createSession, killSession, session, signTransaction} =
    useWalletConnect();
  const hasWallet = !!session.length;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(undefined);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('HasssssWaallettt', hasWallet);
    });

    return unsubscribe;
  }, [navigation, hasWallet]);

  const onPressBtn = (media, index) => {
    const currentIndex = index;
    if (media) {
      setSelectedIndex(index);
      setIsBtnDisabled(false);
    }
    if (selectedIndex !== undefined && currentIndex === selectedIndex) {
      setIsBtnDisabled(!isBtnDisabled);
    }
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.topTitleView}>
          <Text style={styles.toptitleStyle}>Connect your channels</Text>
          <Text style={styles.toplblStyle}>
            Connect your social media accounts which you are better infulenzed
            on
          </Text>
        </View>
        <View style={styles.btnI}>
          <SocialConnectButton
            imgLeft={selectedIndex === 0 ? images.plus : images.cancel}
            imgMain={images.onlyfans}
            imgRight={images.plus}
            isPressed={true}
            onPressConnect={() => onPressBtn('onlyans', 0)}
          />
        </View>
        <View style={styles.btnII}>
          <SocialConnectButton
            imgLeft={images.plus}
            imgMain={images.youtube}
            imgRight={images.plus}
            onPressConnect={() => onPressBtn('youtube', 1)}
          />
        </View>
        <View style={styles.btnII}>
          <SocialConnectButton
            imgLeft={images.plus}
            imgMain={images.twitter}
            imgRight={images.plus}
            onPressConnect={() => onPressBtn('twitter', 2)}
          />
        </View>
        <View style={styles.btnII}>
          <SocialConnectButton
            imgLeft={images.plus}
            imgMain={images.insta}
            imgRight={images.plus}
            onPressConnect={() => onPressBtn('instagram', 3)}
          />
        </View>
        <View style={styles.madein}>
          <Image
            source={images.madein}
            style={styles.madeinImg}
            resizeMode={'center'}
            width={'50%'}
          />
          <Text style={styles.madeinLbl}>MADE IN INDIA</Text>
        </View>
        <View>
          <Text style={styles.bottomLbl}>
            Add atleast 1 CHANNEL to continue to the next step
          </Text>
          <ImageButton isDisabled={isBtnDisabled} title={'next'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConnectWallet;
