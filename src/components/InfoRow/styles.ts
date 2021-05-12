import { StyleSheet } from 'react-native';
import { primaryColour, fontSize } from '../../utils/styles';

export default StyleSheet.create({
  keyLabel: {
    color: primaryColour,
    flex: 1,
    fontSize: fontSize,
    fontWeight: 'bold',
  },
  label: {
    flex: 2,
    fontSize: fontSize,
  },
  row: {
    flexDirection: 'row',
  },
});
