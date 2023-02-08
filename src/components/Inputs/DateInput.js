import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {MotiView} from 'moti';
import CmnStyles from '../../styles/CmnStyles';
import TextStyles from '../../styles/TextStyles';
import {Colors} from '../../constants/Colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateInput = ({value, otherStyle, upperText, setValue, text}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [newDate, setNewDate] = useState();

  const handleConfirm = date => {
    setDatePickerVisibility(false);
    const selectedDate = moment(date).format('DD/MM/YYYY');
    setValue(date);
    setNewDate(selectedDate);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setDatePickerVisibility(isDatePickerVisible ? false : true);
      }}
      style={[CmnStyles.loginInputBox, otherStyle]}>
      {value && (
        <MotiView
          style={{
            position: 'absolute',
            top: -5,
            left: 10,
            backgroundColor: Colors.white,
            borderRadius: 4,
            paddingHorizontal: 3,
          }}>
          <Text style={TextStyles.Orange_9_400}>{upperText}</Text>
        </MotiView>
      )}
      {value ? (
        <Text style={[TextStyles.black15_SemiBold]}>
          {moment(value).format('DD/MM/YYYY')}
        </Text>
      ) : (
        <Text style={[TextStyles.black15_SemiBold, {color: Colors.gray}]}>
          {text}
        </Text>
      )}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </TouchableOpacity>
  );
};

export default DateInput;
