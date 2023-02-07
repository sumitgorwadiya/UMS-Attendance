import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CmnStyles from '../../styles/CmnStyles';

const LoginButton = ({text, onPress, otherStyle}) => {
  return (
    <TouchableOpacity
      style={[CmnStyles.loginButtonBox, otherStyle]}
      onPress={onPress}>
      <Text style={CmnStyles.loginButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
