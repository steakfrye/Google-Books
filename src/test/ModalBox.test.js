import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import ModalBox from '../components/ModalBox';

configure({ adapter: new Adapter() });

describe('<ModalBox />', () => {
  const book = {
    "id": "bZ_JqLD6NAEC",
    "volumeInfo": {
      "title": "Collaborative Quilting",
      "authors": [
       "Freddy Moran",
       "Gwen Marston"
     ],"publisher": "Sterling Publishing Company, Inc.",
     "imageLinks": {"thumbnail": "http://tinyurl.com/55"}
   }
 }
  const item = mount(<ModalBox book={book}/>)

  it('renders data from server', () => {
  const tree = renderer
    .create(item)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

  it('renders book info from props', () => {
    expect(item.contains(<td>Freddy Moran, Gwen Marston</td>)).toBe(true);
    expect(item.contains(<td>Collaborative Quilting</td>)).toBe(true);
    expect(item.contains(<td>Sterling Publishing Company, Inc.</td>)).toBe(true);
  });
});
