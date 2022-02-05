/* eslint-disable no-undef */
// Importing
import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants';

// Exporting
const {width} = Dimensions.get('window');
export default ImageButtonStyles = StyleSheet.create({
  view: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  image: {
    width: width - 30,
    height: 45,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    zIndex: 99,
    color: COLORS.white,
    fontSize: 18,
    textAlign: 'center',
  },
});
