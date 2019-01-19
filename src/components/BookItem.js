import React, { Component } from 'react';

import { evaluate, evaluateImage } from '../utils/evaluate';

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
          <img src={evaluateImage(book.volumeInfo.imageLinks)} alt={book.volumeInfo.title}/>
        </td>
        <td>{evaluate(book.volumeInfo.title, 'title')}</td>
        <td>{evaluate(book.volumeInfo.authors, 'authors')}</td>
        <td>{evaluate(book.volumeInfo.publisher, 'publisher')}</td>
      </tr>
    );
  }
}

export default BookItem;
