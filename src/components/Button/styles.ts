import { StyleSheet } from 'react-native';
import { borderRadius, primaryColour, padding, fontSize } from '../../utils/styles';

export default StyleSheet.create({
  button: {
    backgroundColor: primaryColour,
    borderRadius,
    padding,
  },
  label: {
    color: '#fff',
    fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
