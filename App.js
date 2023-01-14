import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Login from './src/auth/login';
import Register from './src/auth/register';
import Main from './src/main/Main';
import ViewItem from './src/item/ViewItem';
import Bill from './src/payment/Payment';
import Cart from './src/cart/Cart';
import Fishshop from './src/shop/FishShop';

import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createStackNavigator();

export default function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{
        cardStyle: {
          backgroundColor: '#fff'
        }, 
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
        <Stack.Screen name="ViewItem" component={ViewItem} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
        <Stack.Screen name="Bill" component={Bill} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
        <Stack.Screen name="Fishshop" component={Fishshop} options={{ headerShown: false, statusBarStyle: 'light', statusBarHidden: true, statusBarAnimation: 'slide' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
