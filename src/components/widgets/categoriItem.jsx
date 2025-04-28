import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slice/categoriesSlice';
import Colors from '../../theme/colors';

const CategoriItem = ({item}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);

  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(item))}
      style={[
        styles.container,
        {
          backgroundColor:
            selectedCategory === item ? Colors.PRIMARY : Colors.WHITE,
        },
      ]}>
      <Text
        style={{
          color: selectedCategory === item ? Colors.WHITE : Colors.BLACK,
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 100,
    marginHorizontal: 5,
  },
});
export default CategoriItem;
