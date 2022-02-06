import React, {Component, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useWalletConnect} from 'react-native-walletconnect';
import {ImageButton} from '../../components/Common/ImageButton';
import {styles} from './styles';

const CreateCoin = ({route, navigation}) => {
  const {createSession, killSession, session, signTransaction} =
    useWalletConnect();

  const hasWallet = !!session.length;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(undefined);
  const [selectedMedia, setSelectedMedia] = useState(undefined);

  const [isModalVisible, setModalVisible] = useState(false);
  const [onlyFanCancel, setonlyFanCancel] = useState(false);
  const [youtubeCancel, setyoutubeCancel] = useState(false);

  const [twitterCancel, settwitterCancel] = useState(false);
  const [instaCancel, setinstaCancel] = useState(false);
  const [proceedSelected, setproceedSelected] = useState(false);

  const [userUID, setuserUID] = useState('https://kliq-fan-page.vercel.app/C43521');
  const [userEmail, setuserEmail] = useState('harievenad@gmail.com');

  console.log('routerouteroute', route.params.account);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // console.log('hasWallet', hasWallet);
    });

    return unsubscribe;
  }, [navigation, hasWallet]);

  const onPressBtn = useCallback(
    (media, index) => {
      const currentIndex = index;
      setCancelButtonStatus(media);
      if (media) {
        setSelectedIndex(index);
        setIsBtnDisabled(false);
        toggleModal(media, undefined);
      }
      if (selectedIndex !== undefined && currentIndex === selectedIndex) {
        setIsBtnDisabled(!isBtnDisabled);
      }
    },
    [isBtnDisabled, selectedIndex, setCancelButtonStatus, toggleModal],
  );

  const setCancelButtonStatus = useCallback(
    (media) => {
      switch (media) {
        case 'onlyfans':
          setonlyFanCancel(!onlyFanCancel);
          setyoutubeCancel(false);
          settwitterCancel(false);
          setinstaCancel(false);
          break;
        case 'youtube':
          setyoutubeCancel(!youtubeCancel);
          setonlyFanCancel(false);
          settwitterCancel(false);
          setinstaCancel(false);
          break;
        case 'twitter':
          settwitterCancel(!twitterCancel);
          setonlyFanCancel(false);
          setyoutubeCancel(false);
          setinstaCancel(false);
          break;
        case 'instagram':
          setinstaCancel(!instaCancel);
          setonlyFanCancel(false);
          setyoutubeCancel(false);
          settwitterCancel(false);
          break;
      }
    },
    [instaCancel, onlyFanCancel, twitterCancel, youtubeCancel],
  );

  const toggleModal = useCallback(
    (media, type) => {
      setModalVisible(!isModalVisible);
      if (type === 'cancel') {
        setIsBtnDisabled(true);
        setCancelButtonStatus(selectedMedia);
        setproceedSelected(false);
      } else {
        setIsBtnDisabled(false);
        setproceedSelected(true);
        setSelectedMedia(media);
      }
    },
    [isModalVisible, selectedMedia, setCancelButtonStatus],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.topTitleView}>
          <Text style={styles.toptitleStyle}>Create your Kliq link</Text>
          <Text style={styles.toplblStyle}>
            Here you will create an unique address to receive or send crypto
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholderTextColor={'#8888'}
              style={styles.inputStyle}
              onChangeText={(text) => {
                console.log(text);
              }}
              onBlur={() => {}}
              onEndEditing={() => {}}
              value={userEmail}
            />
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputTitle}>Your Kliq wallet id</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholderTextColor={'#8888'}
              style={styles.walletinputStyle}
              onChangeText={(text) => {
                console.log(text);
              }}
              onBlur={() => {}}
              onEndEditing={() => {}}
              value={route.params.account ? route.params.account : ''}
            />
          </View>
        </View>
        <View style={styles.idTextInputContainer}>
          <Text style={styles.inputTitle}>Make your unique URL</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholderTextColor={'#8888'}
              style={styles.walletinputStyle}
              onChangeText={(text) => {
                console.log(text);
              }}
              onBlur={() => {}}
              value={userUID}
              onEndEditing={() => {}}
            />
            <Text style={styles.walletinputBtmTitle}>www.kliq.club/</Text>
          </View>
        </View>
        <View style={styles.doneBtnWrapper}>
          <View style={styles.doneBtnContainer}>
            <ImageButton
              title={'done'}
              onPressNext={() => navigation.replace('Home', {account: route.params.account})}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCoin;
