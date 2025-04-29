import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MESSAGESSCREEN,
  NOTIFICATIONSSCREEN,
  PRODUCTDETAILSSCREEN,
  PRODUCTSSCREEN,
  TABMENU,
} from '../utils/routes';
import TabNavigator from './tabNabigator';
import NotificationsScreen from '../screens/notifications';
import MessagesScreen from '../screens/messages';
import ProductsScreen from '../screens/products';
import ProductDetail from '../screens/products/productDetail';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABMENU}
        component={TabNavigator}
      />
      <Stack.Screen
        name={NOTIFICATIONSSCREEN}
        component={NotificationsScreen}
      />
      <Stack.Screen name={MESSAGESSCREEN} component={MessagesScreen} />
      <Stack.Screen name={PRODUCTSSCREEN} component={ProductsScreen} />
      <Stack.Screen name={PRODUCTDETAILSSCREEN} component={ProductDetail} />
    </Stack.Navigator>
  );
}
