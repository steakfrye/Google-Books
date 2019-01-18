import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchParams: ''
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(terms) {
    let modified = terms.replace(/\s/g, '+');
    fetch('https://www.googleapis.com/books/v1/volumes?q=${modified}')
      .then(res => {
        console.log(res);
        this.setState({ searchParams: res.data });
      })
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <Table searchParams={this.state.searchParams} />
      </div>
    );
  }
}

export default App;
