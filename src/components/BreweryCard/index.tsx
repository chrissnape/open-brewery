import React, { FC, Fragment } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  city: string;
  name: string;
  onPress: () => void,
  state: string;
}

const BreweryCardComponent: FC <Props> = ({ city, name, onPress, state }): JSX.Element => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text>{`${city}, ${state}`}</Text>
      </View>
      <Ionicons style={styles.icon} name="chevron-forward-outline" />
    </View>
   </TouchableWithoutFeedback>
);

export default BreweryCardComponent;
