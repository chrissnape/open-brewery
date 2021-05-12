import React from 'react';
import renderer from 'react-test-renderer';
import InfoRow from './index';

const props = {
  keyLabel: 'Lorem',
  label: 'Ipsum',
}

describe('<InfoRow />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InfoRow { ...props } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
