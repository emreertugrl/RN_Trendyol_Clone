import {FlatList, View} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {widgetStyles} from '../styles/widgetsStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../store/actions/productsActions';
import {useEffect} from 'react';
import ProductItem from '../components/products/productItem';

const ForYou = ({item}) => {
  const {forYouProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllProducts({
        category: "women's clothing",
        limit: 4,
      }),
    );
  }, []);
  return (
    <View style={widgetStyles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category={"women's clothing"}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={forYouProducts}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default ForYou;
