import {ActivityIndicator, View} from 'react-native';
import Colors from '../../theme/colors';

const Spinner = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={Colors.GRAY} size={'large'} />
    </View>
  );
};

export default Spinner;
