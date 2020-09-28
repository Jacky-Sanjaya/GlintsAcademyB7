import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function Homepagebtn(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1} onPress={props.login}>
        <Text>{props.children}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={props.register}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    borderRadius: 15,
    opacity: 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 15,
    width: 200,
    borderRadius: 15,
    opacity: 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  container: {
    alignItems: 'center',
    marginTop: 70,
  },
});
