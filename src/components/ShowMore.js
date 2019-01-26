import React, { Component } from 'react';

export class ShowMore extends Component {
  constructor(props) {
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
  }

  fetchMore() {
    const start = this.props.start + 10;
    this.props.onSearch(this.props.terms, start);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.fetchMore}>
          Show more...
        </button>
      </div>
    );
  }
}

export default ShowMore;
