import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import Homepagebtn from '../components/homepagebtn';
import Textheader from '../components/textheader';
import Register from './Register';

export default function Intro({navigation}) {
  const LoginPage = () => {
    navigation.navigate('Login');
  };
  const RegisterPage = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../src/wp5594572.png')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <Textheader />
      </View>
      <Homepagebtn login={LoginPage} register={RegisterPage}>
        Login
      </Homepagebtn>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {},
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});
