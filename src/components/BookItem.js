import React, { Component } from 'react';

export class BookItem extends Component {
  render() {
  const { book, showModal } = this.props;

    return (
      <tr
        className="toggleInput"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => showModal(book)}>
        <td>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </td>
        <td>{book.volumeInfo.title ?
          book.volumeInfo.title :
          "No title found"
        }</td>
        <td>{book.volumeInfo.authors ?
          book.volumeInfo.authors.join(", ") :
          "No authors found"
        }</td>
        <td>{book.volumeInfo.publisher ?
          book.volumeInfo.publisher :
          "No publisher found"
        }</td>
      </tr>
    );
  }
}

export default BookItem;
