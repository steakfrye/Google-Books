import React, { Component } from 'react';

export class BookItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      errors: {}
    }
  }

  componentDidMount() {
  this.setState({ book: this.props.book });
}

// Reset book render
componentWillReceiveProps(nextProps) {
  if(this.props !== nextProps) {
    this.setState({ book: nextProps.book, errors: nextProps.errors })
  }
}

  render() {
  fetch('https://www.googleapis.com/books/v1/volumes/bZ_JqLD6NAEC')
    .then((res) => {
      console.log(res);
      this.setState({book: res});
    });

  const { book } = this.state;

    return (
      <div>
        <tr>
          <td></td>
          <td>Author: {book.authors}</td>
          <td>Title: {book.title}</td>
          <td>Publisher: {book.publisher}</td>
        </tr>
      </div>
    );
  }
}

export default BookItem;
