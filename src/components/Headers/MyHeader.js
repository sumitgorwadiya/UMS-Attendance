import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CmnStyles from '../../styles/CmnStyles';
import {Images} from '../../constants/Images';

const MyHeader = ({onPress, text}) => {
  return (
    <View style={CmnStyles.myHeaderCont}>
      <Text style={CmnStyles.myHeaderText}>{text}</Text>
      {/* <TouchableOpacity onPress={onPress}>
        <Image
          source={Images.user}
          style={CmnStyles.myHeaderProImg}
          resizeMode="contain"
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default MyHeader;
