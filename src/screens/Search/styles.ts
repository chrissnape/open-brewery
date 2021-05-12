import { StyleSheet } from 'react-native';
import { primaryColour, padding, fontSize, secondaryColour } from '../../utils/styles';

export default StyleSheet.create({
  cardWrapper: {
    marginBottom: padding,
  },
  container: {
    padding,
  },
  queryString: {
    color: primaryColour,
    fontSize: fontSize + 2,
    fontWeight: 'bold',
    marginRight: 10,
  },
  clearQueryString: {
    color: secondaryColour,
    fontSize: fontSize,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  searchBoxWrapper: {
    padding,
    paddingBottom: 0,
  },
  queryWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding,
  },
});
