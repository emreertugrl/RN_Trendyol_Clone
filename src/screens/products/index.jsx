import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useEffect} from 'react';
import Colors from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../../store/actions/productsActions';
import ProductItem from '../../components/products/productItem';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const {products, pending} = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={Colors.GRAY} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

export default ProductsScreen;
