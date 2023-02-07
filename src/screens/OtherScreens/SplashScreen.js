import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {SlideInRight} from 'react-native-reanimated';
import {Images} from '../../constants/Images';
import CmnStyles from '../../styles/CmnStyles';
import {MotiView} from 'moti';

const SplashScreen = () => {
  const [splash, SetSplash] = useState(false);

  setTimeout(() => {
    SetSplash(true);
    console.log('splash', splash);
  }, 2000);

  return (
    <View style={CmnStyles.SplashBG}>
      <View style={CmnStyles.splashTop}>
        <MotiView
          from={{
            translateY: 20,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'timing',
            duration: 1500,
          }}>
          <Image
            source={Images.logo}
            style={CmnStyles.splashImage}
            resizeMode="contain"
          />
        </MotiView>
      </View>
      {/* {splash ? ( */}
      <Animated.View
        entering={SlideInRight.duration(2000)}
        style={CmnStyles.splashTextBox}>
        <Text style={CmnStyles.splashText}>UMS Attendance</Text>
      </Animated.View>
      {/* ) : (
      <View style={CmnStyles.splashTextBox} />
      )} */}
    </View>
  );
};

export default SplashScreen;
