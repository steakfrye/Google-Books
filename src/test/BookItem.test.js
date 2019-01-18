import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import BookItem from './components/BookItem';

configure({ adapter: new Adapter() });

describe('<BookItem />', () => {
  const book = {
    "id": "bZ_JqLD6NAEC",
    "volumeInfo": {
      "title": "Collaborative Quilting",
      "authors": [
       "Freddy Moran",
       "Gwen Marston"
     ],"publisher": "Sterling Publishing Company, Inc.",
     "imageLinks": {"thumbnail": "http://books.google.com/books/content?id=bZ_JqLD6NAEC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73CqzBpRcymtLoo0O0ACBgpwlp9eYqWrVWRuH7ixZNcbQtWUKhG6aOjPNC2XlGTuSwUbKe6262UjC2lI0T8nb1Ia0Ez7WW-Cczvk_Bvrla9n7cSJ6emZN89rHmLPRALNdydZko-&source=gbs_api"}
   }
  }
  const item = mount(<BookItem book={book}/>)

  it('renders book info from props', () => {
    expect(item.contains(<tr>Freddy Moran, Gwen Marston</tr>)).toBe(true);
    expect(item.contains(<tr>Collaborative Quilting</tr>)).toBe(true);
    expect(item.contains(<tr>Sterling Publishing Company, Inc.</tr>)).toBe(true);
  });
});
