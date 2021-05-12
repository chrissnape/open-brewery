import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

type Props = {
  queryString: string;
  onChange: (text: string) => void,
  onSubmit: () => void;
}

const SearchBoxComponent: FC <Props> = ({ queryString, onChange, onSubmit }): JSX.Element => (
  <View style={styles.row}>
    <TextInput
      style={styles.input}
      blurOnSubmit onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder="Search city..."
      value={queryString}
    />
    <Ionicons style={styles.icon} name="search-outline" />
  </View>
);

export default SearchBoxComponent;
