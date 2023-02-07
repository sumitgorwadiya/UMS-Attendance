import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import ImageInput from '../../components/Inputs/ImageInput';
import {useState} from 'react';
import LoginInput from '../../components/Inputs/LoginInput';
import DropDown from '../../components/Dropdown/DropDown';
import TextStyles from '../../styles/TextStyles';
import UploadFile from '../../components/Inputs/UploadFile';
import {Images} from '../../constants/Images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Screens} from '../../navigator/Screens';
import onCameraPressHandler from '../../components/CameraActivity/onCameraPressHandler';
import requestCameraPermission from '../../components/CameraActivity/CameraPermission';
import _ from 'lodash';
import Utility from '../../constants/Utility';
import {
  getEmpProfileDataApi,
  getGenderListApi,
  getMaritalStatusListApi,
  getPinCodeListApi,
  getPinCodeListAreaApi,
  updateEmpProfileDataApi,
} from '../../apiConfig/CallApi';
import Loader from '../../components/Loader/Loader';
import DropDownPinCode from '../../components/Dropdown/DropDownPinCode';
import DropDownPinCodeArea from '../../components/Dropdown/DropDownPinCodeArea';
import LoginButton2 from '../../components/Buttons/LoginButton2';
import {Colors} from '../../constants/Colors';
import {IMAGE_BASE_URL} from '../../apiConfig/EndPoint';
import DateInput from '../../components/Inputs/DateInput';
import ImageInput2 from '../../components/Inputs/ImageInput2';

const genderData = ['MALE', 'FEMALE', 'OTHER'];
const maritalStatusData = ['MARRIED', 'UNMARRIED'];

const UpdateProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [address, setAddress] = useState();
  const [emergencyMobileNo, setEmergencyMobileNo] = useState();
  const [addressPincode, setAddressPincode] = useState();
  const [addressPincodeArea, setAddressPincodeArea] = useState();
  const [panNumber, setPanNumber] = useState();
  const [getMobileNo, setGetMobileNo] = useState();
  const [aadharNumber, setAadharNumber] = useState();
  const [ifscNumber, setIfscNumber] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [panCard, setPanCard] = useState();
  const [getPanCard, setGetPanCard] = useState();
  const [aadharCard, setAadharCard] = useState();
  const [getAadharCard, setGetAadharCard] = useState();
  const [bankDetail, setBankDetail] = useState();
  const [getBankDetail, setGetBankDetail] = useState();
  const [uanUpload, setUanUpload] = useState();
  const [getUanUpload, setGetUanUpload] = useState();
  const [esicUpload, setEsicUpload] = useState();
  const [getEsicUpload, setGetEsicUpload] = useState();
  const [profileImage, setProfileImage] = useState();
  const [getProfileImage, setGetProfileImage] = useState();
  const [activityIndicator, setActivityIndicator] = useState(false);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [employeeData, setEmployeeData] = useState();
  const [pinCodeList, setPinCodeList] = useState();
  const [pinCodeAreaList, setPinCodeAreaList] = useState();
  const [maritalStatusList, setMaritalStatusList] = useState();
  const [genderList, setGenderList] = useState();
  const [addressPinCodeObject, setAddressPinCodeObject] = useState();

  const isLogin = route?.params?.isLogin;

  console.log('addressPincode', addressPincode);

  useEffect(() => {
    apiCallHandler();
  }, []);

  console.log('mobileNo', mobileNo);

  const apiCallHandler = () => {
    setLoading(true);
    getEmpProfileDataApi()
      .then(response => {
        console.log('responce', response?.result?.profile);
        const res = response?.result?.profile;
        console.log('res?.Pincode', res?.photo_path);
        setName(res?.name);
        setEmail(res?.emailid);
        setMobileNo(res?.mobile_no);
        setGetMobileNo(res?.mobile_no);
        setGender(res?.gender);
        setBirthDate(res?.birth_date);
        setMaritalStatus(res?.marital_status);
        setAddressPincode(res?.Pincode);
        setAddressPincodeArea(res?.pincode_area);
        setAddress(res?.address);
        setEmergencyMobileNo(res?.emergency_contact_no);
        setPanNumber(res?.pan);
        setAadharNumber(res?.aadhaar);
        setIfscNumber(res?.ifsc);
        setAccountNumber(res?.ac_no);
        setProfileImage(res?.photo_path);
        res?.pan_path.length !== 0 &&
          setGetPanCard(IMAGE_BASE_URL + res?.pan_path);
        res?.aadhaar_path.length !== 0 &&
          setGetAadharCard(IMAGE_BASE_URL + res?.aadhaar_path);
        res?.bank_detail_path.length !== 0 &&
          setGetBankDetail(IMAGE_BASE_URL + res?.bank_detail_path);
        res?.esic_path.length !== 0 &&
          setGetEsicUpload(IMAGE_BASE_URL + res?.esic_path);
        res?.uan_path.length !== 0 &&
          setGetUanUpload(IMAGE_BASE_URL + res?.uan_path);
        setLoading(false);
      })
      .catch(err => {
        console.log('err  ===>', err);
        setLoading(false);
      });
    getPinCodeListApi().then(res =>
      console.log('res======>', setPinCodeList(res?.result)),
    );
    getMaritalStatusListApi().then(res => setMaritalStatusList(res?.result));
    getGenderListApi().then(res => setGenderList(res?.result));
  };

  console.log('maritalStatusList', genderList);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const uploadDataHandler = () => {
    const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (!_.trim(name)) {
      return Utility.showToast('Please enter Name');
    } else if (!_.trim(email)) {
      return Utility.showToast('Please enter Email Id');
    } else if (!reg?.test(email?.trim())) {
      return Utility.showToast('Please enter your valid Email');
    } else if (email !== email.toLowerCase()) {
      return Utility.showToast('Please enter your valid Email');
    } else if (!_.trim(mobileNo)) {
      return Utility.showToast('Please enter Phone Number');
    } else if (mobileNo.length !== 10) {
      return Utility.showToast('Please enter Valid Phone Number');
    } else if (!_.trim(emergencyMobileNo)) {
      return Utility.showToast('Please enter Emergency Phone Number');
    } else if (emergencyMobileNo.length !== 10) {
      return Utility.showToast('Please enter Valid Emergency Phone Number');
    } else if (!_.trim(genderData)) {
      return Utility.showToast('Please Select Your Gender');
    } else if (!_.trim(birthDate)) {
      return Utility.showToast('Please Enter Your Birth Date');
    } else if (!_.trim(maritalStatusData)) {
      return Utility.showToast('Please Enter Your Marital Status');
    } else if (!_.trim(addressPincode)) {
      return Utility.showToast('Please Enter Your Address Pincode');
    } else if (!_.trim(addressPincodeArea)) {
      return Utility.showToast('Please Enter Your Address Pincode Area');
    } else if (!_.trim(address)) {
      return Utility.showToast('Please Enter Your Address');
    } else if (!_.trim(panNumber)) {
      return Utility.showToast('Please Enter Your Pan Number');
    } else if (!_.trim(aadharNumber)) {
      return Utility.showToast('Please Enter Your Aadhar Number');
    } else if (!_.trim(ifscNumber)) {
      return Utility.showToast('Please Enter Your IFSC Number');
    } else if (!_.trim(accountNumber)) {
      return Utility.showToast('Please Enter Your Account Number');
    } else if (!_.trim(profileImage)) {
      return Utility.showToast('Please Upload Your Profile Picture');
      // } else if (!_.trim(aadharCard)) {
      //   return Utility.showToast('Please Upload Your Aadhar Card');
      // } else if (!_.trim(panCard)) {
      //   return Utility.showToast('Please Upload Your Pan Card');
      // } else if (!_.trim(bankDetail)) {
      //   return Utility.showToast('Please Upload Your Bank Details');
    } else {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('emailid', email);
      formData.append('mobile_no', mobileNo);
      formData.append('gender', gender);
      formData.append('birth_date', birthDate);
      formData.append('marital_status', maritalStatus);
      formData.append('pincode', addressPincode);
      formData.append('pincode_area', addressPincodeArea);
      formData.append('address', address);
      formData.append('emergency_contact_no', emergencyMobileNo);
      formData.append('pan', panNumber);
      formData.append('aadhaar', aadharNumber);
      formData.append('ac_no', accountNumber);
      formData.append('ifsc', ifscNumber);
      let profilePhoto = {
        uri: profileImage,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      formData.append('photo_path', profilePhoto);
      let aadharCardPhoto = {
        uri: aadharCard,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      formData.append('aadhaar_path', aadharCardPhoto);
      let panCardPhoto = {
        uri: panCard,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      formData.append('pan_path', panCardPhoto);
      let bankDetailPhoto = {
        uri: bankDetail,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      formData.append('bank_detail_path', bankDetailPhoto);
      let uanUploadPhoto = {
        uri: uanUpload,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      formData.append('uan_path', uanUploadPhoto);
      let esicUploadPhoto = {
        uri: esicUpload,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      formData.append('esic_path', esicUploadPhoto);
      // setLoading(true);

      console.log('profilePhoto', profilePhoto);

      const formData2 = {
        name: name,
        emailid: email,
        mobile_no: mobileNo,
        gender: gender,
        birth_date: birthDate,
        marital_status: maritalStatus,
        pincode: addressPincode,
        pincode_area: addressPincodeArea,
        address: address,
        emergency_contact_no: emergencyMobileNo,
        pan: panNumber,
        aadhaar: aadharNumber,
        ac_no: accountNumber,
        ifsc: ifscNumber,
        photo_path: profileImage,
        // aadhaar_path: aadharCardPhoto,
        // pan_path: panCardPhoto,
        // bank_detail_path: bankDetailPhoto,
        // esic_path: esicUploadPhoto,
        // uan_path: uanUploadPhoto,
      };
      setLoading(true);
      updateEmpProfileDataApi(formData2)
        .then(res => {
          console.log('res', res);
          if (isLogin) {
            navigation.navigate(Screens.Bottom, {screen: Screens.Home});
            setLoading(false);
          } else {
            navigation.navigate(Screens.Bottom, {
              screen: Screens.UserProfile,
              params: {refresh: true},
            });
            setLoading(false);
            Utility.showToast('Successfully Profile Updated');
          }
        })
        .catch(err => {
          console.log('err', err);
          setLoading(false);
        });
    }
  };

  console.log('getMobileNo', getMobileNo);

  const renderHeader = () => {
    return (
      <View style={CmnStyles.updateProHeader}>
        <Text style={CmnStyles.updateProHeaderText}>Update Profile</Text>
        {!isLogin && (
          <TouchableOpacity
            style={CmnStyles.closeButtonBox}
            onPress={() => {
              navigation.navigate(Screens.Bottom, {
                screen: Screens.UserProfile,
              });
            }}>
            <Image source={Images.close} style={CmnStyles.closeButton} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderData = () => {
    return (
      <ScrollView>
        <View style={CmnStyles.updateProDataCont}>
          <ImageInput
            activityIndicator={activityIndicator}
            image={
              profileImage ? profileImage : getProfileImage && getProfileImage
            }
            // image={profileImage}
            setImage={setProfileImage}
            setActivityIndicator={setActivityIndicator}
            setCameraModalVisible={setCameraModalVisible}
            onPress={() => {
              onCameraPressHandler({
                setLogoImage: setProfileImage,
                setCameraModalVisible: setCameraModalVisible,
              });
            }}
          />
          <LoginInput
            otherStyle={CmnStyles.updateProBox}
            placeholder="Name"
            onChangeText={text => setName(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            value={name}
            upperText="Name"
            numberOfLines={1}
          />
          <LoginInput
            otherStyle={CmnStyles.updateProBox}
            placeholder="Email ID"
            onChangeText={text => setEmail(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            value={email}
            upperText="Email ID"
            numberOfLines={1}
          />
          {getMobileNo == undefined ? (
            <LoginInput
              value={mobileNo}
              otherStyle={CmnStyles.updateProBox}
              placeholder="Mobile No"
              onChangeText={text => setMobileNo(text)}
              otherTextStyle={TextStyles.black15_SemiBold}
              upperText="Mobile No"
              maxLength={10}
              numberOfLines={1}
              keyboardType="numeric"
            />
          ) : (
            <View style={[CmnStyles.loginInputBox, CmnStyles.updateProBox]}>
              <Text style={[CmnStyles.proScreenTopPartText2]}>
                {getMobileNo}
              </Text>
            </View>
          )}
          <LoginInput
            value={address}
            otherStyle={CmnStyles.updateProBox}
            placeholder="Address"
            onChangeText={text => setAddress(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="Address"
            numberOfLines={1}
          />
          <DropDownPinCode
            myData={pinCodeList}
            dropPlaceHolder={'Pincode'}
            selectedData={addressPincode}
            setSelectedData={setAddressPincode}
            upperText="Pincode"
          />
          <DropDownPinCodeArea
            myData={pinCodeAreaList}
            dropPlaceHolder={'Pincode Area'}
            selectedData={addressPincodeArea}
            setSelectedData={setAddressPincodeArea}
            upperText="Pincode Area"
          />
          <LoginInput
            value={emergencyMobileNo}
            otherStyle={CmnStyles.updateProBox}
            placeholder="Emergency Mobile No"
            onChangeText={text => setEmergencyMobileNo(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="Emergency Mobile No"
            maxLength={10}
            numberOfLines={1}
            keyboardType="numeric"
          />
          <DropDown
            myData={genderList}
            dropPlaceHolder={'Select Gender'}
            selectedData={gender}
            setSelectedData={setGender}
            upperText="Gender"
          />
          <DateInput
            value={birthDate}
            otherStyle={CmnStyles.updateProDateBox}
            text="Birth Date"
            setValue={setBirthDate}
            upperText="Birth Date"
          />
          <DropDown
            myData={maritalStatusList}
            dropPlaceHolder={'Marital Status'}
            selectedData={maritalStatus}
            setSelectedData={setMaritalStatus}
            upperText="Marital Status"
          />
          {/* <LoginInput
            value={addressPincode}
            otherStyle={CmnStyles.updateProBox}
            placeholder="Address Pincode"
            onChangeText={text => setAddressPincode(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="Address Pincode"
            numberOfLines={1}
          /> */}
          {/* <LoginInput
            value={addressPincodeArea}
            otherStyle={CmnStyles.updateProBox}
            placeholder="Address Pincode Area"
            onChangeText={text => setAddressPincodeArea(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="Address Pincode Area"
            numberOfLines={1}
          /> */}
          <LoginInput
            value={panNumber}
            otherStyle={CmnStyles.updateProBox}
            placeholder="PAN"
            onChangeText={text => setPanNumber(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="PAN"
            numberOfLines={1}
          />
          <ImageInput2
            activityIndicator={activityIndicator}
            image={panCard}
            // image={profileImage}
            setImage={setPanCard}
            setActivityIndicator={setActivityIndicator}
            setCameraModalVisible={setCameraModalVisible}
            onPress={() => {
              onCameraPressHandler({
                setLogoImage: setPanCard,
                setCameraModalVisible: setCameraModalVisible,
              });
            }}
            text={'PAN'}
          />
          {/* <UploadFile
            text={'PAN'}
            setImage={setPanCard}
            // image={panCard}
            image={panCard ? panCard : getPanCard && getPanCard}
          /> */}
          <LoginInput
            value={aadharNumber}
            otherStyle={CmnStyles.updateProBox}
            placeholder="Aadhaar"
            onChangeText={text => setAadharNumber(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="Aadhaar"
            numberOfLines={1}
          />
          {/* <UploadFile
            text={'Aadhaar'}
            setImage={setAadharCard}
            // image={aadharCard}
            image={aadharCard ? aadharCard : getAadharCard && getAadharCard}
          /> */}
          <ImageInput2
            activityIndicator={activityIndicator}
            image={aadharCard}
            // image={profileImage}
            setImage={setAadharCard}
            setActivityIndicator={setActivityIndicator}
            setCameraModalVisible={setCameraModalVisible}
            onPress={() => {
              onCameraPressHandler({
                setLogoImage: setAadharCard,
                setCameraModalVisible: setCameraModalVisible,
              });
            }}
            text={'Aadhaar'}
          />
          <LoginInput
            value={ifscNumber}
            otherStyle={CmnStyles.updateProBox}
            placeholder="IFSC"
            onChangeText={text => setIfscNumber(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="IFSC"
            numberOfLines={1}
          />
          <LoginInput
            value={accountNumber}
            otherStyle={CmnStyles.updateProBox}
            placeholder="A/C NO Number"
            onChangeText={text => setAccountNumber(text)}
            otherTextStyle={TextStyles.black15_SemiBold}
            upperText="A/C NO Number"
            numberOfLines={1}
          />
          <ImageInput2
            activityIndicator={activityIndicator}
            image={bankDetail}
            // image={profileImage}
            setImage={setBankDetail}
            setActivityIndicator={setActivityIndicator}
            setCameraModalVisible={setCameraModalVisible}
            onPress={() => {
              onCameraPressHandler({
                setLogoImage: setBankDetail,
                setCameraModalVisible: setCameraModalVisible,
              });
            }}
            text={'Bank Detail'}
          />
          {/* <UploadFile
            text={'Bank Detail'}
            setImage={setBankDetail}
            // image={bankDetail}
            image={bankDetail ? bankDetail : getBankDetail && getBankDetail}
          /> */}
          {/* <UploadFile
            text={'UAN'}
            setImage={setUanUpload}
            // image={uanUpload}
            image={uanUpload ? uanUpload : getUanUpload && getUanUpload}
          />
          <UploadFile
            text={'ESIC'}
            setImage={setEsicUpload}
            // image={esicUpload}
            image={esicUpload ? esicUpload : getEsicUpload && getEsicUpload}
          /> */}
          <LoginButton2
            text={'Update'}
            otherStyle={CmnStyles.updateButton}
            onPress={() => {
              uploadDataHandler();
            }}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      <View style={CmnStyles.screenBG2}>
        {Platform.OS === 'ios' && <View style={CmnStyles.headerOrangeDark} />}
        {loading ? (
          <Loader visible={loading} />
        ) : (
          <View style={CmnStyles.screenBG2}>
            {renderHeader()}
            {renderData()}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
