import {View, Text, SafeAreaView, LogBox} from 'react-native';
import React from 'react';
import Routes from './src/navigator/Route';
import CmnStyles from './src/styles/CmnStyles';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Provider} from 'react-redux';
import {MyStore} from './src/apiConfig/MyStore';

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={MyStore}>
        <Routes />
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
