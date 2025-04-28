import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import RootNavigator from './src/router/rootNavigator';

export default function App() {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
