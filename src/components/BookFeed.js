import React, { Component } from 'react';
import BookItem from './BookItem';

class BookFeed extends Component {
  render() {
    const { books } = this.props;

    return (
      books.map(book => <BookItem key={book.id} book={book} />)
    );
  }
}

export default BookFeed;
