import {View, FlatList} from 'react-native';
import {widgetStyles} from '../styles/widgetsStyles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllCategories} from '../store/actions/categoriesActions';
import CategoriItem from '../components/widgets/categoriItem';

const Categories = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <View style={widgetStyles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoriItem item={item} />}
      />
    </View>
  );
};

export default Categories;
