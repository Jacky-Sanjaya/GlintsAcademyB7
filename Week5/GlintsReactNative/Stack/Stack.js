import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './Intro';
import LoginIndex from './Login';
import Register from './Register';
import Home from './Home';
import Drawers from './Drawer/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={LoginIndex} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Drawers" component={Drawers} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
