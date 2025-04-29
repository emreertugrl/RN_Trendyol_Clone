import {FlatList, View} from 'react-native';
import {widgetStyles} from '../styles/widgetsStyles';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getAllProducts} from '../store/actions/productsActions';
import {useEffect} from 'react';

const BestSeller = ({item}) => {
  const {bestSellerProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllProducts({
        category: "men's clothing",
        limit: 4,
      }),
    );
  }, []);

  return (
    <View style={widgetStyles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category={"men's clothing"}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSellerProducts}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default BestSeller;
