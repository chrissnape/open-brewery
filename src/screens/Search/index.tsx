import { StatusBar } from 'expo-status-bar';
import React, { FC, Fragment, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { BreweryCard } from '../../components';
import { BREWERY } from '../../utils/constants';
import { Brewery } from '../../utils/types';
import styles from './styles';

type Props = {
  breweries: Array<Brewery>;
  getBreweries: () => void;


  navigation: any,


  selectBrewery: (id: number) => void;
}

const SearchScreen: FC <Props> = ({ breweries, getBreweries, navigation, selectBrewery}): JSX.Element => {
  useEffect(() => {
    getBreweries();
  }, [])
  return (
    <Fragment>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          {breweries.map((brewery: Brewery) => {
            const { id, city, name, state } = brewery;
            return (
              <View style={styles.cardWrapper} key={id}>
                <BreweryCard
                  city={city}
                  name={name}
                  onPress={() => {
                    selectBrewery(id);
                    navigation.navigate(BREWERY, { name });
                  }}
                  state={state}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Fragment>
  );
}

export default SearchScreen;
