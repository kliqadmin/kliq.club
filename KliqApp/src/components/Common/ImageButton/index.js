import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {images} from '../../../constants';
import styles from './styles';

const ImageButton = ({title, isDisabled, onPressNext}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.touchable}
        disabled={isDisabled}
        onPress={onPressNext}>
        <Image
          source={images.btnBg}
          style={[
            styles.image,
            isDisabled && {tintColor: 'rgba(45, 21, 66, 0.3)'},
          ]}
        />
        <View style={styles.view}>
          <Text style={[styles.text, isDisabled && {color: '#616161'}]}>
            {title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {ImageButton};
