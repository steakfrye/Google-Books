import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import BookFeed from '../components/BookFeed';
import books from './mockData';

configure({ adapter: new Adapter() });

describe('<BookFeed />', () => {

  it('renders data from server', () => {
    const feed = mount(<BookFeed books={books} />);
    const tree = renderer
      .create(feed)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('will not crash when given missing JSON data', () => {
    const emptyItem = mount(
      <BookFeed books={[{ id: 'abc', volumeInfo: { title: 'Empty' } }]} />
    );
    expect(emptyItem).toHaveLength(1);
  });
});
