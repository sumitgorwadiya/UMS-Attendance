import Toast from 'react-native-root-toast';
import Responsive from './Responsive';

const deepClone = val => {
  return JSON.parse(JSON.stringify(val));
};

const showToast = message => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.CENTER,
    // position: Responsive.heightPx(40),
    shadow: true,
    animation: true,
    hideOnPress: true,
    textColor: '#fff',
    backgroundColor: 'black',
  });
};

const isValid = (value, isEmail = false) => {
  if (isEmail) {
    const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    return !value.trim() || !reg.test(value.trim());
  }
  return value === null || value === undefined || !value.trim();
};

const Utility = {
  deepClone,
  isValid,
  showToast,
};

export default Utility;
