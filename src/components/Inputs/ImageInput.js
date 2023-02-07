import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import CmnStyles from '../../styles/CmnStyles';
import {Images} from '../../constants/Images';
import TextStyles from '../../styles/TextStyles';
import {Colors} from '../../constants/Colors';
import onCameraPressHandler from '../CameraActivity/onCameraPressHandler';
import {CameraModal} from '../Modal/CameraModal';
import onGalleryPressHandler from '../CameraActivity/onGalleryPressHandler';

const ImageInput = ({
  setActivityIndicator,
  activityIndicator,

  onPress,
  setImage,
  image,
}) => {
  const [cameraModalVisible, setCameraModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={
          !image
            ? CmnStyles.businessLogoUploadBox
            : CmnStyles.businessLogoUploadBox
        }
        onPress={() => {
          setCameraModalVisible(true);
        }}>
        {!image ? (
          <>
            <Image
              source={Images.uploadLogo}
              style={CmnStyles.businessLogoUploadImage3}
              resizeMode="contain"
            />
            <Text style={TextStyles.Orange_15_600}>Upload Profile</Text>
          </>
        ) : (
          <>
            {activityIndicator && (
              <View style={CmnStyles.f1AlignJustCenterAbs}>
                <ActivityIndicator
                  animating={true}
                  color={Colors.green300}
                  size="small"
                />
              </View>
            )}
            <Image
              source={{uri: image}}
              style={CmnStyles.businessLogoUploadImage2}
              resizeMode={'cover'}
              onLoadStart={() => {
                setActivityIndicator(true);
              }}
              onLoadEnd={() => {
                setActivityIndicator(false);
              }}
            />
          </>
        )}
      </TouchableOpacity>
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

export default ImageInput;
