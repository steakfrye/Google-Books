import React, { Component } from 'react';
import './App.css';

import LandingPage from './components/LandingPage';
import Table from './components/Table';
import Navbar from './components/Navbar';

const key = require('./config/keys');

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      error: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  // Handles search errors and fetches data
  onSearch(terms) {
    let filteredTerms = terms.replace(/\s/g, '+');

    if (!filteredTerms || filteredTerms.length === 0) {
      this.setState({ error: 'You must submit a valid search.' });
    } else {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${filteredTerms}&key=${key.secretKey}`)
        .then(res => {
            if (!res.ok) {
              throw Error(res.statusText);
            }

            return res.json();
          })
        .then(data => {
          console.log(data);
          this.setState({ searchResults: data.items });
        })
        .catch(err => {
          this.setState({ error: 'You must submit a valid search.' });
        });
    }
  }

  handleErrors(res) {
    if (!res.ok) {
      throw Error(res.statusText);
    }

    return res;
  }

  render() {
    return (
      <div className="App">
        {this.state.searchResults.length === 0 ?
          <LandingPage onSearch={this.onSearch} error={this.state.error} />
          : <div>
            <Navbar onSearch={this.onSearch} />
            <Table books={this.state.searchResults} />
          </div>
        }
      </div>
    );
  }
}

export default App;
