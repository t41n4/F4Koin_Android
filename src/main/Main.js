//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fishshop from '../shop/FishShop';
import ProductShop from '../shop/ProdShop';
import Cart from '../cart/Cart';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

// create a component
const Main = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: 60,
      },
      tabBarShowLabel: false, 
      style: {
        backgroundColor: 'black',
      }
    }}>
      <Tab.Screen name="Fish" component={Fishshop} options={{
        tabBarIcon: ({ focused }) => (
          <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16}}>
            <FontAwesome5 color={focused ? 'blue' : 'black'} size={20} name='fish'></FontAwesome5>
            <Text style={{color: focused ? 'blue' : 'black'}}>Fish</Text>
          </View>
        ),
        headerShown: false, 
        lazy: true
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ focused }) => (
          <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center' , padding: 16}}>
            <Entypo color={focused ? 'blue' : 'black'} size={20} name='shopping-cart'></Entypo>
            <Text style={{color: focused ? 'blue' : 'black'}}>Cart</Text>
          </View>
        ),
        headerShown: false,
        lazy: true
      }} />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Main;
