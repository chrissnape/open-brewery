import React from 'react';
import renderer from 'react-test-renderer';
import Search from './index';
import { breweries } from '../../utils/mockObjects';

const props = {
  breweries: breweries,
  breweriesGetSuccess: true,
  breweriesGetFailure: false,
  favouriteBreweries: [],
  getBreweries: () => {},
  navigation: {},
  queryCity: null,
  selectBrewery: () => {},
}

describe('<Search />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Search { ...props } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});