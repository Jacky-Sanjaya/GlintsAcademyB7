import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.about}>About Me</Text>

      <Image style={styles.image} source={require('../src/MYSELF.jpeg')} />
      <Text style={styles.name}>Jacky Sanjaya</Text>
      <Text style={styles.name1}>Junior React Native Developer</Text>
      <View style={styles.container1}>
        <Text style={styles.portofolio}>Portofolio</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <FontAwesome5 name={'gitlab'} size={50} />
            <Text style={styles.text}>@Jacky-Sanjaya</Text>
          </View>
          <View>
            <FontAwesome5 name={'github'} size={50} />
            <Text style={styles.text}>@Kykho3</Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View
          style={{
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.contact}>Contact Me</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <FontAwesome5 name="instagram" size={50} />

          <FontAwesome5 name="twitter" size={50} />

          <FontAwesome5 name="linkedin" size={50} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.text}>@jackykho3</Text>
          <Text style={styles.text}>@JackySanjaya5</Text>
          <Text style={styles.text}>@Jacky Sanjaya</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  about: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#634240',
  },
  name: {
    fontSize: 30,
  },
  name1: {
    fontSize: 15,
  },
  portofolio: {
    fontSize: 20,
  },
  container1: {
    width: 400,
    height: 125,
    borderRadius: 10,
    backgroundColor: '#007aff',
    marginTop: 10,
    marginBottom: 20,
  },
  container2: {
    width: 400,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#007aff',
  },
  contact: {
    fontSize: 20,
  },

  text: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Profile;
