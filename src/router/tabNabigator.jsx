import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import {
  CARTSCREEN,
  FAVORİTESSCREEN,
  HOMESCREEN,
  MESSAGESSCREEN,
  NOTIFICATIONSSCREEN,
  PROFILESCREEN,
  TRENDYOLGOSCREEN,
} from '../utils/routes';
import ProfileScreen from '../screens/profile';
import TrendyolGoScreen from '../screens/trendyolGo';
import FavoriteScreen from '../screens/favorittes';
import CartScreen from '../screens/cart';
import TabBarIcon from '../components/router/tabBarIcon';
import Colors from '../theme/colors';
import {Notification, Sms} from 'iconsax-react-nativejs';
import {Pressable, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginRight: 15,
            }}>
            <Pressable>
              <Sms
                onPress={() => navigation.navigate(MESSAGESSCREEN)}
                size={28}
                color={Colors.BLACK}
              />
            </Pressable>
            <Pressable>
              <Notification
                onPress={() => navigation.navigate(NOTIFICATIONSSCREEN)}
                size={28}
                color={Colors.BLACK}
              />
            </Pressable>
          </View>
        ),

        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabBarIcon
              name={route.name}
              size={size}
              focused={focused}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGOSCREEN} component={TrendyolGoScreen} />
      <Tab.Screen name={CARTSCREEN} component={CartScreen} />
      <Tab.Screen name={FAVORİTESSCREEN} component={FavoriteScreen} />
      <Tab.Screen name={PROFILESCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
