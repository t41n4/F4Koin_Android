//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import mainLogo from '../../assets/final.png'
import { MoneyFormat } from '../function/DataFormat';
import { Discount } from '../function/DataFormat';
import NumericInput from 'react-native-numeric-input'
import { CheckBox } from '@ui-kitten/components';
import { AsyncStorage } from 'react-native';



// create a component
const CartItem = ({ props }) => {

  const [checked, setChecked] = React.useState(false);

  async function setPay() {
    try {
      let products = await AsyncStorage.getItem('checkedProduct');
      let quantities = await AsyncStorage.getItem('quantities');
      if (products !== null && quantities !== null) {
        products = JSON.parse(products)
        quantities = JSON.parse(quantities)
        products = [...products, props.productID]
        quantities = [...quantities, props.quantity]
        // console.log(value)
        try {
          await AsyncStorage.setItem('checkedProduct', JSON.stringify(products));
          await AsyncStorage.setItem('quantities', JSON.stringify(quantities));
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  async function removeFromPay() {
    try {
      let value = await AsyncStorage.getItem('checkedProduct');
      let quantities = await AsyncStorage.getItem('quantities');
      if (value !== null && quantities !== null) {
        value = JSON.parse(value)
        quantities = JSON.parse(quantities)
        // console.log("Now:" + value)
        // console.log("Now:" +quantities)
        let indexV = value.indexOf(props.productID)
        // console.log(indexV)
        if (indexV > -1) { 
          value.splice(indexV, 1);
          // console.log("After:" +value)
          quantities.splice(indexV, 1)
          // console.log("After:" +quantities)
        }
        // console.log(value)
        try {
          await AsyncStorage.setItem('checkedProduct', JSON.stringify(value));
          await AsyncStorage.setItem('quantities', JSON.stringify(quantities));
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
        onChange={nextChecked => {
          setChecked(nextChecked)
          if (nextChecked === true) {
            setPay()
          }
          else {
            // console.log('unchecked')
            removeFromPay()
          }
        }}
        style={{marginRight: 8}}
      >
      </CheckBox>
      <Image style={styles.itemImage} source={{ uri: props.imageUrl }} />
      <View style={styles.info}>
        <Text style={{ color: '#263238', fontWeight: 'bold' }}>{props.productName}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ textDecorationLine: props.productDiscount !== 0 ? 'line-through' : 'none', opacity: 0.2, fontSize: 12, marginRight: 8 }}>{MoneyFormat(props.productPrice)}đ</Text>
          <Text style={{ display: props.productDiscount !== 0 ? 'flex' : 'none' }}>{Discount(props.productPrice, props.productDiscount)}đ</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text status='danger' style={{ marginRight: 8 }}>-{props.productDiscount}%</Text>
          <Text status='success' style={{ marginRight: 8 }}>{props.productSize}cm</Text>
          <Text status='primary' style={{ marginRight: 8 }}>{props.productSex}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 4
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 6
  },
  info: {
    marginLeft: 8
  }
});

//make this component available to the app
export default CartItem;
