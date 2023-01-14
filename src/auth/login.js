//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { ApplicationProvider, Layout, Input, Button, Spinner } from '@ui-kitten/components';
import Entypo from 'react-native-vector-icons/Entypo';
import mainLogo from '../../assets/final.png'
import { baseURL, PostAPINoToken } from '../function/CallApi';
import { AsyncStorage } from 'react-native';
import * as eva from '@eva-design/eva';
// create a component
const Login = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPressed, setIsPress] = useState(false)
  const [trying, setTrying] = useState(false)

  let storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Image source={mainLogo} style={styles.logo}></Image>
        <Text style={styles.login}>Login</Text>
        <View>
          <View style={styles.label}>
            <Entypo name='user'></Entypo>
            <Text> Username</Text>
          </View>
          <Input onChangeText={e => setUsername(e)} placeholder="e.g: oldslowhand" style={styles.input} />
          <View style={styles.label}>
            <Entypo name='lock'></Entypo>
            <Text> Password</Text>
          </View>
          <Input secureTextEntry={true} onChangeText={e => setPassword(e)} style={styles.input} placeholder="••••••••" textStyle='password' />
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <Button
          style={styles.loginBtn}
          onPress={() => {
            setIsPress(!isPressed)
            setTrying(!trying)
            let body = {
              username: username,
              password: password
            }
            let url = baseURL + 'login'
            try {
              PostAPINoToken(url, body).then(res => {
                storeData('jwt', res.data.token.slice(2))
                if (res.data.message === 'Login success') {
                  navigation.navigate('Main')
                }
                else {
                }
              }).catch(error => {
                alert('Wrong Username or Password')
                setIsPress(false)
              })
            } catch (error) {
              setIsPress(false)
            }
          }}
        >
          {isPressed ? <ActivityIndicator size="small" color="#fff" /> : 'Login'}
        </Button>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: '#ccc' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('Register')
          }}
          borderRadius={12}
          colorScheme='blue'
          fontWeight={'bold'}
        >
          Register
        </Button>
      </View>
    </ApplicationProvider >

  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginHorizontal: 40,
    backgroundColor: '#fff'
  },
  logo: {
    width: '100%',
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 8
  },
  forgotPassword: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: '#0165fe'
  },
  password: {
    marginTop: 16
  },
  loginBtn: {
    marginTop: 8
  },
  input: {
    marginVertical: 8
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  }
});

//make this component available to the app
export default Login;
