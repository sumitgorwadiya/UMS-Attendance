import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import _ from 'lodash';
import SpStyle from '../styles/SpStyle';
import {Colors} from '../constants/Colors';

const OtpInputPart = ({setOtpCode}) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [letter1, setLetter1] = useState();
  const [letter2, setLetter2] = useState();
  const [letter3, setLetter3] = useState();
  const [letter4, setLetter4] = useState();
  const [letter5, setLetter5] = useState();

  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={styles.boxStyle}
        maxLength={1}
        ref={ref1}
        keyboardType={'number-pad'}
        onChangeText={text => {
          if (text.length === 1) {
            ref2.current.focus();
            setLetter1(text);
          }
        }}
      />
      <TextInput
        style={styles.boxStyle}
        maxLength={1}
        ref={ref2}
        keyboardType={'number-pad'}
        onChangeText={text => {
          setLetter2(text);
          if (text.length === 1) {
            ref3.current.focus();
          } else {
            text.length === 0 && ref1.current.focus();
          }
        }}
        onKeyPress={({nativeEvent}, text) => {
          if (nativeEvent.key === 'Backspace') {
            ref1.current.focus();
          }
        }}
      />
      <TextInput
        style={styles.boxStyle}
        maxLength={1}
        ref={ref3}
        keyboardType={'number-pad'}
        onChangeText={text => {
          setLetter3(text);
          if (text.length === 1) {
            ref4.current.focus();
          } else {
            text.length === 0 && ref2.current.focus();
          }
        }}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            ref2.current.focus();
          }
        }}
      />
      <TextInput
        style={styles.boxStyle}
        maxLength={1}
        ref={ref4}
        keyboardType={'number-pad'}
        onChangeText={text => {
          setLetter4(text);
          if (text.length === 1) {
            ref5.current.focus();
          } else {
            text.length === 0 && ref3.current.focus();
          }
        }}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            ref3.current.focus();
          }
        }}
      />
      <TextInput
        style={styles.boxStyle}
        maxLength={1}
        ref={ref5}
        keyboardType={'number-pad'}
        onChangeText={text => {
          setLetter5(text);
          if (text.length === 1) {
            ref6.current.focus();
          } else {
            text.length === 0 && ref4.current.focus();
          }
        }}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            ref4.current.focus();
          }
        }}
      />
      <TextInput
        style={styles.boxStyle}
        maxLength={1}
        keyboardType={'number-pad'}
        ref={ref6}
        onChangeText={text => {
          if (text.length === 1) {
            // ref1.current.focus();
            const myOTP =
              letter1 + letter2 + letter3 + letter4 + letter5 + text;
            console.log('myOTP', myOTP);
            setOtpCode(myOTP);
          } else {
            text.length === 0 && ref5.current.focus();
          }
        }}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            ref5.current.focus();
          }
        }}
      />
    </View>
  );
};
export default OtpInputPart;

const styles = StyleSheet.create({
  boxStyle: {
    width: 35,
    height: 35,
    backgroundColor: Colors.bgColorText,
    textAlign: 'center',
    marginRight: 15,
    borderRadius: 5,
    ...SpStyle.shadowLight,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
