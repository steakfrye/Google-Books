import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Table from '../components/Table';

configure({ adapter: new Adapter() });

describe('<Table />', () => {
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

  it('renders', () => {
    const tree = renderer
      .create(shallow(<Table books={books} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
