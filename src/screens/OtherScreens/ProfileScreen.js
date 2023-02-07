import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CmnStyles from '../../styles/CmnStyles';
import {Images} from '../../constants/Images';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'moti';
import {Colors} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUserData} from '../../apiConfig/ReduxCall';
import {Screens} from '../../navigator/Screens';
import TextStyles from '../../styles/TextStyles';
import Responsive from '../../constants/Responsive';
import SpStyle from '../../styles/SpStyle';
import ProfileDataCard from '../../components/Inputs/ProfileDataCard';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData(dispatch);
  }, []);

  const userData = useSelector(state => state.getUserData);

  console.log('userData', userData);

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
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.UpdateProfile)}
            style={CmnStyles.otpBackImg}>
            <Image
              source={Images.editImage}
              style={CmnStyles.otpBackImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Image source={Images.logo} style={CmnStyles.proScreenTopPartImg} />
        <Text style={CmnStyles.proScreenTopPartText}> Virat Kohli </Text>
      </View>
    );
  };

  const renderData = () => {
    return (
      <ScrollView style={CmnStyles.proScreenData}>
        <View style={CmnStyles.proScreenDataBox}>
          <ProfileDataCard title={'Email Id'} data={'empiereTech@gmail.com'} />
          <ProfileDataCard title={'Mobile No'} data={'88888 88888'} />
          <ProfileDataCard title={'Gender'} data={'Male'} />
          <ProfileDataCard title={'Birth Date'} data={'11-11-2022'} />
          <ProfileDataCard title={'Marital Status'} data={'Single'} />
          <ProfileDataCard title={'Address Pincode'} data={'360001'} />
          <ProfileDataCard title={'Address Pincode Area'} data={'360001'} />
          <ProfileDataCard title={'Address'} data={'Rajkot, Gujarat, India'} />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      {renderTopPart()}
      {renderData()}
    </SafeAreaView>
  );
};

export default ProfileScreen;
