//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ApplicationProvider, Layout, Input, Button } from '@ui-kitten/components';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation'
import Fontisto from 'react-native-vector-icons/Fontisto'
import mainLogo from '../../assets/final.png'
import * as eva from '@eva-design/eva';

// create a component
const Register = ({ navigation }) => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Image source={mainLogo} style={styles.logo}></Image>
        <Text style={styles.register}>Register</Text>
        <View>
          {/* <Input size="lg" variant="underlined" placeholder="Username" InputLeftElement={<Entypo name='user' style={styles.leftIcon} />} />
          <Input size="lg" variant="underlined" placeholder="Full Name" InputLeftElement={<Fontisto name='person' style={styles.leftIcon} />} />
          <Input size="lg" variant="underlined" placeholder="Telephone" InputLeftElement={<Foundation name='telephone' style={styles.leftIcon} />} />
          <Input size="lg" variant="underlined" placeholder="Email" InputLeftElement={<Entypo name='email' style={styles.leftIcon} />} />
          <Input style={styles.password} size="lg" variant="underlined" placeholder="Password" type='password' InputLeftElement={<Entypo name='lock' style={[styles.leftIcon, styles.password]} />} />
          <Input style={styles.password} size="lg" variant="underlined" placeholder="Confirm Password" type='password' InputLeftElement={<Entypo name='lock' style={[styles.leftIcon, styles.password]} />} /> */}
        </View>
        {/* <Button
          onPress={() => {
            console.log('hello')
          }}
          borderRadius={12}
          marginTop={4}
          colorScheme='blue'
          fontWeight={'bold'}
        >
          Register
        </Button> */}
        <Text style={styles.return}>Already has an account ? <Text style={styles.textLogin} onPress={() => {
          navigation.navigate('Login')
        }}>Log In</Text></Text>
      </View>
    </ApplicationProvider >
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginHorizontal: 40
  },
  logo: {
    width: '100%'
  },
  register: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 16
  },
  leftIcon: {
    marginRight: 8,
  },
  password: {
    marginTop: 0
  },
  return: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 6
  },
  textLogin: {
    color: '#0165fe',
    fontWeight: 'bold'
  }
});

//make this component available to the app
export default Register;
