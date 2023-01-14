//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ProductShop = () => {
  return (
    <View style={styles.container}>
      <Text>Fish</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
});

//make this component available to the app
export default ProductShop;
