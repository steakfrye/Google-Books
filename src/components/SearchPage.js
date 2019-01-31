import React, { Component } from 'react';

import NoResults from './NoResults';
import Table from './Table';

class SearchPage extends Component {
  render() {
    const { books, onSearch, terms, start } = this.props;

    if (!books || books.length === 0) {
      return (<NoResults />);
    } else {
      return (
        <Table
          books={books}
          onSearch={onSearch}
          terms={terms}
          start={start}
        />
      );
    }
  }
}

export default SearchPage;
