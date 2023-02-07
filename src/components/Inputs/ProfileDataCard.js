import {View, Text} from 'react-native';
import React from 'react';
import TextStyles from '../../styles/TextStyles';
import CmnStyles from '../../styles/CmnStyles';

const ProfileDataCard = ({title, data}) => {
  return (
    <View style={CmnStyles.profileDataCardBox}>
      <Text style={TextStyles.black_21_SemiBold}>
        {title} : <Text style={TextStyles.black16_Reg}>{data}</Text>
      </Text>
    </View>
  );
};

export default ProfileDataCard;
