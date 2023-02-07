import {
  getEmpProfileDataApi,
  getUserDataApi,
  updateEmpProfileDataApi,
} from './CallApi';
import {getUserProfile} from './GetProfileSlice';

// export const getUserData = dispatch => {
//   getUserDataApi().then(res => {
//     console.log('Redux Call res', res);
//     dispatch(getUserProfile(res));
//   });
// };

// export const getUserDataApiCall = setUserData => {
//   getUserDataApi().then(res => {
//     setUserData(res);
//   });
// };

export const getEmpProfileDataApiCall = setUserData => {
  getEmpProfileDataApi().then(res => {
    setUserData(res?.profile);
  });
};

// export const updateEmpProfileDataApiCall = data => {
//   console.log('data', data);

//   updateEmpProfileDataApi(data);
// };
