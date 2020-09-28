import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import Textheader from '../components/textheader';

export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      console.log(user);
      console.log(password);
      const apiLogin = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'https://be-kickin.herokuapp.com/api/v1/user/register',
        data: JSON.stringify({
          name: name,
          email: user,
          password: password,
        }),
      });

      navigation.navigate('Login');
      if ((user = '' || password)) {
        Alert.alert('isi');
      }
      console.log(apiLogin.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../src/wp5594572.png')}
      style={styles.imageBackground}>
      <Text style={styles.header}>Register</Text>
      <View style={styles.container}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          placeholder="Name"
          onChangeText={(name) => setName(name)}
          style={styles.input1}
        />
        <Text style={styles.name}>Username</Text>
        <TextInput
          placeholder="Username"
          onChangeText={(user) => setUser(user)}
          style={styles.input1}
        />
        <Text style={styles.name}>Password</Text>
        <TextInput
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          style={styles.input1}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        title="Go to HOME"
        onPress={() => handleRegister()}>
        <Text>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
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
  input1: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    height: 50,
    marginBottom: 30,
    borderRadius: 30,
    backgroundColor: '#709fb0',
    opacity: 0.5,
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
