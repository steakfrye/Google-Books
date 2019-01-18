import React, { Component } from 'react';

export class BookItem extends Component {
  render() {
  // fetch('https://www.googleapis.com/books/v1/volumes/bZ_JqLD6NAEC&key=AIzaSyC9-zqVJ9Sfn4OQaOxt7RPeRUAgDpYbJHs')
  //   .then((res) => {
  //     console.log(res);
  //     this.setState({book: res});
  //   });

  const { book } = this.props;

    return (
      <tr>
        <td>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </td>
        <td>{book.volumeInfo.authors}</td>
        <td>{book.volumeInfo.title}</td>
        <td>{book.volumeInfo.publisher}</td>
      </tr>
    );
  }
}

export default BookItem;
