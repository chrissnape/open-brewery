import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React, { FC, Fragment, useState } from 'react';
import { Text, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Button, InfoRow } from '../../components/index';
import { Brewery } from '../../utils/types';
import styles from './styles';

type Props = {
  selectedBrewery: Brewery | null;
}

const BreweryScreen: FC <Props> = ({ selectedBrewery }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  if (!selectedBrewery) {
    return <Text>Unable to find brewery</Text>
  }
  const { city, county_province, phone, postal_code, state, website_url } = selectedBrewery;
  const showLabel  = isOpen ? 'Hide information' : 'Show more information';
  return (
    <Fragment>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          <InfoRow
            keyLabel="City"
            label={city}
          />
          <InfoRow
            keyLabel="State"
            label={state}
          />
          {county_province && (
            <InfoRow
              keyLabel="County"
              label={county_province}
            />
          )}
          <InfoRow
            keyLabel="Postal Code"
            label={postal_code}
          />
          {(phone || website_url) && (
            <Fragment>
              <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
                <Text style={styles.showInfoButton}>{showLabel}</Text>
              </TouchableWithoutFeedback>
              {isOpen && (
                <Fragment>
                  {phone && (
                    <InfoRow
                      keyLabel="Phone Number"
                      label={phone}
                    />
                  )}
                  {website_url && (
                    <InfoRow
                      keyLabel="Website URL"
                      label={website_url}
                      onPress={() => WebBrowser.openBrowserAsync(website_url)}
                    />
                  )}
                </Fragment>
              )}
            </Fragment>
          )}
        </View>
      </ScrollView>
    </Fragment>
  );
}

export default BreweryScreen;
