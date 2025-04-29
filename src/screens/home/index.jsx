import {View, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import widgets from '../../widgets/widget.json';
import ForYou from '../../widgets/forYou';
import BestSeller from '../../widgets/bestSeller';
import Introductions from '../../widgets/introduction';

const HomeScreen = () => {
  const widgetItem = ({item}) => {
    switch (item.name) {
      case 'introduction':
        return <Introductions item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'forYou':
        return <ForYou item={item} />;
    }
  };
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList data={widgets} renderItem={widgetItem} />
    </View>
  );
};

export default HomeScreen;
