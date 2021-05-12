import { StyleSheet } from 'react-native';
import { borderColour, padding, primaryColour } from '../../utils/styles';

export default StyleSheet.create({
  buttonWrapper: {
    padding,
  },
  cardWrapper: {
    marginBottom: padding,
  },
  container: {
    padding,
  },
  infoRowWrapper: {
    marginBottom: 10,
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
