//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import mainLogo from '../../assets/final.png'
import { MoneyFormat } from '../function/DataFormat';
import { Discount } from '../function/DataFormat';


// create a component
const Item = ({ props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.itemImage} source={{ uri: props.imageUrl }} />
      <View style={styles.info}>
        <Text style={{ color: '#263238', fontWeight: 'bold' }}>{props.productName}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ textDecorationLine: props.productDiscount !== 0 ? 'line-through' : 'none', opacity: 0.2, fontSize: 12, marginRight: 8 }}>{MoneyFormat(props.productPrice)}đ</Text>
          <Text style={{ display: props.productDiscount !== 0 ? 'flex' : 'none' }}>{Discount(props.productPrice, props.productDiscount)}đ</Text>
        </View>
        <View style={{display: 'flex', flexDirection:'row'}}>
          <Text status='danger' style={{marginRight: 8}}>-{props.productDiscount}%</Text>
          <Text status='success' style={{marginRight: 8}}>{props.productSize}cm</Text>
          <Text status='primary' style={{marginRight: 8}}>{props.productSex}</Text>
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
    borderRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
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
export default Item;
