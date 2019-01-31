import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Search from '../components/Search';

configure({ adapter: new Adapter() });

describe('<Search />', () => {
  const onSearch = jest.fn();
  const props = {
    className: 'form-control col-sm-4',
    formClass: 'form-group row justify-content-center',
    onSearch: onSearch,
    error: '',
  };

  it('displays error messages', () => {
    const testSearch = mount(<Search error="Error!" />);
    expect(testSearch.contains('Error!')).toEqual(true);
  });
});
