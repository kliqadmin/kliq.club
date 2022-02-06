import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../constants';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.darkBlack,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitleView: {
    marginTop: 50,
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
  lblStyle: {
    ...FONTS.regular,
    color: COLORS.white,
  },
  gradientLbl: {
    ...FONTS.baseBold,
    fontSize: 28,
  },
  btnView: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  btnContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnI: {
    marginLeft: 5,
    marginTop: 103,
  },
  btnII: {
    marginLeft: 5,
    marginTop: 10,
  },
  madein: {
    width: '100%',
    height: 57,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 110,
    marginBottom: 30,
    backgroundColor: COLORS.btnBG,
  },
  madeinLbl: {
    marginStart: -70,
    color: COLORS.textGray,
  },
  madeinImg: {
    marginStart: -70,
  },
  bottomLbl: {
    textAlign: 'center',
    padding: 12,
    color: COLORS.textGray,
  },
  modelWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
  },
  modalLogoImg: {
    tintColor: COLORS.black,
  },
  modelLblTop: {
    textAlign: 'left',
    padding: 12,
    color: COLORS.black,
  },
  modelLblToptitle: {
    textAlign: 'left',
    marginLeft: -55,
    marginTop: 20,
    fontWeight: 'bold',
    // paddingHorizontal: 20,
    color: COLORS.black,
  },
});
