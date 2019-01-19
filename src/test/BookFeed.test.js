import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import BookFeed from '../components/BookFeed';

configure({ adapter: new Adapter() });

describe('<BookFeed />', () => {
  const books = [{
    "id": "bZ_JqLD6NAEC",
    "volumeInfo": {
      "title": "Collaborative Quilting",
      "authors": [
       "Freddy Moran",
       "Gwen Marston"
     ],"publisher": "Sterling Publishing Company, Inc.",
     "imageLinks": {"thumbnail": "http://tinyurl.com/55"}
   }
 },
 {
   "id": "bZ_JqLD6NADC",
   "volumeInfo": {
     "title": "Collaborative Pizza",
     "authors": [
      "James Morgan",
      "Greg Mangus"
    ],"publisher": "The Publishing Company, Inc.",
    "imageLinks": {"thumbnail": "http://tinyurl.com/54"}
  }
 }]
  const item = mount(<BookFeed books={books}/>)

  it('renders data from server', () => {
    const tree = renderer
      .create(item)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('will not crash when given missing JSON data', () => {
    const emptyItem = mount(
      <BookFeed books={[{"id": "abc", "volumeInfo": {"title": "Empty"}}]} />
    );
    expect(emptyItem).toHaveLength(1);
  });
});
