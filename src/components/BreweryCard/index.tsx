import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  city: string;
  isFavourite: boolean,
  name: string;
  onPress: () => void,
  state: string;
}

const BreweryCardComponent: FC <Props> = ({ city, isFavourite, name, onPress, state }): JSX.Element => {
  const cardStyle = isFavourite ? { ...styles.card, ...styles.cardIsFavourite } : styles.card;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={cardStyle}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text>{`${city}, ${state}`}</Text>
        </View>
        <Ionicons style={styles.icon} name="chevron-forward-outline" />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default BreweryCardComponent;
