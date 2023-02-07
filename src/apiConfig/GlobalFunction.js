import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './apiConfig';
import {Variables} from './Variable';

export const setAccessToken = async payload => {
  console.log('payload', payload);
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + payload;
  await saveData(Variables.accessToken, payload);
};

export const saveData = async (key, data) => {
  await AsyncStorage.setItem(key, data);
};
