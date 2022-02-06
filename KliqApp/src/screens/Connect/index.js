import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Pressable, Image, Button} from 'react-native';
import {useWalletConnect} from 'react-native-walletconnect';
import { useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import {ImageButton} from '../../components/Common/ImageButton';
import {SocialConnectButton} from '../../components/Connect/Button';
import {images} from '../../constants';

import {styles} from './styles';
import { GetAccountData } from './redux/actions';


const ConnectWallet = ({navigation}) => {
  const dispatch = useDispatch();
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

  const [userAccountData, setuserAccountData] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('HasssssWaallettt', hasWallet);
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
        const data = {}
        dispatch(GetAccountData({
          data,
          onSuccess: res => setuserAccountData(res),
          onError: err => console.log(err),
        }));
      }
    },
    [isModalVisible, selectedMedia, setCancelButtonStatus],
  );

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
            imgLeft={!onlyFanCancel ? images.plus : images.cancel}
            imgMain={images.onlyfans}
            imgRight={images.plus}
            isPressed={true}
            disabled={selectedMedia !== '' ? false : true}
            onPressConnect={() => onPressBtn('onlyfans', 0)}
          />
        </View>
        <View style={styles.btnII}>
          <SocialConnectButton
            imgLeft={!youtubeCancel ? images.plus : images.cancel}
            imgMain={images.youtube}
            imgRight={images.plus}
            disabled={selectedMedia !== '' ? false : true}
            onPressConnect={() => onPressBtn('youtube', 1)}
          />
        </View>
        <View style={styles.btnII}>
          <SocialConnectButton
            imgLeft={!twitterCancel ? images.plus : images.cancel}
            imgMain={images.twitter}
            imgRight={images.plus}
            disabled={selectedMedia !== '' ? false : true}
            onPressConnect={() => onPressBtn('twitter', 2)}
          />
        </View>
        <View style={styles.btnII}>
          <SocialConnectButton
            imgLeft={!instaCancel ? images.plus : images.cancel}
            imgMain={images.insta}
            imgRight={images.plus}
            disabled={selectedMedia !== '' ? false : true}
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
          <ImageButton
            isDisabled={isBtnDisabled}
            title={'next'}
            onPressNext={() => {
              setIsBtnDisabled(true);
              setonlyFanCancel(false);
              setyoutubeCancel(false);
              settwitterCancel(false);
              setinstaCancel(false);
              if (userAccountData && userAccountData.wallet) {
                const WalletFF = '0x559443063737ED53dE5Fc8dC03752A99d607d7F7';
                navigation.navigate('CreateCoin', {account: WalletFF});
              }
            }}
          />
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modelWrapper}>
          <View style={styles.modelContainer}>
            <Image
              source={images.insta}
              style={styles.modalLogoImg}
              resizeMode={'center'}
              width={'50%'}
            />
            <Text style={styles.modelLblTop}>
              Hi Harie Venad , Kliq-club is requesting to do the following
            </Text>
            <Text style={styles.modelLblToptitle}>
              Access your Profile & Media
            </Text>
            <Text style={styles.modelLblTop}>
              User name and account type. Caption, Media counts, Media type,
              Media URL, PermaLinks, Time stamp, Thumbnail.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Button
                title="Cancel"
                onPress={() => toggleModal(undefined, 'cancel')}
              />
              <Button
                title="Proceed"
                onPress={() => toggleModal(undefined, 'proceed')}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConnectWallet;
