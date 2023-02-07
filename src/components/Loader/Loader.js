import {View, Text, StyleSheet, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MotiView} from 'moti';
import {Colors} from '../../constants/Colors';

const color = ['red', 'white', 'blue', 'green'];

const Loader = ({visible}) => {
  return (
    <Modal style={styles.container} visible={visible}>
      <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 30}}>Loading...</Text>
        <View>
          <LoaderIndicator size={50} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const LoaderIndicator = ({size}) => {
  const [circleColor, setCircleColor] = useState('#fff');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCircleColor(color[index]);
    setTimeout(() => {
      setIndex((index + 1) % (3 + 1));
    }, 2000);
  }, [index]);

  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderColor: circleColor,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderWidth: (size + 20) / 10,
        borderRadius: (size + 20) / 2,
        borderColor: circleColor,
      }}
      transition={{type: 'timing', duration: 1000, repeat: Infinity}}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        // borderColor: '#fff',
        marginTop: 20,
        shadowColor: '#fff',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import {View, Text, ActivityIndicator} from 'react-native';
// import React from 'react';
// import SpStyle from '../../styles/SpStyle';
// import {Colors} from '../../constants/Colors';

// const Loader = () => {
//   return (
//     <View style={SpStyle.flex1}>
//       <ActivityIndicator size={'small'} color={Colors.bgColorText} />
//     </View>
//   );
// };

// export default Loader;
