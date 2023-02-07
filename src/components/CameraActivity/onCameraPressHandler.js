import {launchCamera} from 'react-native-image-picker';

const onCameraPressHandler = ({setLogoImage, setCameraModalVisible}) => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else if (response.errorMessage) {
      // Utility.showToast('You need allowed to use Camera For this Feature');
      console.log('User tapped custom button: ', response.errorMessage);
    } else {
      setLogoImage(response.assets[0].uri);
    }
    setCameraModalVisible(false);
  });
};

export default onCameraPressHandler;
