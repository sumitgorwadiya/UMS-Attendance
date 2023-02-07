import {View, Text, SafeAreaView, Image, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../constants/Images';
import CmnStyles from '../../styles/CmnStyles';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigator/Screens';
import LoginButton from '../../components/Buttons/LoginButton';
import LoginInput from '../../components/Inputs/LoginInput';
import {useState} from 'react';
import Utility from '../../constants/Utility';
import {sendOtpApi} from '../../apiConfig/CallApi';
import Loader from '../../components/Loader/Loader';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [mobileNum, setMobileNum] = useState();

  const loginHandler = () => {
    if (mobileNum?.length !== 10) {
      Utility.showToast('Enter Valid Mobile Number');
    } else {
      setLoading(true);
      const formData = new FormData();
      formData.append('mobileNo', mobileNum);
      formData.append('profile', 'Employee');
      sendOtpApi(formData)
        .then(res => {
          console.log('res', res);
          navigation.replace(Screens.Otp, {mobileNum: mobileNum});

          setLoading(false);
        })
        .catch(err => {
          console.log('err login', err);
          setLoading(false);
        });
    }
  };

  console.log('mobileNum', loading);

  return (
    <SafeAreaView style={CmnStyles.screenBG}>
      <View style={CmnStyles.screenBG}>
        <Loader visible={loading} />
        <View style={CmnStyles.loginTop}>
          <Image source={Images.logo} style={CmnStyles.loginLogo} />
        </View>
        <Text style={CmnStyles.loginTitle}>Upmaniyu Multi Services</Text>
        <LoginInput
          placeholder="Enter Mobile Number"
          value={mobileNum}
          onChangeText={text => setMobileNum(text)}
          maxLength={10}
          numberOfLines={1}
          keyboardType={'number-pad'}
          mobile={true}
          otherStyle={CmnStyles.updateProBox2}
          upperText="Mobile Number"
        />
        <LoginButton
          text={'LOGIN'}
          onPress={() => {
            loginHandler();
            // navigation.replace(Screens.Otp, {mobileNum: mobileNum});
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
