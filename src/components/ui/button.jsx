import {Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../theme/colors';

const Button = props => {
  const {title, buttonType} = props;
  return (
    <Pressable
      style={[
        styles.container,
        buttonType == 'flat' ? styles.flatButton : styles.outlineButton,
      ]}
      {...props}>
      <Text
        style={[
          styles.title,
          buttonType == 'flat' ? styles.flatTitle : styles.outlineTitle,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 5,
    minHeight: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  flatButton: {
    backgroundColor: Colors.PRIMARY,
  },
  outlineButton: {
    backgroundColor: Colors.WHITE,
  },
  flatTitle: {
    color: Colors.WHITE,
  },
  outlineTitle: {
    color: Colors.PRIMARY,
  },
});

export default Button;
