import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/OtherScreens/ProfileScreen';
import {Screens} from './Screens';
import UpdateProfileScreen from '../screens/OtherScreens/UpdateProfileScreen';

const Stack = createNativeStackNavigator();

export const OtherStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.Profile} component={ProfileScreen} />
      <Stack.Screen
        name={Screens.UpdateProfile}
        component={UpdateProfileScreen}
      />
    </Stack.Navigator>
  );
};
