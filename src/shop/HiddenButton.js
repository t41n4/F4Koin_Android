//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@ui-kitten/components';
import { baseURL, PostAPINoBody, PostAPIToken } from '../function/CallApi';
import Toast from 'react-native-simple-toast';
// create a component
const HiddenButton = (props) => {
  const { productItem, productItems, closeRow, navigation,rowMap } = props;

  function add_to_cart() {

    let index = productItems.indexOf(productItem)
    if (index > -1) {
      closeRow(rowMap, index)
      console.log('rowMap: ', rowMap)
    }

    console.log(productItem.productID)
    let url = baseURL + `addToCart?productID=${productItem.productID}&quantity=1`
    PostAPINoBody(url).then(res => {
      console.log('res.data', res.data)
      if (res.data.message === 'success') {
        Toast.show('Thêm vào giỏ hàng thành công', Toast.SHORT)
      }
    })
  }
  function view_product() {
    navigation.navigate('ViewItem', productItem)
  }
  return (
    <View style={styles.leftItem}>
      <Button status='success' onPress={add_to_cart} style={{ justifyContent: 'flex-start', flex: 1 }} accessoryLeft={<Ionicons size={20} color={'#fff'} name='add-circle-outline'></Ionicons>}>
      </Button>

      <Button status='danger' onPress={view_product} style={{ justifyContent: 'flex-end', flex: 1 }} accessoryLeft={<Ionicons size={20} color={'#fff'} name='list'></Ionicons>}>
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
export default HiddenButton;
