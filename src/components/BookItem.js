import React, { Component } from 'react';

export class BookItem extends Component {
  render() {
  const { book } = this.props;

    return (
      <tr>
        <td>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </td>
        <td>{book.volumeInfo.title}</td>
        <td>{book.volumeInfo.authors.join(", ")}</td>
        <td>{book.volumeInfo.publisher}</td>
      </tr>
    );
  }
}

export default BookItem;
