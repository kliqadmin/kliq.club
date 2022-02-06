import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../constants';

export const DiscoverStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.darkBlack,
  },
  toptitleStyle: {
    ...FONTS.h2,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  toplblStyle: {
    ...FONTS.body3,
    marginTop: 17,
    color: COLORS.white,
    textAlign: 'center',
  },
  totalAmount: {
    marginStart: 10,
    fontSize: 34,
    marginTop: 4,
    fontWeight: '500',
  },
  ethLbl: {
    color: COLORS.textGray,
    marginStart: 10,
    fontWeight: '500'
  },
  currencySym: {
    color: COLORS.white,
    marginStart: 5,
    marginBottom: 5,
    fontSize: 18
  },
  desc: {
    color: COLORS.white,
    marginStart: 15,
    fontSize: 18,
    fontWeight: '600'
  },
  descBtm: {
    color: COLORS.white,
    marginStart: 15,
    marginTop: -22,
    fontSize: 18,
    fontWeight: '600'
  },
  incLbl: {
    color: COLORS.increseColor,
    marginStart: 10,
    marginTop: -18,
    fontSize: 13,
    fontWeight: '600'
  },
  decLbl: {
    color: COLORS.red,
    marginStart: 15,
    marginTop: -22,
    fontSize: 13,
    fontWeight: '600'
  },
  yieldLbl: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600'
  },
  receivedLbl: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600'
  },
  receivedBtn: {
    width: 98,
    height: 29,
    backgroundColor: '#9A9A9A',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  yieldBtn: {
    width: 98,
    height: 29,
    backgroundColor: '#2B2B2B',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottie: {
    color: '#FFF',
  },
});
