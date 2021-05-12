import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

const props = {
  label: 'View more',
  onPress: () => {},
}

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button { ...props } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});