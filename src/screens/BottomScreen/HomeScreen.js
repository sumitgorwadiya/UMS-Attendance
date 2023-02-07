import {View, Text, SafeAreaView, BackHandler, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import MyHeader from '../../components/Headers/MyHeader';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigator/Screens';
import TextStyles from '../../styles/TextStyles';
import {Colors} from '../../constants/Colors';
import LoginButton from '../../components/Buttons/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(60);
      }
    }, 500);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      <MyHeader
        text={'UMS Attendance'}
        onPress={() => {
          navigation.navigate(Screens.Other, {
            screen: Screens.Profile,
          });
        }}
      />
      <View style={CmnStyles.screenBG2}>
        <View
          style={{
            width: 150,
            height: 150,
            borderWidth: 2,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.white,
            alignSelf: 'center',
            marginTop: 150,
          }}>
          <Text style={TextStyles.white_28_700}>
            00:{seconds > 9 ? seconds : `0${seconds}`}
          </Text>
        </View>
        <LoginButton
          text={'LOGOUT'}
          otherStyle={{marginTop: 70, width: 200}}
          onPress={() => {
            navigation.replace(Screens.Login);
            AsyncStorage.clear();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
