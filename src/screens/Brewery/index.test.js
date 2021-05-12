import React from 'react';
import renderer from 'react-test-renderer';
import Brewery from './index';

const props = {
  addToFavourites: () => {},
  favouriteBreweries: [],
  selectedBrewery: null,
}

describe('<Brewery />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Brewery { ...props } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});