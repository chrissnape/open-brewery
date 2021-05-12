import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

type Props = {
  label: string;
  onPress: () => void;
}

const BreweryCardComponent: FC <Props> = ({ label, onPress }): JSX.Element => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default BreweryCardComponent;
