import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import SearchPage from '../components/SearchPage';

configure({ adapter: new Adapter() });

describe('<SearchPage />', () => {
  const books = [{
    id: 'bZ_JqLD6NAEC',
    volumeInfo: {
      title: 'Collaborative Quilting',
      authors: [
       'Freddy Moran',
       'Gwen Marston',
      ],
      publisher: 'Sterling Publishing Company, Inc.',
      imageLinks: { thumbnail: 'http://tinyurl.com/55' },
    },
  },
 {
    id: 'bZ_JqLD6NADC',
    volumeInfo: {
      title: 'Collaborative Pizza',
      authors: [
        'James Morgan',
        'Greg Mangus',
      ],
      publisher: 'The Publishing Company, Inc.',
      imageLinks: { thumbnail: 'http://tinyurl.com/54' },
    },
  }];

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
