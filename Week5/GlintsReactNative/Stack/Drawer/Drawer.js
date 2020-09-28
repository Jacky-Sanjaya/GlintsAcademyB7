import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Logout from './Logout';
import Info from './Info';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator initialRouteName="Info">
      <Drawer.Screen name="Info" component={Info} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
