import React, { Component } from 'react';

import { lookFor, lookForImage } from '../utils/utilities';

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
          <img src={lookForImage(book.volumeInfo.imageLinks)} alt={book.volumeInfo.title}/>
        </td>
        <td>{lookFor(book.volumeInfo.title, 'title')}</td>
        <td>{lookFor(book.volumeInfo.authors, 'authors')}</td>
        <td>{lookFor(book.volumeInfo.publisher, 'publisher')}</td>
      </tr>
    );
  }
}

export default BookItem;
