import React from 'react';
import renderer from 'react-test-renderer';
import BreweryCard from './index';

const props = {
  city: 'Los Angeles',
  name: 'Lorem ipsum',
  state: 'California',
}

describe('<BreweryCard />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BreweryCard { ...props } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
