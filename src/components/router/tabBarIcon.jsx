import {
  CARTSCREEN,
  FAVORİTESSCREEN,
  HOMESCREEN,
  PROFILESCREEN,
  TRENDYOLGOSCREEN,
} from '../../utils/routes';
import {
  Heart,
  Home,
  Polygon,
  Profile,
  ShoppingCart,
} from 'iconsax-react-nativejs';
const TabBarIcon = ({name, size, focused, color}) => {
  switch (name) {
    case HOMESCREEN:
      return <Home size={size} color={color} variant={focused && 'Bold'} />;
    case TRENDYOLGOSCREEN:
      return <Polygon size={size} color={color} variant={focused && 'Bold'} />;
    case CARTSCREEN:
      return (
        <ShoppingCart size={size} color={color} variant={focused && 'Bold'} />
      );
    case FAVORİTESSCREEN:
      return <Heart size={size} color={color} variant={focused && 'Bold'} />;
    case PROFILESCREEN:
      return <Profile size={size} color={color} variant={focused && 'Bold'} />;

    default:
      return <Home size={size} color={color} variant={focused && 'Bold'} />;
  }
};

export default TabBarIcon;
