import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

export const widgetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginVertical: 10,
  },
  widgetContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
  },
  seeAll: {
    fontSize: 16,
    color: Colors.PRIMARY,
  },
  image: {width: 400, height: 200, resizeMode: 'contain', borderRadius: 10},
});
