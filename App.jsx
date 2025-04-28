import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import RootNavigator from './src/router/rootNavigator';
import {store} from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
