import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import AttendanceScreen from '../screens/BottomScreen/AttendanceScreen';
import HomeScreen from '../screens/BottomScreen/HomeScreen';
import LeaveScreen from '../screens/BottomScreen/LeaveScreen';
import MoreScreen from '../screens/BottomScreen/MoreScreen';
import UserProfileScreen from '../screens/BottomScreen/UserProfileScreen';
import CmnStyles from '../styles/CmnStyles';
import {Screens} from './Screens';

const Tab = createBottomTabNavigator();

export const BottomStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={
        (({navigation}) => {
          return {
            detachPreviousScreen: !navigation.isFocused(),
          };
        },
        {
          // tabBarActiveBackgroundColor: '#fff',
          tabBarActiveBackgroundColor: Colors.bgColorText,
          tabBarInactiveBackgroundColor: Colors.white,
          // tabBarInactiveBackgroundColor: Colors.colorPrimary,
          headerShown: false,
          // theme: {colors: {background: '#fff'}},
        })
      }
      tabBar={props => (
        <>
          <BottomFabBar
            // eslint-disable-next-line no-bitwise
            // mode={'square' | 'default'}
            mode={'default'}
            isRtl={false}
            // Add Shadow for active tab bar button
            focusedButtonStyle={CmnStyles.focusedBottomBarButtonStyle}
            bottomBarContainerStyle={CmnStyles.bottomBarContainerStyle}
            {...props}
          />
        </>
      )}>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.home}
              style={[
                {tintColor: focused ? Colors.bgColor : Colors.white},
                CmnStyles.bottomBarIcon,
              ]}
            />
          ),
          tabBarActiveTintColor: Colors.white,
        }}
      />
      <Tab.Screen
        name={Screens.Attendance}
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.edit}
              style={[
                {tintColor: focused ? Colors.bgColor : Colors.white},
                CmnStyles.bottomBarIcon,
              ]}
            />
          ),
          tabBarActiveTintColor: Colors.white,
        }}
      />
      <Tab.Screen
        name={Screens.More}
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.more}
              style={[
                {tintColor: focused ? Colors.bgColor : Colors.white},
                CmnStyles.bottomBarIcon,
              ]}
            />
          ),
          tabBarActiveTintColor: Colors.white,
        }}
      />
      <Tab.Screen
        name={Screens.Leave}
        component={LeaveScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.report}
              style={[
                {tintColor: focused ? Colors.bgColor : Colors.white},
                CmnStyles.bottomBarIcon,
              ]}
            />
          ),
          tabBarActiveTintColor: Colors.white,
        }}
      />
      <Tab.Screen
        name={Screens.UserProfile}
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.user}
              style={[
                {tintColor: focused ? Colors.bgColor : Colors.white},
                CmnStyles.bottomBarIcon,
              ]}
            />
          ),
          tabBarActiveTintColor: Colors.white,
        }}
      />
    </Tab.Navigator>
  );
};
