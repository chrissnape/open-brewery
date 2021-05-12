import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

type Props = {
  label: string;
  onPress: () => void;
  primary?: boolean,
}

const ButtonComponent: FC <Props> = ({ label, onPress, primary = false }): JSX.Element => {
  const buttonStyle = (primary) ? {...styles.button, ...styles.buttonIsPrimary} : styles.button;
  const labelStyle = (primary) ? {...styles.label, ...styles.labelIsPrimary} : styles.label;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={labelStyle}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ButtonComponent;
