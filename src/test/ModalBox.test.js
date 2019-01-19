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
      "description": "A book about quilting.",
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

  it('handles props', () => {
    expect(item.prop('book')).toEqual(book);
  });

  it('renders book info from props', () => {
    expect(item.contains("Freddy Moran, Gwen Marston")).toBe(true);
    expect(item.contains("Collaborative Quilting")).toBe(true);
    expect(item.contains("Sterling Publishing Company, Inc.")).toBe(true);
    expect(item.contains("A book about quilting.")).toBe(true);
  });
});
