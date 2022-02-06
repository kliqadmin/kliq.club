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
  textInputContainer: {
    width: '100%',
    marginTop: 70,
    marginLeft: 20,
  },
  inputTitle: {
    color: COLORS.white,
    fontSize: 18,
  },
  inputWrapper: {
    width: '91%',
    height: 40,
    marginHorizontal: 10,
    marginTop: 8,
    marginLeft: 5,
  },
  inputStyle: {
    paddingLeft: 15,
    height: '100%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.inputBorder,
    color: '#fff',
  },
  walletinputStyle: {
    paddingLeft: 15,
    height: '100%',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#2B2B2B',
    borderColor: COLORS.inputBorder,
    color: '#fff',
  },
  idTextInputContainer: {
    width: '100%',
    marginTop: 30,
    marginLeft: 20,
  },
  walletinputBtmTitle: {
    color: COLORS.white,
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  doneBtnWrapper: {
    bottom: -130,
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  doneBtnContainer: {
    marginTop: 10,
  },
});
