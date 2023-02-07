import {launchImageLibrary} from 'react-native-image-picker';

const onGalleryPressHandler = ({setLogoImage, setCameraModalVisible}) => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      setLogoImage(response?.assets[0]?.uri);
    }
    setCameraModalVisible(false);
  });
};

export default onGalleryPressHandler;
