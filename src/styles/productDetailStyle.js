import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../utils/constants';
import Colors from '../theme/colors';

const productDetailStyles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight * 0.3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  category: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.GRAY,
  },
  description: {
    fontSize: 20,
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.GRAY,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  price: {
    color: Colors.PRIMARY,
    fontWeight: '500',
    fontSize: 25,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rate: {
    fontSize: 25,
    color: Colors.PRIMARY,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default productDetailStyles;
