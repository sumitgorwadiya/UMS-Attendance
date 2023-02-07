import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './Screens';
import {BottomStackScreen} from './BottomStack';
import {OtherStackScreen} from './OtherStack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import OtpScreen from '../screens/AuthScreens/OtpScreen';

const Stack = createNativeStackNavigator();
export const MainStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.Bottom} component={BottomStackScreen} />
      <Stack.Screen name={Screens.Other} component={OtherStackScreen} />
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.Otp} component={OtpScreen} />
    </Stack.Navigator>
  );
};
