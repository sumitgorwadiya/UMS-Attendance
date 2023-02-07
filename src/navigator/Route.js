import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/OtherScreens/SplashScreen';
import {MainStackScreen} from './MainStack';
import {AuthStackScreen} from './AuthStack';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '../constants/Storage';
import {axiosInstance} from '../apiConfig/apiConfig';
import {setAccessToken} from '../apiConfig/GlobalFunction';

export default function Routes() {
  const [token, setToken] = useState('');

  const [splashVisible, setSplashVisible] = useState(true);

  setTimeout(() => {
    setSplashVisible(false);
  }, 3000);

  useEffect(() => {
    Storage.getUserToken(setToken);
    // ApplyToken();
  }, []);

  useEffect(() => {
    token && setAccessToken(token);
  }, [token]);

  console.log('token', token);

  // const ApplyToken = () => {
  //   axiosInstance.interceptors.request.use(
  //     config => {
  //       console.log('axios response config =>', token);
  //       config.headers = {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: 'Bearer ' + token,
  //       };
  //       return config;
  //     },
  //     error => {
  //       console.log('axios response error =>', error.response || error);
  //       return Promise.reject(error);
  //     },
  //   );
  // };

  return (
    <>
      <NavigationContainer>
        {splashVisible ? (
          <SplashScreen />
        ) : token ? (
          <MainStackScreen />
        ) : (
          <AuthStackScreen />
        )}
      </NavigationContainer>
    </>
  );
}
