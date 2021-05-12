import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './index';

const props = {
  queryString: 'Boulder',
  onChange: () => {},
  onSubmit: () => {},
}

describe('<SearchBox />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchBox { ...props } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
