import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './styles';

const SocialConnectButton = ({
  imgLeft,
  imgMain,
  imgRight,
  isPressed,
  onPressConnect,
  disabled,
}) => {
  return (
    <View>
      <Pressable
        style={styles.baseBtn}
        onPress={onPressConnect}
        disabled={disabled}>
        <View style={styles.btnContainer}>
          <Image source={imgLeft} style={styles.imgLeft} />
          <Image
            source={imgMain}
            style={styles.imgMain}
            resizeMode={'center'}
            width={'50%'}
          />
          {isPressed ? (
            <Image source={imgRight} style={styles.imgRight} />
          ) : (
            <View style={styles.blankSpace} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export {SocialConnectButton};
