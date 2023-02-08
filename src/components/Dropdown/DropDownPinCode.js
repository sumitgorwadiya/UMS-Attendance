import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Images} from '../../constants/Images';
import {Colors} from '../../constants/Colors';
import TextStyles from '../../styles/TextStyles';
import Responsive from '../../constants/Responsive';
import SpStyle from '../../styles/SpStyle';
import {MotiView} from 'moti';
import {getPinCodeListAreaApi} from '../../apiConfig/CallApi';

const DropDownPinCode = ({
  myData,
  dropPlaceHolder,
  setSelectedData,
  selectedData,
  upperText,
  setPinCodeAreaList,
}) => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(myData);
  // const [selectedData, setSelectedData] = useState('');
  const searchRef = useRef();
  const onSearch = searchText => {
    if (searchText !== '') {
      let tempData = data?.filter(item => {
        return item.pincode.indexOf(searchText) > -1;
      });
      setData(tempData);
    } else {
      setData(myData);
    }
  };

  const onSelectPin = myPincode => {
    console.log('myPincode', myPincode);
    const formData2 = {pincode: myPincode};
    console.log('formData2', formData2);
    getPinCodeListAreaApi(formData2).then(res => {
      console.log('res', res);
      res?.result == 'No record found.'
        ? setPinCodeAreaList()
        : setPinCodeAreaList(res?.result);
    });
  };

  useEffect(() => {
    setData(myData);
  }, [myData]);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '88%',
          height: 50,
          borderRadius: Responsive.widthPx(1),
          // borderWidth: 0.2,
          borderColor: Colors.gray,
          ...SpStyle.shadowLight,
          alignSelf: 'center',
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          backgroundColor: Colors.white,
        }}
        onPress={() => {
          setClicked(!clicked);
          setPinCodeAreaList();
        }}>
        {selectedData && (
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
        <Text
          style={[
            TextStyles.black15_SemiBold,
            {color: !selectedData ? Colors.gray : Colors.black},
          ]}>
          {/* {!selectedData
            ? dropPlaceHolder
            : selectedData.district +
              ' - ' +
              selectedData.pincode +
              ', ' +
              selectedData.state} */}
          {!selectedData ? dropPlaceHolder : selectedData}
        </Text>
        {clicked ? (
          <Image
            source={Images.dropDown}
            style={{
              width: 16,
              height: 16,
              transform: [{rotate: '180deg'}],
              tintColor: Colors.bgColorText2,
            }}
          />
        ) : (
          <Image
            source={Images.dropDown}
            style={{
              width: 16,
              height: 16,
              tintColor: Colors.bgColorText2,
            }}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: Colors.bgColorText2,
            borderRadius: 10,
            paddingBottom: 20,
          }}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: '90%',
              height: 50,
              alignSelf: 'center',
              borderWidth: 0.2,
              borderColor: '#fff',
              borderRadius: 7,
              marginTop: 20,
              paddingLeft: 20,
            }}
          />
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              console.log(item, 'item');
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedData(item.pincode);
                    setClicked(!clicked);
                    onSelectPin(item.pincode);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{fontWeight: '600'}}> {item.pincode}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DropDownPinCode;
