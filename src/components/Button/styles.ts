import { StyleSheet } from 'react-native';
import { borderRadius, primaryColour, padding, fontSize } from '../../utils/styles';

export default StyleSheet.create({
  button: {
    backgroundColor: '#CCC',
    borderRadius,
    padding,
  },
  buttonIsPrimary: {
    backgroundColor: primaryColour,
  },
  label: {
    color: '#666',
    fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelIsPrimary: {
    color: '#fff',
  },
});
