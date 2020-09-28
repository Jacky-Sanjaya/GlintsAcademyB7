import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function Textheader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Astro</Text>
      <Text style={styles.text2}>Start your amazing journey now!</Text>
      <Image
        source={require('../src/kindpng_155742.png')}
        style={styles.icon}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 65,
    color: '#3c3c3c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text2: {
    textAlign: 'center',
  },
  icon: {
    width: 115,
    height: 123,
    alignSelf: 'center',
    marginTop: 40,
  },
  container: {
    paddingTop: 125,
  },
});
