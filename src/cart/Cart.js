//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, Alert } from 'react-native';
import { ApplicationProvider, Layout, Input, Button, Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { baseURL, GetAPINoToken, GetAPIToken, PostAPINoBody, PostAPIToken } from '../function/CallApi';
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from './CartItem';
import DeleteButton from './DeleteBtn';
import { AsyncStorage } from 'react-native';
// GÁN KEY VÀO CHO MẤY CÁI ITEM TRONG CARTITEMS ROWMAP CẦN MẤY CÁI KEY ĐÓ ĐỂ NHẬN SWIPEROW
// create a component
const Cart = ({ navigation }) => {

  const [cartItems, setCartItems] = useState([])
  const [cartID, setCartID] = useState('')

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      let url = baseURL + 'getCart'
      GetAPIToken(url).then(res => {
        if (res.data.message === 'success') {
          // set key for cartItems
          for (let i = 0; i < res.data.cart.length; i++) {
            res.data.cart[i].key = `${i}`
          }
          setCartItems(res.data.cart)
          console.log('type of res.data.cart: ', (res.data.cart))
          console.log('cartItems: ', cartItems)
          setCartID(res.data.cart[0].cartID)

        }
        else {
          setCartItems([])
        }
      })
      setRefreshing(false)
    });
  }, []);

  let storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error)
    }
  };

  async function create_bill() {
    let products = await AsyncStorage.getItem('checkedProduct');
    let ids = ''
    if (products !== null) {
      products = JSON.parse(products)
      ids = products.join(',')
    }
    console.log('ids: ', ids)
    let url = baseURL + 'createPreOrder'
    let body = {
      cart_id: cartID,
      product_id: ids
    }
    console.log(body)
    PostAPIToken(url, body).then(res => {
      console.log('createPreOrder: ', res.data)
      if (res.data.message === 'success') {
        navigation.navigate('Bill', {
          billID: res.data.recent_order
        })
      }
    })
  }
  async function delete_all() {
    try {
      Alert.alert(
        'Delete all',
        'Are you sure to delete all items ?',
        [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel"
          },
          {
            text: "OK", onPress: () => {
              for (let i = 0; i < cartItems.length; i++) {
                // console.log(value[i])
                let url = baseURL + "deleteFromCart?productID=" + cartItems[i].productID + "&quantity=" + cartItems[i].quantity
                try {
                  PostAPINoBody(url).then(res => {
                    console.log(res.data)
                    if (res.data.message === 'success') {
                      alert('Deleted All Items Successfully')
                    }
                    else {
                      alert('Somethings wrong, try again later')
                    }
                  }).catch(error => alert('Somethings wrong, try again later \n Error Code: ' + error))
                } catch (error) {
                  alert('Xóa các sản phẩm thất bại')
                }
              }
              setCartItems([])
            },
            style: 'default'
          }
        ]
      )
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    storeData('checkedProduct', JSON.stringify([]))
    storeData('quantities', JSON.stringify([]))
    let url = baseURL + 'getCart'
    GetAPIToken(url).then(res => {
      if (res.data.message === 'success') {
        setCartItems(res.data.cart)
        setCartID(res.data.cart[0].cartID)
      }
    })
  }, [])
  function updateData(index) {
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
  }
  function closeRow(rowMap, rowKey) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
    // console.log('rowKey: ',rowKey)
    // console.log('rowMap: ',rowMap)
    // console.log('cartItems: ', cartItems)
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Text style={styles.header}>Cart</Text>
        <Text style={styles.countProduct}>{(cartItems.length)} Product</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight: 8 }}>
          <Button onPress={async () => await delete_all()} status='danger'>Delete All</Button>
        </View>
        <SwipeListView
          data={cartItems}
          renderHiddenItem={(data, rowMap) => (
            <DeleteButton cartItems={cartItems} cartItem={data.item} updateData={updateData} rowMap={rowMap} closeRow={closeRow} ></DeleteButton>
          )}
          renderItem={(data) => (<CartItem props={data.item}></CartItem>)}
          leftOpenValue={65}
          rightOpenValue={-65}
          disableLeftSwipe={true}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
        <View style={{ marginBottom: 8 }}>
          <Button onPress={create_bill} status='primary'>Go to Pay</Button>
        </View>
      </View>
    </ApplicationProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#aaa'
  },
  countProduct: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FF4538',
    marginTop: 12
  }
});

//make this component available to the app
export default Cart;
