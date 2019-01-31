import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import SearchPage from '../components/SearchPage';
import books from './mockData';

configure({ adapter: new Adapter() });

describe('<SearchPage />', () => {

  it('renders with data', () => {
    const page = mount(<SearchPage books={books} />);

    const tree = renderer
      .create(page)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without data', () => {
    const page = mount(<SearchPage books={[]} />);

    const tree = renderer
      .create(page)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
