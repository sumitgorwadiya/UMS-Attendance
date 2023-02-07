import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import OtpInputPart from '../../components/OtpInputPart';
import CmnStyles from '../../styles/CmnStyles';
import {Images} from '../../constants/Images';
import TextStyles from '../../styles/TextStyles';
import LoginButton from '../../components/Buttons/LoginButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Screens} from '../../navigator/Screens';
import Animated, {SlideInDown} from 'react-native-reanimated';
import {verifyOtpApi} from '../../apiConfig/CallApi';
import Utility from '../../constants/Utility';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '../../constants/Storage';
import Responsive from '../../constants/Responsive';
import {setAccessToken} from '../../apiConfig/GlobalFunction';
import LoginInput from '../../components/Inputs/LoginInput';
import Loader from '../../components/Loader/Loader';

const OtpScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [otpCode, setOtpCode] = useState();
  const [seconds, setSeconds] = useState(30);

  const mobileNum = route?.params?.mobileNum;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 500);
    return () => {
      clearInterval(myInterval);
    };
  });

  const verifyOtpHandler = () => {
    if (otpCode.length !== 6) {
      Utility.showToast('OTP Code must be 6 digit Code');
    } else {
      verifyOtp();
    }
  };

  useEffect(() => {
    otpCode?.length == 6 && verifyOtp();
  }, [otpCode]);

  const verifyOtp = () => {
    // const data = {mobileNo: mobileNum, password: otpCode};
    setLoading(true);
    const formData = new FormData();

    formData.append('mobileNo', mobileNum);
    formData.append('password', otpCode);

    verifyOtpApi(formData)
      .then(res => {
        console.log('res', res);
        AsyncStorage.setItem('AccessToken', JSON.stringify(res?.token));
        Storage.setUserToken(res?.token);
        setAccessToken(res?.token);
        setTimeout(() => {}, 1000);
        // navigation.replace(Screens.Bottom, {
        //   screen: Screens.Home,
        // });
        setTimeout(() => {
          res?.message === 'Login Succesfully! Redirect to Profile Update.'
            ? navigation.replace(Screens.Other, {
                screen: Screens.UpdateProfile,
                params: {isLogin: true},
              })
            : navigation.replace(Screens.Bottom, {screen: Screens.Home});
          setLoading(false);
        }, 1500);
        setOtpCode();
      })
      .catch(err => {
        console.log('err OtpScreen', err);
        setLoading(false);
      });
  };

  const headerPart = () => {
    return (
      <View style={CmnStyles.otpBackImgCont}>
        <TouchableOpacity onPress={() => navigation.navigate(Screens.Login)}>
          <Image
            source={Images.back}
            style={CmnStyles.otpBackImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const buttonPart = () => {
    return (
      <>
        <View style={CmnStyles.OtpResendBox}>
          {seconds === 0 ? (
            <Text
              style={TextStyles.white_16_700}
              onPress={() => {
                // sendOTP();
                setSeconds(30);
              }}>
              Resend OTP
            </Text>
          ) : (
            <Text style={TextStyles.white_16_400}>
              00:{seconds > 9 ? seconds : `0${seconds}`}
            </Text>
          )}
        </View>
        <LoginButton
          text="Verify OTP"
          otherStyle={CmnStyles.OtpButton}
          onPress={() => {
            verifyOtpHandler();
            // setAccessToken(
            //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhcmphbmluZnJhLmNvLmluLyIsImF1ZCI6IkFwcF91c2VyIiwic3ViIjoiQXV0aF90b2tlbiIsImlhdCI6MTY3NDc1MjIwOSwiZXhwIjoxNzA2Mjg4MjA5LCJ1c2VyX2lkIjoiMTkiLCJ1c2VybmFtZSI6Ijc2MDA5Nzk1ODQiLCJwcm9maWxlX2lkIjoiMTMiLCJlbWFpbCI6Ijc2MDA5Nzk1ODQifQ.rZYnRfYGguX2Nj86Tuhh-AroLudPjL9PW8QakoOcM4Q',
            // );
            // Storage.setUserToken(
            //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhcmphbmluZnJhLmNvLmluLyIsImF1ZCI6IkFwcF91c2VyIiwic3ViIjoiQXV0aF90b2tlbiIsImlhdCI6MTY3NDc1MjIwOSwiZXhwIjoxNzA2Mjg4MjA5LCJ1c2VyX2lkIjoiMTkiLCJ1c2VybmFtZSI6Ijc2MDA5Nzk1ODQiLCJwcm9maWxlX2lkIjoiMTMiLCJlbWFpbCI6Ijc2MDA5Nzk1ODQifQ.rZYnRfYGguX2Nj86Tuhh-AroLudPjL9PW8QakoOcM4Q',
            // );
          }}
        />
      </>
    );
  };

  console.log('otpCode', otpCode);

  return (
    <View
      style={
        Platform.OS === 'ios'
          ? [CmnStyles.screenBG, {paddingTop: Responsive.widthPx(10)}]
          : CmnStyles.screenBG
      }>
      <SafeAreaView style={CmnStyles.screenBG}>
        <Loader visible={loading} />
        <Animated.View
          style={CmnStyles.screenBG}
          entering={SlideInDown.duration(800)}>
          {headerPart()}
          <View style={CmnStyles.otpScreenCont}>
            <Image
              source={Images.smartphone}
              style={CmnStyles.otpIMG}
              resizeMode="contain"
            />
            <Text style={CmnStyles.otpTitle}>Verify OTP</Text>
            <Text style={CmnStyles.otpText}>
              Please Enter Verification code sent to your phone number
            </Text>
            {/* <OtpInputPart setOtpCode={setOtpCode} /> */}
            <LoginInput
              placeholder="Enter OTP / Password"
              value={otpCode}
              onChangeText={text => setOtpCode(text)}
              // maxLength={6}
              numberOfLines={1}
              // keyboardType={'number-pad'}
              upperText="OTP"
              otherTextStyle={{textAlign: 'center'}}
              passwordInput={true}
              passwordEmpty={!otpCode ? true : false}
              secureTextEntry={true}
            />
            {buttonPart()}
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

export default OtpScreen;
