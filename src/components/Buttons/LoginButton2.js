import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CmnStyles from '../../styles/CmnStyles';

const LoginButton2 = ({text, onPress, otherStyle}) => {
  return (
    <TouchableOpacity
      style={[CmnStyles.loginButtonBox, otherStyle]}
      onPress={onPress}>
      <Text style={CmnStyles.loginButtonText2}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton2;
