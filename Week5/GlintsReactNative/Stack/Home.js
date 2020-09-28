import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Profile from '../BottomTab/Profile';
import Skill from '../BottomTab/Skill';
import Plus from '../BottomTab/Plus';
import Drawers from './Drawer/Drawer.js';
const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Profiles"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'user-circle'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Skills"
        component={Skill}
        options={{
          tabBarLabel: 'Skill',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'book'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pluss"
        component={Plus}
        options={{
          tabBarLabel: 'Plus',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'calendar-plus'} color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
