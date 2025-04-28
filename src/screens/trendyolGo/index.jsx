//import liraries
import {View, Text, StyleSheet} from 'react-native';

// create a component
const TrendyolGoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TrendyolGoScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default TrendyolGoScreen;
