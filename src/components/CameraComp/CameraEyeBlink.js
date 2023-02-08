'use strict';
import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class CameraEyeBlink extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      front: true,
      faces: [],
    };

    this.image_uri = null;
  }

  onFacesDetected = faceArray => {
    this.setState({faces: faceArray.faces});
    if (faceArray.faces.length == 1) {
      if (
        faceArray.faces[0].leftEyeOpenProbability < 0.4 ||
        faceArray.faces[0].rightEyeOpenProbability < 0.4
      ) {
        console.log('Eye Blinking');
        this.takePicture();
      }
    }
  };

  renderFace = ({bounds, faceID, rollAngle, yawAngle}) => (
    <View
      key={faceID}
      transform={[
        {perspective: 600},
        {rotateZ: `${rollAngle.toFixed(0)}deg`},
        {rotateY: `${yawAngle.toFixed(0)}deg`},
      ]}
      style={[
        styles.face,
        {
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        },
      ]}></View>
  );

  renderFaces = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>
  );

  render() {
    return (
      <>
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={
              this.state.front
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
            }
            ratio={'4:4'}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              //console.log(barcodes);
            }}
            autoFocus="on"
            onFacesDetected={this.onFacesDetected}
            faceDetectionLandmarks={
              RNCamera.Constants.FaceDetection.Landmarks
                ? RNCamera.Constants.FaceDetection.Landmarks.all
                : undefined
            }
            faceDetectionClassifications={
              RNCamera.Constants.FaceDetection.Classifications
                ? RNCamera.Constants.FaceDetection.Classifications.all
                : undefined
            }>
            {/* {this.renderFaces()} */}
          </RNCamera>
          {/* <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.setState({front: !this.state.front});
            }}
            style={styles.capture}>
            <Text allowFontScaling={false} style={{fontSize: 14}}>
              {' '}
              FLIP Camera
            </Text>
          </TouchableOpacity>
        </View> */}

          {/* <Image
          source={{
            uri: this.image_uri,
          }}
          style={{width: 100, height: 100}}
        /> */}
        </View>
      </>
    );
  }

  takePicture = async () => {
    console.log('take picture called');
    if (this.camera) {
      const options = {quality: 0.1, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.image_uri = data.uri;
      this.props.setUri(data.uri);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  facesContainer: {
    position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },

  container: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'black',
    width: 200,
    height: 200,
  },
  preview: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // width: 200,
    // height: 200,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

//AppRegistry.registerComponent('Camera', () => MyCamera);
// 'use strict';
// import React, {PureComponent} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {RNCamera} from 'react-native-camera';

// export default class CameraEyeBlink extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       front: true,
//       faces: [],
//     };

//     this.image_uri = null;
//   }

//   onFacesDetected = faceArray => {
//     //console.log(faceArray.faces);
//     this.setState({faces: faceArray.faces});
//     if (faceArray.faces.length == 1) {
//       if (
//         faceArray.faces[0].leftEyeOpenProbability < 0.4 ||
//         faceArray.faces[0].rightEyeOpenProbability < 0.4
//       ) {
//         console.log('Eye Blinking');
//         this.takePicture();
//       }
//     }
//   };

//   renderFace = ({bounds, faceID, rollAngle, yawAngle}) => (
//     <View
//       key={faceID}
//       transform={[
//         {perspective: 600},
//         {rotateZ: `${rollAngle.toFixed(0)}deg`},
//         {rotateY: `${yawAngle.toFixed(0)}deg`},
//       ]}
//       style={[
//         styles.face,
//         {
//           ...bounds.size,
//           left: bounds.origin.x,
//           top: bounds.origin.y,
//         },
//       ]}></View>
//   );

//   renderFaces = () => (
//     <View style={styles.facesContainer} pointerEvents="none">
//       {this.state.faces.map(this.renderFace)}
//     </View>
//   );

//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={
//             this.state.front
//               ? RNCamera.Constants.Type.front
//               : RNCamera.Constants.Type.back
//           }
//           flashMode={RNCamera.Constants.FlashMode.off}
//           captureAudio={false}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           onGoogleVisionBarcodesDetected={({barcodes}) => {
//             //console.log(barcodes);
//           }}
//           autoFocus="on"
//           onFacesDetected={this.onFacesDetected}
//           faceDetectionLandmarks={
//             RNCamera.Constants.FaceDetection.Landmarks
//               ? RNCamera.Constants.FaceDetection.Landmarks.all
//               : undefined
//           }
//           faceDetectionClassifications={
//             RNCamera.Constants.FaceDetection.Classifications
//               ? RNCamera.Constants.FaceDetection.Classifications.all
//               : undefined
//           }>
//           {/* {this.renderFaces()} */}
//         </RNCamera>
//         {/* <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//           <TouchableOpacity
//             onPress={() => {
//               this.setState({front: !this.state.front});
//             }}
//             style={styles.capture}>
//             <Text allowFontScaling={false} style={{fontSize: 14}}>
//               {' '}
//               FLIP Camera
//             </Text>
//           </TouchableOpacity>
//         </View> */}
//       </View>
//     );
//   }

//   takePicture = async () => {
//     console.log('take picture called');
//     if (this.camera) {
//       const options = {quality: 0.1, base64: true};
//       const data = await this.camera.takePictureAsync(options);
//       this.image_uri = data.uri;
//       this.props.setUri(data.uri);
//       console.log(data.uri);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   facesContainer: {
//     position: 'absolute',
//     // bottom: 0,
//     // right: 0,
//     // left: 0,
//     top: 0,
//   },
//   face: {
//     padding: 10,
//     borderWidth: 2,
//     borderRadius: 2,
//     position: 'absolute',
//     borderColor: '#FFD700',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   faceText: {
//     color: '#FFD700',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 10,
//     backgroundColor: 'transparent',
//   },

//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//     width: 200,
//     height: 200,
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

// //AppRegistry.registerComponent('Camera', () => MyCamera);
