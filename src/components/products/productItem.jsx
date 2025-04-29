import {Pressable, Image, Text, View} from 'react-native';
import productItemStyles from '../../styles/productItemStyle';
import {Heart, Star1} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAILSSCREEN} from '../../utils/routes';

const ProductItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTDETAILSSCREEN, {productId: item.id})
      }
      style={productItemStyles.container}>
      <Image source={{uri: item.image}} style={productItemStyles.image} />
      <Text style={productItemStyles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={productItemStyles.infoContainer}>
        <Text style={productItemStyles.price}>{item.price} ₺</Text>
        <View style={productItemStyles.rateContainer}>
          <Star1 size={17} variant="Bold" color="orange" />
          <Text style={productItemStyles.rate}>{item.rating.rate}</Text>
        </View>
      </View>
      <View style={productItemStyles.heart}>
        <Heart variant="" color="red" size={25} />
      </View>
    </Pressable>
  );
};

export default ProductItem;
