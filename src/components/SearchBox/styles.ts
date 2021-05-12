import { StyleSheet } from 'react-native';
import { borderColour, fontSize, padding } from '../../utils/styles';

export default StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: borderColour,
    borderWidth: 1,
    flex: 1,
    fontSize: fontSize + 2,
    marginRight: 10,
    padding: padding,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
