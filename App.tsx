import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Brewery, Search } from './src/containers';
import store from './src/store';

import { BREWERY, SEARCH_BREWERIES } from './src/utils/constants';
import { primaryColour } from './src/utils/styles';

const Stack = createStackNavigator();

export default (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: primaryColour,
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name={SEARCH_BREWERIES} component={Search} />
        <Stack.Screen name={BREWERY} component={Brewery} options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);