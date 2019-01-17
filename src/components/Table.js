import React, { Component } from 'react';
import BookItem from './BookItem';

export class Table extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Author</th>
              <th>Title</th>
              <th>Publisher</th>
            </tr>
          </thead>
            <tbody>
              <BookItem />
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

// Type in a query and display a list of books matching that query.
// Each item in the list should include the book's author, title, and publishing
// company, as well as a picture of the book.
// From each list item, you should also be able to navigate to more information
 // about the book, but this information does not necessarily need to appear on
 // a page within your application. In other words, this could link out to an
 // external site with more information about that particular book.
