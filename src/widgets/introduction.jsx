import {View, Image, Pressable} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {widgetStyles} from '../styles/widgetsStyles';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSSCREEN} from '../utils/routes';

const Introductions = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={widgetStyles.container}>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      <View>
        <Pressable onPress={() => navigation.navigate(PRODUCTSSCREEN)}>
          <Image
            source={{
              uri: 'https://cdn.dsmcdn.com/ty1651/pimWidgetApi/mobile_20250320085814_evkupon.jpg',
            }}
            style={widgetStyles.image}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Introductions;
