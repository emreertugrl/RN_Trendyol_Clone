import {View, Text, ScrollView, Image} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import {useEffect} from 'react';
import Spinner from '../../components/ui/spinner';
import productDetailStyles from '../../styles/productDetailStyle';
import {Star1} from 'iconsax-react-nativejs';
import Button from '../../components/ui/button';

const ProductDetail = ({route}) => {
  const productId = route.params.productId;
  const dispatch = useDispatch();
  const {product, pending} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, [productId]);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <View style={{flex: 1}}>
          <ScrollView>
            <Image
              source={{uri: product.image}}
              style={productDetailStyles.image}
            />
            <Text style={productDetailStyles.title}>{product.title}</Text>
            <Text style={productDetailStyles.category}>{product.category}</Text>
            <Text style={productDetailStyles.description}>
              {product.description}
            </Text>
            <View style={productDetailStyles.rateContainer}>
              <Star1 size={25} variant="Bold" color="orange" />
              <Text style={productDetailStyles.rate}>
                {product?.rating?.rate}
              </Text>
            </View>
          </ScrollView>
          <View style={productDetailStyles.infoContainer}>
            <View style={{flex: 1}}>
              <Text style={productDetailStyles.price}>{product.price} ₺</Text>
            </View>
            <View style={productDetailStyles.buttonContainer}>
              <Button title="Şimdi Al" buttonType="outline" />
              <Button title="Sepete Ekle" buttonType="flat" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductDetail;
