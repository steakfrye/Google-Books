import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import ModalBox from '../components/ModalBox';

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
  const box = mount(<ModalBox book={book}/>)

  it('renders data from server', () => {
    const tree = renderer
      .create(box)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles props', () => {
    expect(box.prop('book')).toEqual(book);
  });

  it('renders book info from props', () => {
    const tree = renderer
      .create(box)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
