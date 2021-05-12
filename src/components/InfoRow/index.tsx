import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

type Props = {
  keyLabel: string;
  label: string;
  onPress?: () => void;
}

const BreweryCardComponent: FC <Props> = ({ keyLabel, label, onPress }): JSX.Element => (
  <View style={styles.row}>
    <Text style={styles.keyLabel}>{keyLabel}</Text>
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableWithoutFeedback>
  </View>
);

export default BreweryCardComponent;
