//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ApplicationProvider, Layout, Input, Button, Icon } from '@ui-kitten/components';
import Item from './Item';
import HiddenButton from './HiddenButton';
import * as eva from '@eva-design/eva';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { baseURL, GetAPINoToken } from '../function/CallApi';
import { SwipeListView } from 'react-native-swipe-list-view';

// create a component
const Fishshop = ({ navigation }) => {

  const [prods, setProds] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    let url = baseURL + 'getOnlyFish?page=' + currentPage
    GetAPINoToken(url).then(res => {
      // set key for each item
      for (let i = 0; i < res.data.product.data.length; i++) {
        res.data.product.data[i].key = `${i}`
      }
      setProds(res.data.product.data)
      setLastPage(lastPage => res.data.product.last_page)
      // console.log('lastPage: ', lastPage)
      // console.log('res.data.product.last_page: ', res.data.product.last_page)
    }).catch(err => console.log(err))
  }, [lastPage])

  async function loadMoreItems() {
    // Fetch more items from the API
    if (lastPage >= currentPage) {
      let url = baseURL + 'getOnlyFish?page=' + (currentPage + 1)
      await GetAPINoToken(url).then(res => {
        let myArray = Object.values(res.data.product.data);
        for (let i =0; i <  myArray.length ; i++) {
          myArray[i].key = `${i + prods.length}`
        }
        console.log('myArray: ', myArray)

        setProds([...prods, ...myArray])
        setCurrentPage(currentPage => currentPage + 1)
        console.log('prods: ', prods)
        // console.log('page: ', currentPage)
        // console.log('lastpage: ', lastPage)
      }).catch(err => console.log(err))
    }
    else {
      console.log('No more items')
    }
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
        <Text style={styles.header}>Fish Shop</Text>
        <Input style={{ marginTop: 12 }} accessoryRight={<Ionicons size={24} style={{ display: 'center', justifyContent: 'center', alignItems: 'center' }} name='search' />} placeholder='Search Fish'></Input>
        <SwipeListView
          data={prods}
          renderItem={(data) => (
            <Item props={data.item}></Item>
          )}
          renderHiddenItem={(data, rowMap) => (
            <HiddenButton navigation={navigation} productItem={data.item} productItems={prods} closeRow = {closeRow} rowMap={rowMap}></HiddenButton>
          )}
          leftOpenValue={65}
          rightOpenValue={-65}
          onEndReached={loadMoreItems}
        />
      </View>
    </ApplicationProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#aaa'
  },
  leftItem: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#59C1BD'
  }
});

//make this component available to the app
export default Fishshop;
