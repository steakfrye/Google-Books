import React, { Component } from 'react';
import BookItem from './BookItem';

class BookFeed extends Component {
  render() {
    const { books, showModal } = this.props;

    return (
      books.map(book => <BookItem key={book.id} book={book} showModal={showModal}/>)
    );
  }
}

export default BookFeed;
