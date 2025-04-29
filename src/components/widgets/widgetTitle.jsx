import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widgetStyles} from '../../styles/widgetsStyles';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSSCREEN} from '../../utils/routes';

const WidgetTitle = ({title, seeAll, category}) => {
  const navigation = useNavigation();
  return (
    <View style={widgetStyles.widgetContainer}>
      <Text style={widgetStyles.title}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(PRODUCTSSCREEN, {category: category})
          }>
          <Text style={widgetStyles.seeAll}>Tümünü Gör</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default WidgetTitle;
