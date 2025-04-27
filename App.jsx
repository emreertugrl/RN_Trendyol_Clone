import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
