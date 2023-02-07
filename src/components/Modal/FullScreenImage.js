import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {MotiImage} from 'moti';
import Responsive from '../../constants/Responsive';

const FullScreenImage = ({
  fullImageVisible,
  setFullImageVisible,
  fullImage,
}) => {
  return (
    <>
      {fullImageVisible && (
        <TouchableOpacity
          onPress={() => {
            setFullImageVisible(!fullImageVisible);
          }}
          style={{
            zIndex: 999,
            width: Responsive.widthPx(100),
            height: Responsive.heightPx(100),
            position: 'absolute',
            alignItems: 'center',
            // marginTop: Responsive.widthPx(21),
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
          <MotiImage
            from={{
              opacity: 0.6,
              width: Responsive.widthPx(32),
              height: Responsive.widthPx(32),
              marginTop: Responsive.widthPx(21),
            }}
            animate={{
              opacity: 1,
              marginTop: Responsive.widthPx(41),
              width: Responsive.widthPx(100),
              height: Responsive.widthPx(100),
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
            source={{uri: fullImage}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default FullScreenImage;
