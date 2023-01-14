// //import liraries
// import React, { Component, useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, Modal } from 'react-native';
// import { baseURL, GetAPIToken, PostAPINoToken, PostAPIToken } from '../function/CallApi';
// import { MoneyFormat, Multiply } from '../function/DataFormat';
// import mainLogo from '../../assets/final.png'
// import paypalPic from '../../assets/PayPal.svg.png'
// import { ApplicationProvider, Button } from '@ui-kitten/components';
// import * as eva from '@eva-design/eva';
// import WebView from 'react-native-webview';

// // create a component
// const PayFail = ({ route }) => {
//   const { billID } = route.params

//   const [order, setOrder] = useState({})
//   const [items, setItems] = useState([])
//   const [link, setLink] = useState([])
//   const [modalVisible, setModalVisible] = useState(false);



//   return (
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <Modal
//         animationType="slide"
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <WebView source={{ uri: link }}></WebView>
//       </Modal>
//       <View style={styles.container}>
//         <Text style={{
//           fontWeight: 'bold',
//           fontSize: 24,
//           color: '#aaa'
//         }}>Payment</Text>
//         <Text>Bill number - {billID}</Text>
//         <View style={styles.bill}>
//           <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 12 }}>
//             <Image style={{ width: 75, height: 75, marginRight: 12, borderRadius: 5 }} source={mainLogo}></Image>
//             <View>
//               <Text style={{ marginBottom: 8, fontWeight: '500' }}>F4Koin</Text>
//               <Text style={{ opacity: 0.5, fontSize: 8 }}>{order.create_at}</Text>
//             </View>
//           </View>
//           {items.map(item => {
//             return (
//               <View style={{ marginHorizontal: 12, marginVertical: 4 }}>
//                 <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text>{item.productName} x {item.quantity}</Text>
//                   <Text>{Multiply(item.productPrice, item.quantity)} đ</Text>
//                 </View>
//               </View>
//             )
//           })}
//           <Text style={{ margin: 12, fontSize: 18, fontWeight: '700' }}>Total: {order.order_tinhtien} đ</Text>
//           {/* { console.log(order.item_in_order)} */}
//         </View>
//         <View style={{ marginTop: 8 }}>
//           <Button onPress={setPay} style={styles.button} appearance='outline' status='info'>Pay With Paypal</Button>
//           <Button onPress={setPayMomo} style={styles.button} appearance='outline' status='info'>Pay With Momo</Button>
//           {/* <Image style={{ width: 350, height: 90, marginTop: 20 }} source={paypalPic}></Image> */}
//         </View>
//       </View>
//     </ApplicationProvider>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     marginHorizontal: 20,
//   },
//   bill: {
//     borderRadius: 9,
//     shadowColor: 'black',
//     shadowOpacity: 0.26,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//     backgroundColor: 'white',
//     marginTop: 20
//   }
// });

// //make this component available to the app
// export default PayFail;
