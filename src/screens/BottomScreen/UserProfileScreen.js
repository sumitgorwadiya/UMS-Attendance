import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import {Images} from '../../constants/Images';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {MotiImage, MotiView, ScrollView} from 'moti';
import {useEffect} from 'react';
import {Screens} from '../../navigator/Screens';
import ProfileDataCard from '../../components/Inputs/ProfileDataCard';
import {getEmpProfileDataApi} from '../../apiConfig/CallApi';
import TextStyles from '../../styles/TextStyles';
import Loader from '../../components/Loader/Loader';
import Responsive from '../../constants/Responsive';
import FullScreenImage from '../../components/Modal/FullScreenImage';
import moment from 'moment';

const UserProfileScreen = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [employeeData, setEmployeeData] = useState();
  const [loading, setLoading] = useState(false);
  const [fullImageVisible, setFullImageVisible] = useState(false);

  const refresh = route?.params?.refresh;

  const navigation = useNavigation();

  useEffect(() => {
    getEmpProfileDataApi()
      .then(res => {
        setEmployeeData(res?.result?.profile);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, [refresh]);

  const renderTopPart = () => {
    return (
      <View style={CmnStyles.proScreenTopPartCont}>
        <View style={CmnStyles.proScreenTopPartBox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Screens.Bottom, {screen: Screens.Home})
            }
            style={CmnStyles.otpBackImg}>
            <Image
              source={Images.back}
              style={CmnStyles.otpBackImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={[TextStyles.white_21_700]}>Employee Profile</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Screens.Other, {
                screen: Screens.UpdateProfile,
              })
            }
            style={CmnStyles.otpBackImg}>
            <Image
              source={Images.editImage}
              style={CmnStyles.otpBackImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setFullImageVisible(!fullImageVisible);
          }}>
          <Image
            // source={Images.logo}
            source={{uri: employeeData?.photo_path}}
            style={CmnStyles.proScreenTopPartImg}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={CmnStyles.proScreenTopPartText}>{employeeData?.name}</Text>
      </View>
    );
  };

  console.log('fullImageVisible', fullImageVisible);

  const renderData = () => {
    return (
      <View style={CmnStyles.proScreenData}>
        <ScrollView>
          <View style={CmnStyles.proScreenDataBox}>
            {/* <ProfileDataCard title={'Name'} data={employeeData?.name} /> */}
            <ProfileDataCard title={'Email Id'} data={employeeData?.emailid} />
            <ProfileDataCard
              title={'Mobile No'}
              data={employeeData?.mobile_no}
            />
            <ProfileDataCard title={'Address'} data={employeeData?.address} />
            {/* <ProfileDataCard
              title={'Pincode Area'}
              data={employeeData?.pincode_area}
            />
            <ProfileDataCard title={'Pincode'} data={employeeData?.Pincode} />
            <ProfileDataCard title={'District'} data={employeeData?.district} />
            <ProfileDataCard title={'State'} data={employeeData?.state} /> */}
            <ProfileDataCard
              title={'Emergency Mobile No'}
              data={employeeData?.emergency_contact_no}
            />
            <ProfileDataCard title={'Gender'} data={employeeData?.gender} />
            <ProfileDataCard
              title={'Birth Date'}
              data={moment(employeeData?.birth_date).format('DD/MM/YYYY')}
            />
            <ProfileDataCard
              title={'Marital Status'}
              data={employeeData?.marital_status}
            />

            <ProfileDataCard title={'Pan'} data={employeeData?.pan} />
            <ProfileDataCard title={'Aadhaar'} data={employeeData?.aadhaar} />
            <ProfileDataCard title={'IFSC'} data={employeeData?.ifsc} />
            <ProfileDataCard
              title={'Account Number'}
              data={employeeData?.ac_no}
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      <Loader visible={loading} />
      {renderTopPart()}
      {renderData()}
      <FullScreenImage
        fullImage={employeeData?.photo_path}
        setFullImageVisible={setFullImageVisible}
        fullImageVisible={fullImageVisible}
      />
    </SafeAreaView>
  );
};

export default UserProfileScreen;

// import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import CmnStyles from '../../styles/CmnStyles';
// import {Images} from '../../constants/Images';
// import {useNavigation} from '@react-navigation/native';
// import {ScrollView} from 'moti';
// import {useEffect} from 'react';
// import {Screens} from '../../navigator/Screens';
// import ProfileDataCard from '../../components/Inputs/ProfileDataCard';
// import {getEmpProfileDataApi} from '../../apiConfig/CallApi';
// import TextStyles from '../../styles/TextStyles';

// const UserProfileScreen = () => {
//   const [employeeData, setEmployeeData] = useState();

//   const navigation = useNavigation();

//   useEffect(() => {
//     getEmpProfileDataApi().then(res => setEmployeeData(res?.result?.profile));
//   }, []);

//   console.log('employeeData', employeeData);

//   const renderTopPart = () => {
//     return (
//       <View style={CmnStyles.proScreenTopPartCont}>
//         <View style={CmnStyles.proScreenTopPartBox}>
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate(Screens.Bottom, {screen: Screens.Home})
//             }
//             style={CmnStyles.otpBackImg}>
//             <Image
//               source={Images.back}
//               style={CmnStyles.otpBackImg}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//           <Text style={[TextStyles.white_21_700]}>Employee Profile</Text>
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate(Screens.Other, {
//                 screen: Screens.UpdateProfile,
//               })
//             }
//             style={CmnStyles.otpBackImg}>
//             <Image
//               source={Images.editImage}
//               style={CmnStyles.otpBackImg}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//         </View>
//         <Image
//           source={Images.logo}
//           // source={{uri: IMAGE_BASE_URL + employeeData?.photo_path}}
//           style={CmnStyles.proScreenTopPartImg}
//         />
//         <Text style={CmnStyles.proScreenTopPartText}>{employeeData?.Name}</Text>
//       </View>
//     );
//   };

//   const renderData = () => {
//     return (
//       <View style={CmnStyles.proScreenData}>
//         <ScrollView>
//           <View style={CmnStyles.proScreenDataBox}>
//             {employeeData &&
//               Object.entries(employeeData).map(([key, val]) => (
//                 <View key={key}>
//                   <ProfileDataCard title={key} data={val} />
//                 </View>
//               ))}
//           </View>
//         </ScrollView>
//       </View>
//     );
//   };

//   employeeData && console.log(Object.keys(employeeData));

//   return (
//     <SafeAreaView style={CmnStyles.screenBG2}>
//       {renderTopPart()}
//       {renderData()}
//     </SafeAreaView>
//   );
// };

// export default UserProfileScreen;
