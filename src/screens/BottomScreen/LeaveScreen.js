import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import MyHeader from '../../components/Headers/MyHeader';
import CameraEyeBlink from '../../components/CameraComp/CameraEyeBlink';

const LeaveScreen = () => {
  const [uri, setUri] = useState();

  console.log('uri', uri);

  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      <View style={CmnStyles.screenBG2}>
        <MyHeader text={'Leave Screen'} />
        {/* <CameraEyeBlink setUri={setUri} /> */}
        <Text>LeaveScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LeaveScreen;
