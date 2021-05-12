import { StyleSheet } from 'react-native';
import { borderColour, padding, primaryColour } from '../../utils/styles';

export default StyleSheet.create({
  cardWrapper: {
    marginBottom: padding,
  },
  container: {
    padding,
  },
  showInfoButton: {
    borderBottomColor: borderColour,
    borderBottomWidth: 1,
    color: primaryColour,
    fontWeight: 'bold',
    marginBottom: padding,
    paddingVertical: padding,
    textAlign: 'center',
  },
});
