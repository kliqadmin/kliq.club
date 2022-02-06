import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../constants';

export const TransactionStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.darkBlack,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.darkgray,
    backgroundColor: COLORS.black,
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    // fontWeight: '600',
    color: '#FFF',
    fontSize: 16,
    width:170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#FFF',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  fanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
