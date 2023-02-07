import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import Responsive from '../constants/Responsive';

const SpStyle = StyleSheet.create({
  flex1: {flex: 1},
  hw100: {width: Responsive.widthPx(100), height: Responsive.heightPx(100)},
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  shadowLight: {
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SpStyle;
