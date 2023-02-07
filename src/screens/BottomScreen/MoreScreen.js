import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CmnStyles from '../../styles/CmnStyles';
import MyHeader from '../../components/Headers/MyHeader';

const MoreScreen = () => {
  return (
    <SafeAreaView style={CmnStyles.screenBG2}>
      <View style={CmnStyles.screenBG2}>
        <MyHeader text={'More Screen'} />
        <Text>MoreScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MoreScreen;
