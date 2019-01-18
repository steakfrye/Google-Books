import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import Table from './components/Table';

const key = require('./config/keys');

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: []
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(terms) {
    let modified = terms.replace(/\s/g, '+');
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${modified}&key=${key.secretKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ searchResults: data.items });
      })
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <Table books={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
