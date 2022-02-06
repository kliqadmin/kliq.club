/* eslint-disable no-undef */
// Importing
import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants';

// Exporting
export default SocialConnectBtnStyles = StyleSheet.create({
  baseBtn: {
    backgroundColor: COLORS.btnBG,
    width: '90%',
    height: 50,
    borderRadius: 4,
  },
  btnContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imgLeft: {
    marginLeft: 20,
    width: 20,
    height: 20,
  },
  imgRight: {
    marginRight: 20,
    width: 20,
    height: 20,
  },
  imgMain: {
    marginLeft: 25,
  },
  blankSpace: {
    width: 20,
    height: 20,
  },
});
