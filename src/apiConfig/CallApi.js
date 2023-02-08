import {baseApiCall} from './BaseApiConfig';
import {
  GET_EMP_PROFILE,
  GET_PINCODE_AREA_LIST,
  GET_PINCODE_LIST,
  GET_USER_DATA,
  SEND_OTP,
  SOFT_PROP,
  UPDATE_EMP_PROFILE,
  VERIFY_OTP,
} from './EndPoint';

const getFormData = object => {
  const formData = new FormData();
  object &&
    Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
};

export const sendOtpApi = data => {
  console.log('data', data);
  return baseApiCall({
    url: SEND_OTP,
    method: 'post',
    data,
  });
};

export const verifyOtpApi = data => {
  return baseApiCall({
    url: VERIFY_OTP,
    method: 'post',
    data,
  });
};

export const getUserDataApi = () => {
  return baseApiCall({
    url: GET_USER_DATA,
    method: 'get',
  });
};

export const getEmpProfileDataApi = () => {
  return baseApiCall({
    url: GET_EMP_PROFILE,
    method: 'post',
  });
};

export const getPinCodeListApi = () => {
  return baseApiCall({
    url: GET_PINCODE_LIST,
    method: 'post',
  });
};

export const getPinCodeListAreaApi = data => {
  return baseApiCall({
    url: GET_PINCODE_AREA_LIST,
    method: 'post',
    data,
  });
};

export const updateEmpProfileDataApi = data => {
  console.log('data', data);
  return baseApiCall({
    url: UPDATE_EMP_PROFILE,
    method: 'post',
    data,
  });
};

export const getMaritalStatusListApi = () => {
  const data = {prop_key: 'marital_status'};
  return baseApiCall({
    url: SOFT_PROP,
    method: 'post',
    data,
  });
};

export const getGenderListApi = () => {
  const data = {prop_key: 'gender'};
  return baseApiCall({
    url: SOFT_PROP,
    method: 'post',
    data,
  });
};
