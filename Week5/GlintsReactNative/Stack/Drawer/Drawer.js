import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Logout from './Logout';
import Info from './Info';
import Home from '../Home';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  // const SignOut = {
  //   <TouchableOpacity onPress={navigation.navigate("Login")}/>
  // }
  return (
    <Drawer.Navigator initialRouteName="Info">
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
