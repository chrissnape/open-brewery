import { StyleSheet } from 'react-native';
import { borderColour, borderWidth, primaryColour, padding, fontSize } from '../../utils/styles';

export default StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: borderColour,
    borderWidth,
    flexDirection: 'row',
    padding,
    width: '100%',
  },
  cardIsFavourite: {
    backgroundColor: '#defaff',
    borderColor: '#70cfe0',
  },
  icon: {
    color: primaryColour,
    fontSize: 50,
  },
  title: {
    color: primaryColour,
    fontWeight: 'bold',
    fontSize: fontSize + 4,
    marginBottom: 5,
  },
});
