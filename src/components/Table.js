import React, { Component } from 'react';
import BookFeed from './BookFeed';
import ModalBox from './ModalBox';

export class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      showComponent: false
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal(book) {
    this.setState({ book: book, showComponent: true })
  }

  render() {
    return (
      <div className="container">
        {this.state.showComponent ?
        <ModalBox book={this.state.book} /> :
        null}
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
            <BookFeed books={this.props.books} showModal={this.showModal}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
