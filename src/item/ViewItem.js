//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Discount, MoneyFormat } from '../function/DataFormat';
import { ApplicationProvider, Layout, Input, Button, Icon } from '@ui-kitten/components';
import { PostAPINoBody, baseURL } from '../function/CallApi';
import * as eva from '@eva-design/eva';
import Toast from 'react-native-simple-toast';
// create a component
const ViewItem = ({ route }) => {
  const props = route.params
  // console.log(props)

  function add_to_cart() {
    Toast.show('Thêm vào giỏ hàng thành công', Toast.SHORT)
    let url = baseURL + `addToCart?productID=${props.productID}&quantity=1`
    PostAPINoBody(url).then(res => { console.log(res.data) })
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ScrollView vertical={true} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image resizeMode='stretch' style={styles.image} source={{ uri: props.imageUrl }}></Image>
          <View style={styles.info}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, fontWeight: '600' }}>{props.productName}</Text>
              <View style={{}}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>{Discount(props.productPrice, props.productDiscount)}đ</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={{ fontSize: 16, color: '#6ECCAF', textAlign: 'right', marginRight: 8 }}>-{props.productDiscount}%</Text>
                  <Text style={{ fontSize: 16, color: '#ccc', textDecorationLine: 'line-through', textAlign: 'right' }}>{MoneyFormat(props.productPrice)}đ</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 18 }}>
              <Text style={{ fontSize: 16, color: '#aaa', fontWeight: '600' }}>Product Detail</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                <Text style={[styles.smallInfo, { backgroundColor: '#6ECCAF' }]}>Born: {props.productBorn}</Text>
                <Text style={[styles.smallInfo, { backgroundColor: '#009EFF' }]}>{props.productSize} cm</Text>
                <Text style={[styles.smallInfo, { backgroundColor: '#FF8B8B' }]}>{props.productSex}</Text>
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ fontSize: 16, color: '#aaa', fontWeight: '600' }}>Product Description</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', textAlign: 'justify', lineHeight: 16, marginTop: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur, nisi nec suscipit imperdiet, lacus arcu posuere quam, quis porta nunc odio sit amet nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc consequat lobortis semper. Praesent imperdiet tincidunt magna, at molestie lectus varius a</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>
              <Text style={styles.textWithOutline}>Left in storage: {props.productInventory}</Text>
            </View>
            <Button onPress={add_to_cart} appearance='outline' status='info' style={{marginTop: 8}}>Add to Cart</Button>
          </View>
        </View >
      </ScrollView>
    </ApplicationProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%', height: 400
  },
  info: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  smallInfo: {
    color: 'white',
    fontWeight: '500',
    padding: 8,
    borderRadius: 50,
    borderColor: '#aaa',
    borderWidth: 0.1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    width: 110,
    textAlign: 'center'
  },
  textWithOutline: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 16,
    color: '#444',
    fontWeight: '300'
  }
});

//make this component available to the app
export default ViewItem;
