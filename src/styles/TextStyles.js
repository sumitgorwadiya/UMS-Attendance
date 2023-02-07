import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import FontStyles from './FontStyles';

const TextStyles = StyleSheet.create({
  black16_Reg: {
    fontSize: 16,
    ...FontStyles.nSans_Reg,
    color: Colors.black,
  },
  black15_SemiBold: {
    fontSize: 15,
    ...FontStyles.nSans_SemiBold,
    color: Colors.black,
  },
  black12_SemiBold: {
    fontSize: 12,
    ...FontStyles.nSans_SemiBold,
    color: Colors.black,
  },
  black_21_SemiBold: {
    fontSize: 16,
    ...FontStyles.nSans_SemiBold,
    color: Colors.black,
  },
  white_28_700: {
    fontSize: 28,
    ...FontStyles.nSans_Bold,
    color: Colors.white,
  },
  white_21_700: {
    fontSize: 21,
    ...FontStyles.nSans_Bold,
    color: Colors.white,
    lineHeight: 24,
  },
  white_19_700: {
    fontSize: 19,
    ...FontStyles.nSans_Bold,
    color: Colors.white,
  },
  white_16_700: {
    fontSize: 16,
    ...FontStyles.nSans_Bold,
    color: Colors.white,
  },
  white_16_400: {
    fontSize: 16,
    ...FontStyles.nSans_Reg,
    color: Colors.white,
  },
  white_14_400: {
    fontSize: 14,
    ...FontStyles.nSans_Reg,
    color: Colors.white,
  },
  white_9_400: {
    fontSize: 9,
    ...FontStyles.nSans_Reg,
    color: Colors.white,
  },
  Orange_9_400: {
    fontSize: 9,
    ...FontStyles.nSans_SemiBold,
    color: Colors.bgColorText,
  },
  Orange_12_600: {
    fontSize: 12,
    ...FontStyles.nSans_SemiBold,
    color: Colors.bgColorText,
  },
  Orange_15_600: {
    fontSize: 15,
    ...FontStyles.nSans_SemiBold,
    color: Colors.bgColorText,
  },
  orange_18_700: {
    fontSize: 20,
    ...FontStyles.nSans_Bold,
    color: Colors.bgColor,
  },
  white_24_600: {
    fontSize: 24,
    ...FontStyles.nSans_SemiBold,
    color: Colors.white,
  },
});

export default TextStyles;
