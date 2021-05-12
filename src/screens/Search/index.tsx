import { StatusBar } from 'expo-status-bar';
import React, { FC, Fragment, useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback} from 'react-native';
import { BreweryCard, SearchBox } from '../../components';
import { BREWERY } from '../../utils/constants';
import { Brewery } from '../../utils/types';
import styles from './styles';

type Props = {
  breweries: Array<Brewery>;
  breweriesGetSuccess: boolean,
  breweriesGetFailure: boolean,
  favouriteBreweries: Array<number>;
  getBreweries: (city?: string) => void;
  navigation: any,
  queryCity: string | null,
  selectBrewery: (id: number) => void;
}

const SearchScreen: FC <Props> = ({ breweries, breweriesGetSuccess, breweriesGetFailure, favouriteBreweries, getBreweries, navigation, queryCity, selectBrewery }): JSX.Element => {
  const [queryString, setQueryString] = useState<string>('');
  useEffect(() => {
    getBreweries();
  }, []);
  const renderContent = () => {
    if (breweriesGetSuccess) {
      return (
        <Fragment>
          {breweries.map((brewery: Brewery) => {
            const { id, city, name, state } = brewery;
            return (
              <View style={styles.cardWrapper} key={id}>
                <BreweryCard
                  city={city}
                  isFavourite={favouriteBreweries.includes(id)}
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
        </Fragment>
      );
    }
    if (breweriesGetFailure) {
      return (
        <Text>Failed to fetch breweries</Text>
      );
    }
    return (
      <Text>Fetching breweries</Text>
    );
  }
  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.searchBoxWrapper}>
        <SearchBox queryString={queryString} onChange={setQueryString} onSubmit={() => getBreweries(queryString)}/>
      </View>
      <View style={styles.queryWrapper}>
        <Text style={styles.queryString}>{queryCity || 'All'}</Text>
        {queryCity && (
          <TouchableWithoutFeedback onPress={() => {
            setQueryString('');
            getBreweries();
          }}>
            <Text style={styles.clearQueryString}>Clear</Text>
          </TouchableWithoutFeedback>
        )}
      </View>
      <ScrollView>
        <View style={styles.container}>
          {renderContent()}
        </View>
      </ScrollView>
    </Fragment>
  );
}

export default SearchScreen;
