import React, { Component } from 'react';
import BookFeed from './BookFeed';

export class Table extends Component {

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>              
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Publisher</th>
            </tr>
          </thead>
          <tbody>
            <BookFeed books={this.props.books} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
