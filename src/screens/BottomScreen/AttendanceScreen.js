import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import {useNavigation} from '@react-navigation/native';
import MyHeader from '../../components/Headers/MyHeader';
import {Screens} from '../../navigator/Screens';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Responsive from '../../constants/Responsive';
import requestCameraPermission from '../../components/CameraActivity/CameraPermission';
import {useRef} from 'react';

const AttendanceScreen = () => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;
  useEffect(() => {
    requestCameraPermission();
  }, []);

  if (device == null) return <ActivityIndicator size={'large'} color="black" />;

  const capturePic = () => {
    camera.current.takePhoto({
      flash: 'off',
      qualityPrioritization: 'speed',
    });
  };

  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      <View style={CmnStyles.screenBG2}>
        <MyHeader text={'Attendance Screen'} />
        {/* <Camera
          ref={camera}
          style={{
            width: Responsive.widthPx(100),
            height: Responsive.widthPx(100),
          }}
          device={device}
          isActive={true}
        />
        <TouchableOpacity
          style={{backgroundColor: 'pink', padding: 20}}
          onPress={() => {
            capturePic();
          }}> */}
        <Text>AttendanceScreen</Text>
        {/* </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default AttendanceScreen;
