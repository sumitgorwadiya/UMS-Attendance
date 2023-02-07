import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserToken = async userToken => {
  await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
};

const getUserToken = async setUserToken => {
  await AsyncStorage.getItem('userToken')
    .then(JSON.parse)
    .then(value => {
      if (value) {
        setUserToken(value);
      }
    });
};

export default Storage = {
  setUserToken,
  getUserToken,
};
