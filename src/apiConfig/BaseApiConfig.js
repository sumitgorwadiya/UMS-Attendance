import Utility from '../constants/Utility';
import axiosInstance from './apiConfig';

// export const baseApiCall = config => {
//   return new Promise((resolve, reject) => {
//     axiosInstance(config)
//       .then(response => {
//         if (response?.status === 200) {
//           resolve(response?.data);
//           console.log('response', response);
//         }
//       })
//       .catch(e => {
//         console.log('reject All Error', e);
//         if (e?.response && e?.response?.data) {
//           console.log('Base Api Response Error ======> ', e?.response?.data);
//           reject(e?.response?.data);
//         } else {
//           reject(e);
//         }
//       });
//   });
// };

export const baseApiCall = config => {
  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then(response => {
        if (response?.status === 200) {
          resolve(response?.data);
          console.log('response', response?.data);
        }
      })
      .catch(e => {
        console.log('reject All Error', e);
        if (e?.response && e?.response?.data) {
          console.log('Base Api Response Error ======> ', e?.response?.data);
          e?.response?.data.error && Utility.showToast(e?.response?.data.error);
          reject(e?.response);
        } else {
          reject(e);
        }
        // if (e?.response && e?.response?.data) {
        //   reject(e?.response?.data);
        // } else {
        //   reject(e);
        // }
        // if (
        //   e &&
        //   e.response?.data?.detail ===
        //     "Authentication credentials were not provided."
        // ) {
        //   return;
        // }
      });
  });
};
