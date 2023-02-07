import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import Responsive from '../../constants/Responsive';

export const CameraModal = ({
  modalVisible,
  onPressCancel,
  onPressCamera,
  onPressGallery,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onPressCancel}>
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={onPressCancel}>
          <View style={styles.modalContainer} />
        </TouchableWithoutFeedback>
        <View style={styles.modalSubContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.selectPhoto}>Select a Photo</Text>
            <TouchableOpacity
              onPress={onPressCamera}
              style={styles.modalBorderLine}>
              <Text style={styles.blue_700_21}>{'Take Picture'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressGallery}
              style={styles.modalBorderLine2}>
              <Text style={styles.blue_700_21}>{'Choose from Gallery'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onPressCancel}
            style={styles.modalCancelBox}>
            <Text style={styles.blue_700_21}>{'Cancel'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalSubContainer: {
    width: Responsive.widthPx(100),
    height: '40%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: Responsive.widthPx(1.5),
    marginTop: 0,
    borderRadius: 10,
    width: Responsive.widthPx(94),
    height: Responsive.widthPx(44),
    justifyContent: 'center',
  },
  selectPhoto: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    marginBottom: Responsive.widthPx(1),
  },
  modalBorderLine: {
    width: '88%',
    backgroundColor: '#fff',
    borderTopWidth: 0.35,
    borderColor: '#d4d4d4',
    borderRadius: Responsive.widthPx(2.5),
    height: Responsive.widthPx(14),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Responsive.widthPx(3),
  },
  modalBorderLine2: {
    width: '88%',
    backgroundColor: '#fff',
    borderTopWidth: 0.35,
    borderColor: '#d4d4d4',
    borderRadius: 10,
    height: Responsive.widthPx(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue_700_21: {
    color: Colors.bgColorText,
    fontWeight: '700',
    fontSize: 21,
  },
  modalCancelBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: Responsive.widthPx(1.5),
    marginTop: Responsive.widthPx(0.2),
    borderRadius: Responsive.widthPx(2.5),
    width: Responsive.widthPx(94),
    height: Responsive.widthPx(14),
    justifyContent: 'center',
  },
});
