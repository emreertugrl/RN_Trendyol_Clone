import {View, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../../components/products/productItem';
import Spinner from '../../components/ui/spinner';
import Categories from '../../widgets/categories';
import {useEffect} from 'react';
import {getAllProducts} from '../../store/actions/productsActions';

const ProductsScreen = ({route}) => {
  const category = route?.params?.category;
  const {products, pending} = useSelector(state => state.products);
  const {selectedCategory} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllProducts({category: category ? category : selectedCategory}),
    );
  }, [selectedCategory]);
  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          ListHeaderComponent={!category && <Categories />}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

export default ProductsScreen;
