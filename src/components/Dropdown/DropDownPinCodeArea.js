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

const DropDownPinCodeArea = ({
  myData,
  dropPlaceHolder,
  setSelectedData,
  selectedData,
  upperText,
  setState,
  state,
  setDistrict,
  district,
}) => {
  const [search, setSearch] = useState('');
  const [selectedData2, setSelectedData2] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(myData);
  // const [selectedData, setSelectedData] = useState('');
  const searchRef = useRef();
  const onSearch = searchText => {
    if (searchText !== '') {
      let tempData = data.filter(item => {
        return (
          item.pincode_area.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      });
      setData(tempData);
    } else {
      setData(myData);
    }
  };

  console.log('myData', myData);

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
        }}>
        {selectedData?.length > 0 && (
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
          {!selectedData
            ? dropPlaceHolder
            : `${selectedData}, ${district}, ${state}`}
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
            // height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: Colors.bgColorText2,
            borderRadius: 10,
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
                    setSelectedData(item.pincode_area);
                    setSelectedData2(item);
                    setDistrict(item.district);
                    setState(item.state);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{fontWeight: '500'}}>{item.pincode_area}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DropDownPinCodeArea;
