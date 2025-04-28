import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../utils/constants';
import Colors from '../theme/colors';

const productItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth / 2 - 10,
    height: screenWidth * 0.7,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
  },
  image: {
    width: screenWidth / 3,
    height: screenHeight / 5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
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
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  rate: {
    color: Colors.PRIMARY,
  },
  heart: {
    position: 'absolute',
    right: 3,
    borderRadius: 10,
    top: 3,
    padding: 2,
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
});

export default productItemStyles;
