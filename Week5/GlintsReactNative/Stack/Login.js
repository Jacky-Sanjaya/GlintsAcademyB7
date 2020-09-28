import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import axios from 'axios';
import Textheader from '../components/textheader';

export default function LoginIndex({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(user);
      console.log(password);
      const apiLogin = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'https://be-kickin.herokuapp.com/api/v1/user/login',
        data: JSON.stringify({
          email: user,
          password: password,
        }),
      });

      navigation.navigate('Home');

      console.log(apiLogin.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../src/wp5594572.png')}
      style={styles.imageBackground}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.container}>
        <Text style={styles.name}>Username</Text>
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(user) => setUser(user)}
          textContentType="username"
          style={styles.input1}
        />
        <Text style={styles.name}>Password</Text>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
          autoCompleteType="password"
          style={styles.input2}
        />
      </View>
      <TouchableOpacity style={styles.login} onPress={() => handleLogin()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {},
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    height: 50,
    marginBottom: 30,
    borderRadius: 30,
  },
  input2: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    height: 50,
    marginBottom: 30,
    borderRadius: 30,
  },
  login: {
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
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    color: '#3c3c3c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
});
