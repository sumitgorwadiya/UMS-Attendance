import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import TextStyles from '../../styles/TextStyles';
import {Images} from '../../constants/Images';
import {CameraModal} from '../Modal/CameraModal';
import onCameraPressHandler from '../CameraActivity/onCameraPressHandler';
import onGalleryPressHandler from '../CameraActivity/onGalleryPressHandler';

const UploadFile = ({text, setImage, image}) => {
  const [cameraModalVisible, setCameraModalVisible] = useState(false);

  return (
    <>
      <View style={CmnStyles.uploadFileCont}>
        <TouchableOpacity
          style={CmnStyles.chooseFileBox}
          onPress={() => {
            setCameraModalVisible(true);
          }}>
          <Text style={TextStyles.black12_SemiBold}>Choose File</Text>
        </TouchableOpacity>
        {image ? (
          <View style={CmnStyles.uploadFileBox}>
            <Image
              source={{uri: image}}
              style={CmnStyles.uploadFileImg}
              resizeMode="contain"
            />
            <Text style={CmnStyles.uploadFileImgText}>
              Successfully Uploaded {text}
            </Text>
          </View>
        ) : (
          <Text style={CmnStyles.uploadFileText}>Upload {text}</Text>
        )}
      </View>
      <CameraModal
        modalVisible={cameraModalVisible}
        onPressCancel={() => {
          setCameraModalVisible(false);
        }}
        onPressCamera={() => {
          onCameraPressHandler({
            setLogoImage: setImage,
            setCameraModalVisible: setCameraModalVisible,
          });
        }}
        onPressGallery={() => {
          onGalleryPressHandler({
            setLogoImage: setImage,
            setCameraModalVisible: setCameraModalVisible,
          });
        }}
      />
    </>
  );
};

export default UploadFile;
