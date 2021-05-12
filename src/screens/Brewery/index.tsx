import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React, { FC, Fragment, useState } from 'react';
import { Text, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Button, InfoRow } from '../../components/index';
import { Brewery } from '../../utils/types';
import styles from './styles';

type Props = {
  addToFavourites: (id: number) => void;
  favouriteBreweries: Array<number>;
  selectedBrewery: Brewery | null;
}

const BreweryScreen: FC <Props> = ({ addToFavourites, favouriteBreweries, selectedBrewery }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (!selectedBrewery) {
    return <Text>Unable to find brewery</Text>
  }
  const { id, brewery_type, city, county_province, phone, postal_code, state,website_url } = selectedBrewery;
  const isFavourite = favouriteBreweries.includes(id);
  const showLabel  = isOpen ? 'Hide information' : 'Show more information';
  return (
    <Fragment>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.infoRowWrapper}>
            <InfoRow
              keyLabel="City"
              label={city}
            />
          </View>
          <View style={styles.infoRowWrapper}>
            <InfoRow
              keyLabel="State"
              label={state}
            />
          </View>
          {county_province && (
            <View style={styles.infoRowWrapper}>
              <InfoRow
                keyLabel="County"
                label={county_province}
              />
            </View>
          )}
          <View style={styles.infoRowWrapper}>
            <InfoRow
              keyLabel="Postal Code"
              label={postal_code}
            />
          </View>
          {(phone || website_url) && (
            <Fragment>
              <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
                <Text style={styles.showInfoButton}>{showLabel}</Text>
              </TouchableWithoutFeedback>
              {isOpen && (
                <Fragment>
                  <View style={styles.infoRowWrapper}>
                    <InfoRow
                      keyLabel="Brewery Type"
                      label={brewery_type}
                    />
                  </View>
                  {phone && (
                    <View style={styles.infoRowWrapper}>
                      <InfoRow
                        keyLabel="Phone Number"
                        label={phone}
                      />
                    </View>
                  )}
                  {website_url && (
                    <View style={styles.infoRowWrapper}>
                      <InfoRow
                        keyLabel="Website URL"
                        label={website_url}
                        onPress={() => WebBrowser.openBrowserAsync(website_url)}
                      />
                    </View>
                  )}
                </Fragment>
              )}
            </Fragment>
          )}
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button label={isFavourite ? 'Remove from favourites' : 'Add to favourites'} onPress={() => addToFavourites(id)} primary={!isFavourite} />
      </View>
    </Fragment>
  );
}

export default BreweryScreen;
