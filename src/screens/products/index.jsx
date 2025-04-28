import {View, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../../store/actions/productsActions';
import ProductItem from '../../components/products/productItem';
import Spinner from '../../components/ui/spinner';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const {products, pending} = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

export default ProductsScreen;
