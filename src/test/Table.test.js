import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Table from '../components/Table';
import books from './mockData';

configure({ adapter: new Adapter() });

describe('<Table />', () => {

  it('renders book data', () => {
    const tree = renderer
      .create(shallow(<Table books={books} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
