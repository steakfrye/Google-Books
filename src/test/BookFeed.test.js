import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
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
  const item = shallow(<BookFeed books={books}/>)

  it('renders data from server', () => {
    const tree = renderer
      .create(item)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
