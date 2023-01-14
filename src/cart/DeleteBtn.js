//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@ui-kitten/components';
import { baseURL, PostAPINoBody, PostAPIToken } from '../function/CallApi';

// create a component
const DeleteButton = (props) => {
  const { cartItems, cartItem, updateData, rowMap, closeRow } = props;

 

  function handleChange() {
    // remove the item from cartItems
    let index = cartItems.indexOf(cartItem)
    if (index > -1) {
      closeRow(rowMap, index)
      updateData(index);
      console.log('rowMap: ', rowMap)
    }
    console.log('cartItems: ', cartItems)
  }
  function click() {
    handleChange()
    let url = baseURL + "deleteFromCart?productID=" + cartItem.productID + "&quantity=" + cartItem.quantity
    try {
      PostAPINoBody(url).then(res => {
        console.log(res.data)
        if (res.data.message === 'success') {
          handleChange()
          alert('Deleted Item Successfully')
        }
        else {
          alert('Somethings wrong, try again later')
        }
      }).catch(error => alert('Somethings wrong, try again later \n Error Code: ' + error))

    } catch (error) {
      alert('Delete Failed')
      console.log(error)
    }
  }
  return (
    <View style={styles.leftItem}>
      <Button status='danger' onPress={click} style={{ justifyContent: 'flex-start', flex: 1 }} accessoryLeft={<Ionicons size={20} color={'#fff'} name='trash-outline'></Ionicons>}>
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',

  },
  leftItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 8,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    // backgroundColor: '#59C1BD'
  }
});

//make this component available to the app
export default DeleteButton;
