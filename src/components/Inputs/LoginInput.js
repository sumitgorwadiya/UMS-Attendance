import {MotiView} from 'moti';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import CmnStyles from '../../styles/CmnStyles';
import TextStyles from '../../styles/TextStyles';

const LoginInput = ({
  onChangeText,
  value,
  placeholder,
  maxLength,
  numberOfLines,
  keyboardType,
  mobile,
  otherStyle,
  otherTextStyle,
  upperText,
  passwordInput,
  passwordEmpty,
  secureTextEntry,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  passwordEmpty && passwordVisible && setPasswordVisible(false);

  return (
    <View style={[CmnStyles.loginInputBox, otherStyle]}>
      {mobile && <Text style={CmnStyles.loginCode}>+91</Text>}
      {value?.length > 0 && (
        <MotiView
          style={{
            position: 'absolute',
            top: -5,
            left: 10,
            backgroundColor: Colors.white,
            borderRadius: 4,
            paddingHorizontal: 3,
          }}>
          <Text style={TextStyles.Orange_9_400}>{upperText}</Text>
        </MotiView>
      )}
      <TextInput
        // editable
        // multiline
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value && value}
        placeholder={placeholder}
        style={[CmnStyles.loginInput, otherTextStyle]}
        placeholderTextColor={Colors.gray}
        secureTextEntry={
          passwordEmpty ? true : passwordVisible ? false : secureTextEntry
        }
        keyboardType={keyboardType}
      />
      {passwordInput && (
        <View style={{position: 'absolute', right: 10}}>
          {passwordEmpty ? (
            <></>
          ) : passwordVisible ? (
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible(false);
              }}>
              <Image
                source={Images.passwordVisibleHidden}
                style={CmnStyles.smallLogo}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible(true);
              }}>
              <Image
                source={Images.passwordVisible}
                style={CmnStyles.smallLogo}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default LoginInput;
